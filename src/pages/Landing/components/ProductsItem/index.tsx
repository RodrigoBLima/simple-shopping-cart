/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable no-plusplus */
import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActionArea,
  CardActions
} from '@mui/material';

import { useCartContext } from '../../../../contexts/cart/CartContextProvider';
import { ProductItemProps } from '../../../../types/products';

import './index.css';

function ProductsItem(props: ProductItemProps) {
  const { products: cartProducts, setProducts: setCartProducts } =
    useCartContext();

  const { product: productItem } = props;
  const copyCartProducts = cartProducts;

  const checkDuplicateProduct = (cartProducts || []).findIndex(
    (cartItemProduct) => cartItemProduct.id === productItem.id
  );

  function handleCheckAlreadyExistsProduct(index: number) {
    const currentProduct = copyCartProducts[index];

    currentProduct.quantity = currentProduct?.quantity
      ? currentProduct?.quantity + 1
      : 1;

    copyCartProducts[index] = currentProduct;

    setCartProducts(copyCartProducts);
  }

  function handleAddProductOnCart() {
    if (checkDuplicateProduct !== -1) {
      handleCheckAlreadyExistsProduct(checkDuplicateProduct);
    } else {
      const updatedCardProducts = [
        ...copyCartProducts,
        { ...productItem, quantity: 1 }
      ];
      setCartProducts(updatedCardProducts);
    }
  }

  return (
    <Card
      sx={{ maxWidth: 345 }}
      className="cart-product-item"
      data-testid="cart-product-item">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={productItem.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {productItem.title} - R$ {productItem.price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {productItem.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          data-testid="add-product-on-cart"
          onClick={() => handleAddProductOnCart()}>
          Adicionar ao carrinho
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProductsItem;

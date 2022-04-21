import React from 'react';

import {
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography
} from '@mui/material';

import IconButton from '@mui/material/IconButton';

import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

import { CartProductItemProps } from '../../../../types/cart';
import { useCartContext } from '../../../../contexts/cart/CartContextProvider';

import './index.css';

function CartProductItem(props: CartProductItemProps) {
  const {
    handleAddMoreQuantityOnProduct,
    handleSubtractLessQuantityOnProduct,
    handleCartProductRemove
  } = useCartContext();
  const { product: productItem, index } = props;
  const solvedIndex = index || 0;

  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt="photo of product cart" src={productItem.image} />
      </ListItemAvatar>
      <ListItemText
        primary={productItem.title}
        secondary={
          <>
            <Typography
              sx={{ display: 'inline' }}
              component="span"
              variant="body2"
              color="text.primary">
              {productItem.description}
            </Typography>

            <br />

            <Typography sx={{ display: 'inline' }} color="text.primary">
              R$:{' '}
              <span className="price-product-cart">{productItem.price}</span>
            </Typography>

            <br />

            <section className="cart-product-item-select-quantity">
              <IconButton
                aria-label="plus"
                onClick={() =>
                  handleSubtractLessQuantityOnProduct(solvedIndex)
                }>
                <RemoveIcon htmlColor="#000" />
              </IconButton>

              <span className="quantity-item ">{productItem.quantity}</span>

              <IconButton
                aria-label="plus"
                onClick={() => handleAddMoreQuantityOnProduct(solvedIndex)}>
                <AddIcon htmlColor="#000" />
              </IconButton>
            </section>
          </>
        }
      />

      <IconButton
        aria-label="delete"
        onClick={() => handleCartProductRemove(productItem)}>
        <DeleteIcon htmlColor="#c64c4d" />
      </IconButton>
    </ListItem>
  );
}

export default CartProductItem;

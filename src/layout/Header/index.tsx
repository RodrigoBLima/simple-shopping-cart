import * as React from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  MenuItem,
  Badge
} from '@mui/material';

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import { Link } from 'react-router-dom';
import { useCartContext } from '../../contexts/cart/CartContextProvider';

function Header() {
  const { total } = useCartContext();

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" id="app-bar">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            className="app-bar-logo"
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}>
            SHOPPING CART
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left'
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' }
              }}>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link to="/">PRODUTOS</Link>
              </MenuItem>
            </Menu>
          </Box>

          <Typography
            className="app-bar-logo"
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            SHOPPING CART
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Link to="/" onClick={handleCloseNavMenu}>
              PRODUTOS
            </Link>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Badge badgeContent={total} color="info">
              <Link to="/cart">
                <ShoppingCartOutlinedIcon height={40} htmlColor="#FFF" />
              </Link>
            </Badge>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;

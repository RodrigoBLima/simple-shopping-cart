import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      Header
      <Link to="/cart">Carrinho</Link>
      <Link to="/">Produtos</Link>
    </div>
  );
}

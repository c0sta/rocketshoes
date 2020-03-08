import React from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';
import { Container, Cart } from './Header.style';
import logo from '../../assets/logo.svg';

// eslint-disable-next-line import/prefer-default-export
export const Header = () => {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="rocketshoes logo" />
      </Link>
      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>3 itens</span>
        </div>
        <MdShoppingBasket size={36} color="#fff" />
      </Cart>
    </Container>
  );
};

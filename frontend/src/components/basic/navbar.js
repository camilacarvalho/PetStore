import React from 'react';
import ImageBasket from '../../assets/images/basket.svg'
import Paw from '../../assets/images/paw.svg'
import Favorite from '../../assets/images/cards-heart.svg'

function NavBar() {
  return (
    <nav className="navbar navbar-dark bg-warning">
      <img src={Paw} width="30" height="30" alt="" />
      <a className="navbar-brand text-dark" href="#/">Pet Store</a>
      <a className="navbar-brand" href="#/shopping_cart" style={{ marginRight: "2em", marginLeft: "auto" }}>
        <img src={ImageBasket} width="30" height="30" alt="" />
      </a>
      <a className="navbar-brand" href="#/favorites" style={{ marginRight: "0 em" }}>
        <img src={Favorite} width="30" height="30" alt="" />
      </a>
    </nav>
  );
}

export default NavBar;
import React, {useContext} from 'react';
import ImageBasket from '../../assets/images/basket.svg'
import Paw from '../../assets/images/paw.svg'
import Favorite from '../../assets/images/cards-heart.svg'
import ThemeContext from "../../context/ThemeContext";
import AppTheme from "../themes";

function NavBar(props) {

  const theme = useContext(ThemeContext)[0];
  const[themeMode, setThemeMode] = useContext(ThemeContext);

  var handleChange = (event) => {
    console.log(event.target.value)
    console.log(themeMode)
    setThemeMode(event.target.value)
}

  return (
    <nav className={AppTheme[theme].navbar} >
      <img src={Paw} width="30" height="30" alt="" />
      <a className="navbar-brand" href="#/">Pet Store</a>
      <a className="navbar-brand" href="#/shopping_cart" style={{ marginRight: "2em", marginLeft: "auto" }}>
        <img src={ImageBasket} width="30" height="30" alt="" />
      </a>
      <a className="navbar-brand" href="#/favorites" style={{ marginRight: "0 em" }}>
        <img src={Favorite} width="30" height="30" alt="" />
      </a>
      <div className="navbar-brand">
        <label>Thema: </label>
        <select id="colorselector" onChange={handleChange} >
    <option value="success" >Verde</option>
    <option value="warning" selected="selected">Amarelo</option>
    <option value="danger" >Vermelho</option>
    <option value="info" >Azul</option>
    <option value="link" >Branco</option>
</select></div>
    </nav>
  );
}

export default NavBar;
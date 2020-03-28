import React from 'react';

import { HashRouter, Switch, Route} from 'react-router-dom'; 
import Products from './views/products';
import Basket from './views/basket';
import Favorites from './views/favorites';

export default () => {
    return(
        <HashRouter> 
            <Switch>
                <Route exact={true} path="/" component={Products}/>
                <Route exact={true} path="/favorites" component={Favorites}/>
                <Route exact={true} path="/shopping_cart" component={Basket}/>
            </Switch>
        </HashRouter>
    )
}
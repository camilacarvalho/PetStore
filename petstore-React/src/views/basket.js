import React from 'react';
import ItemBasket from '../components/basket/item-basket';
import { Product } from '../model/product-model';

function Basket() {
    const product1 = new Product(1, "Coleira","Coleira na cor preta com pinjente de ossinho prata.", 3,30.00,"Acessorios","https://www.petelegante.com.br/media/catalog/product/c/o/coleira_preta-pingente_1.jpg")
    const product2 = new Product(2, "Ração","Ração Canina, 18k. Para filhotes.", 0,120.0,"Alimento","https://araujo.vteximg.com.br/arquivos/ids/3897061-1000-1000/07896015605193.jpg?v=636796038206100000")
    
    var products = [];
    products.push(product1);
    products.push(product2);

    var total=0;

    return (
        <>
            <div className="container-sm">
                <br />
                <div className="card" style={{padding: "2rem", backgroundColor: "rgb(220,220,220)"}}>
                    <h3>Carrinho</h3>
                    <div className="dropdown-divider"></div>
                    <div className="row">
                        <div className="col-sm-6 col-md-8">
                            {products.map(product=>{
                                total=total+product.price
                               return (<ItemBasket product={product} />)
                            })
                            }
                       </div>
                        <div className="col-6 col-md-4">
                            <p className="card-text"><small className="text-muted">Total</small></p>
                            <h2>R${total.toFixed(2)}</h2>
                            <button type="button" className="btn btn-warning btn-lg btn-block">Finalizar Compra</button>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Basket;
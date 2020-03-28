import React from 'react';
import Page from '../components/page';
import ListProduct from '../components/product/list-product';

import { Product } from '../model/product-model';

function Favorites() {
    const product1 = new Product(1, "Coleira","Coleira na cor preta com pinjente de ossinho prata.", 3,30.00,"Acessorios","https://www.petelegante.com.br/media/catalog/product/c/o/coleira_preta-pingente_1.jpg")
    const product2 = new Product(2, "Ração","Ração Canina, 18k. Para filhotes.", 0,100.00,"Alimento","https://araujo.vteximg.com.br/arquivos/ids/3897061-1000-1000/07896015605193.jpg?v=636796038206100000")
    const product3 = new Product(3, "Shampoo para gatos","Com delicioso cheirinho de amora, o Shampoo Pet Society Beeps Estopinha Gatos Extrato de Aveia vai tornar o banho do seu gatinho prático e rápido.", 1,20.00,"Higiene","https://www.petlove.com.br/images/products/198418/product/Shampoo_Pet_Society_Beeps_Estopinha_Gatos_Extrato_de_Aveia_1932461.jpg?1556467127")
    const product4 = new Product(4, "Gaiola","Gaiola Passarinho com Poleiro Nº04 Sabiá Canario Curió - Gaiolas confiança.",2,100.00,"Acessorios","https://images.tcdn.com.br/img/img_prod/727275/gaiola_trinca_ferro_arco_macho_79_1_20191030112340.jpg")
    
    var products = [];
    products.push(product1);
    products.push(product2);
    products.push(product3);
    products.push(product4);
    products.push(product4);
    products.push(product2);

    return (
        <>
            <div className="container-sm">
                <br />
                <div className="card" style={{padding: "2rem", backgroundColor: "rgb(220,220,220)"}}>
                    <h3>Lista de desejos</h3>
                    <div className="dropdown-divider"></div>
                    <ListProduct numberRow = {4} isFavorite={true} products={products}/>
                    <br />
                    <Page />
                </div>
       </div>
        </>
    );
}
export default Favorites;
import React from 'react';
import FilterProduct from '../components/filter-product';
import ListProduct from '../components/product/list-product';
import Page from '../components/page';
import { Product } from '../model/product-model';


function Products() {
    
    const product1 = new Product(1, "Coleira","Coleira na cor preta com pinjente de ossinho prata.", 3,30.00,"Acessorios","https://www.petelegante.com.br/media/catalog/product/c/o/coleira_preta-pingente_1.jpg")
    const product2 = new Product(2, "Ração","Ração Canina, 18k. Para filhotes.", 0,100.00,"Alimento","https://araujo.vteximg.com.br/arquivos/ids/3897061-1000-1000/07896015605193.jpg?v=636796038206100000")
    const product3 = new Product(3, "Shampoo para gatos","Com delicioso cheirinho de amora, o Shampoo Pet Society Beeps Estopinha Gatos Extrato de Aveia vai tornar o banho do seu gatinho prático e rápido.", 1,20.00,"Higiene","https://www.petlove.com.br/images/products/198418/product/Shampoo_Pet_Society_Beeps_Estopinha_Gatos_Extrato_de_Aveia_1932461.jpg?1556467127")
    const product4 = new Product(4, "Gaiola","Gaiola Passarinho com Poleiro Nº04 Sabiá Canario Curió - Gaiolas confiança.",2,100.00,"Acessorios","https://images.tcdn.com.br/img/img_prod/727275/gaiola_trinca_ferro_arco_macho_79_1_20191030112340.jpg")
    const product5 = new Product(5, "Bebedouro para gatos","Fonte para gato. 1l.",4,80.00,"Acessorios","https://http2.mlstatic.com/D_NQ_NP_659667-MLB31210163453_062019-W.jpg")
    const product6 = new Product(6, "Ração para peixes","Ração para peixes de aquario. 20g.",5,73.00,"Alimento","https://a-static.mlcdn.com.br/618x463/racao-para-peixes-de-aquario-alcon-basic-alimento-completo-em-flocos-para-peixes-20g/agropesc/535839/f649b1325a7e4b91e649d699655ea938.jpg")
    
    var products = [];
    products.push(product1);
    products.push(product2);
    products.push(product3);
    products.push(product4);
    products.push(product5);
    products.push(product6);
    products.push(product2);
    products.push(product5);

    var categories = [
        "ALIMENTO", "HIGIENE", "ACESSORIOS", "BRINQUEDOS"
    ];
    
    return (
        <>
            <div className="container-sm">
                <br />
                <div className="card" style={{ padding: "2rem" }}>
                    <h3>Nossos Produtos</h3>
                    <div className="dropdown-divider"></div>
                    <FilterProduct name="Categorias" categories={categories} />
                    <ListProduct numberRow = {3} isFavorite={false} products={products}/>
                    <br />
                    <Page />
                </div></div>
            <br />
            <br />
        </>
    );
}
export default Products;
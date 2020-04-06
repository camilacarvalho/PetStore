import React from 'react';
import Counter from '../basic/counter';
import ItemCard from '../basic/item-card';

function ItemBasket(props) {

    var onChange = (event) => {
        const valor = event;
        var item = props.item;
        item.quantity = valor;
        props.setQuantity(item);
    }

    return (
        <>
            <div className="card mb-3" style={{ padding: "1rem" }}>
                <div className="row no-gutters">
                <ItemCard
                        image={{ src: props.item.product.image, className: "card-img", alt: "", style: {} }}
                        column={{ image: "col-md-4", body: "col-md-8" }}
                        product={props.item.product}
                        description={<Counter name="quant" className="form-control" label="Quant. Itens:" onChange={onChange} min="1" precision={0} step="1" value={props.item.quantity} />}
                        list={["Preço: " + ((props.item.product.price) * props.item.quantity) + " R$"]}
                        buttonAction1={props.buttonAction1}
                        buttonAction2={props.buttonAction2}
                        item={props.item}
                        buttons={props.buttons}
                    />
                </div>
            </div>

        </>
    );
}
export default ItemBasket;
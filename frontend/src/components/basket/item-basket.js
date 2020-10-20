import React, {useContext} from 'react';
import Counter from '../basic/counter';
import ItemCard from '../card/item-card';
import ThemaContext from '../../context/ThemeContext'
import AppTheme from '../themes'

function ItemBasket({key, setQuantity, buttons, buttonAction1, buttonAction2, item}) {

    const theme = useContext(ThemaContext)[0];

    var onChange = (event) => {
        const valor = event;
        var i = item;
        i.quantity = valor;
        setQuantity(item);
    }

    return (
        <>
            <div className= {AppTheme[theme].cardbordermb3} style={{ padding: "1rem" }}>
                <div className="row no-gutters">
                <ItemCard
                        image={{ src: item.product.image, className: "card-img", alt: "", style: {} }}
                        column={{ image: "col-md-4", body: "col-md-8" }}
                        product={item.product}
                        description={<Counter name="quant" className="form-control" label="Quant. Itens:" onChange={onChange} min="1" precision={0} step="1" value={item.quantity} />}
                        list={["Preço: " + ((item.product.price) * item.quantity) + " R$"]}
                        buttonAction1={buttonAction1}
                        buttonAction2={buttonAction2}
                        item={item}
                        buttons={buttons}
                    />
                </div>
            </div>

        </>
    );
}
export default ItemBasket;
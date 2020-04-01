import React, { useState } from 'react';
import NumericInput from 'react-numeric-input';
import ModalConfirmation from '../basic/modal';

function ItemBasket(props) {
    const [quant, setQuant] = useState(1);
    const [showModal, setShowModal] = useState(false);


    var handleShow = () => {
        setShowModal(true);
    }

    var handleClose = () => {
        setShowModal(false);
    }

    var onChange = (event) => {
        const valor = event;
        setQuant(valor);
        var item = props.item;
        item.quantity = valor;
        props.setQuantity(item);
    }

    var actionButton = (button) => {
        props[button.action](props.item);
        if (button.confirmation) {
            handleClose();
        }
    }

    var confirmationButton = (button) => {
        if (button.confirmation) {
            handleShow();
        } else {
            actionButton(button);
        }
    }

    return (
        <>
            <div className="card mb-3" style={{ padding: "1rem" }}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img className="card-img"
                            src={props.item.product.image}
                            alt="" /> </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{props.item.product.name}</h5>
                            <form className="form-inline">
                                <label className="my-1 mr-2" for="inlineFormCustomSelectPref">Quant. Itens:</label>
                                <NumericInput name="quant" className="form-control" onChange={onChange} type="number" step="1" value={props.item.quantity} min="1" precision={0} pattern="[0-9]+" />
                            </form>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Preço: {(props.item.product.price) * props.item.quantity}R$</li>
                        </ul>
                        <div className="card-body">
                            {props.buttons.map((button, index) => {
                                return (<>
                                    {button.confirmation === true ? <ModalConfirmation closeModal={handleClose} acaoButton1={handleClose} acaoButton2={() => actionButton(button)} show={showModal} title={button.confirmation_modal.title} text={button.confirmation_modal.text} textButton1="Fechar" textButton2={button.name} colorButton1="link" colorButton2={button.style} /> : <></>}
                                    <button type="button" onClick={() => confirmationButton(button)} className={button.style}>{button.name}</button>
                                </>)
                            })}
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
export default ItemBasket;
import React from 'react';
import NumericInput from 'react-numeric-input';
import ModalConfirmation from '../basic/modal';

export default class ItemBasket extends React.Component {

    state = {
        quant: 1,
        showModal: false
    }

    handleShow = () => {
        this.setState({
            showModal: true
        })
    }

    handleClose = () => {
        this.setState({
            showModal: false
        })
    }

    onChange = (event) => {
        const valor = event;
        this.setState({
            quant: valor
        });
        var item = this.props.item;
        item.quantity = valor;
        this.props.setQuantity(item);
    }


    moveItemFavorite = () => {
        var item = this.props.item;
        this.props.removeProduct(item);
        //adicionar item.product a lista de favoritos.
    }

actionButton(button){
    this.props[button.action](this.props.item);
    if (button.confirmation) {
        this.handleClose();
    }
}

    confirmationButton = (button) => {
        if(button.confirmation){
            this.handleShow();
        }else{
this.actionButton(button);
        }
    }


    render() {
        return (
            <>
                <div className="card mb-3" style={{ padding: "1rem" }}>
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img className="card-img"
                                src={this.props.item.product.image}
                                alt="" /> </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{this.props.item.product.name}</h5>
                                <form className="form-inline">
                                    <label className="my-1 mr-2" for="inlineFormCustomSelectPref">Quant. Itens:</label>
                                    <NumericInput name="quant" className="form-control" onChange={this.onChange} type="number" step="1" value={this.props.item.quantity} min="1" precision={0} pattern="[0-9]+" />
                                </form>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Preço: {(this.props.item.product.price) * this.props.item.quantity}R$</li>
                            </ul>
                            <div className="card-body">
                                {this.props.buttons.map((button,index) => {
                                    //key={index}
                                    return (<>
                                
                                        {button.confirmation===true ? <ModalConfirmation closeModal={this.handleClose} acaoButton1={this.handleClose} acaoButton2={() => this.actionButton(button)} show={this.state.showModal} title={button.confirmation_modal.title} text={button.confirmation_modal.text} textButton1="Fechar" textButton2={button.name} colorButton1="link" colorButton2={button.style} /> : <></>}
                                        <button type="button" onClick={() => this.confirmationButton(button)} className={button.style}>{button.name}</button>

                                    </>)
                                })}
                            </div>
                        </div>
                    </div>
                </div>

            </>
        );
    }
};
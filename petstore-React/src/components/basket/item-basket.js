import React from 'react';
import NumericInput from 'react-numeric-input';

export default class ItemBasket extends React.Component {
    state ={
        quant:1
    }
    
    onChange = (event) => {
        const valor = event;
        this.setState({
            quant: valor
        });
    }

    removeItem=()=>{
        console.log(this.props.product.id)
    }
    moveItemFavorite=()=>{
        console.log(this.props.product.id)
    }

    render() {
    return (
        <div className="card mb-3" style={{padding: "1rem"}}>
        <div className="row no-gutters">
            <div className="col-md-4">
                <img className="card-img"
                    src={this.props.product.image}
                    alt="Card image cap" /> </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{this.props.product.name}</h5>
                    <form className="form-inline">
                        <label className="my-1 mr-2" for="inlineFormCustomSelectPref">Quant. Itens:</label>
                        <NumericInput name="quant" className="form-control" onChange={this.onChange} type="number" step="1" value={this.state.quant} min="1" precision={ 0 } pattern="[0-9]+"  />
                    </form>
                </div>
                <ul className="list-group list-group-flush">
    <li className="list-group-item">Preço: {(this.props.product.price)*this.state.quant}R$</li>
                </ul>
                <div className="card-body">
                    <a className="card-link" onClick={this.moveItemFavorite}>Mover para favoritos</a>
                    <a className="card-link" onClick={this.removeItem}>Remover</a>
                </div>
            </div>
        </div>
    </div>
    
    );}
};
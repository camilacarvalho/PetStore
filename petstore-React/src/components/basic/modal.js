import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export default class ModalConfirmation extends React.Component {


    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{this.props.text}</Modal.Body>
                <Modal.Footer>
                    <Button variant={this.props.colorButton1} onClick={this.props.acaoButton1}>
                        {this.props.textButton1}
                    </Button>
                    <Button variant={this.props.colorButton2} onClick={this.props.acaoButton2}>
                        {this.props.textButton2}
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

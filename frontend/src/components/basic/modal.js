import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function ModalConfirmation(props) {

    return (
        <Modal show={props.show} onHide={props.closeModal}>
            <Modal.Header closeButton>
                <Modal.Title>{props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{props.text}</Modal.Body>
            <Modal.Footer>
                <Button variant={props.colorButton1} onClick={props.acaoButton1}>
                    {props.textButton1}
                </Button>
                <Button variant={props.colorButton2} onClick={props.acaoButton2}>
                    {props.textButton2}
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalConfirmation;

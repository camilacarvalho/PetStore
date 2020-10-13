import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function ModalConfirmation({closeModal, acaoButton1, acaoButton2, show, title, text, textButton1, textButton2, colorButton1, colorButton2}) {

    return (
        <Modal show={show} onHide={closeModal}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{text}</Modal.Body>
            <Modal.Footer>
                <Button variant={colorButton1} onClick={acaoButton1}>
                    {textButton1}
                </Button>
                <Button variant={colorButton2} onClick={acaoButton2}>
                    {textButton2}
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalConfirmation;

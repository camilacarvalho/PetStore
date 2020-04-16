import React,{ useState } from 'react';

import ModalConfirmation from '../basic/modal';

function ListButtonsCard(props) {

    const [showModal, setShowModal] = useState(false);

    var confirmationButton = (button) => {
        if (button.confirmation) {
            handleShow();
        } else {
            actionButton(button);
        }
    }

    var actionButton = (button) => {
        props[button.action](props.item);
        if (button.confirmation) {
            handleClose();
        }
    }

    var handleShow = () => {
        setShowModal(true);
    }

    var handleClose = () => {
        setShowModal(false);
    }

    return (
        <>
            <div className="card-body">
                {props.buttons.map((button) => {
                    return (<>
                        {button.confirmation === true ? <ModalConfirmation closeModal={handleClose} acaoButton1={handleClose} acaoButton2={() => actionButton(button)} show={showModal} title={button.confirmation_modal.title} text={button.confirmation_modal.text} textButton1="Fechar" textButton2={button.name} colorButton1="link" colorButton2={button.style} /> : <></>}
                        <button type="button" onClick={() => confirmationButton(button)} className={button.style}>{button.name}</button>
                    </>)
                })}
            </div>
        </>
    )
}
export default ListButtonsCard;
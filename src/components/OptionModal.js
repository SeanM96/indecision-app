import React from 'react'
import Modal from 'react-modal'

const OptionModal = (props) => (
    <Modal 
    isOpen={!!props.selectedOption}
    onRequestClose={props.handleCloseModal}
    contentLabel="Selected Option"
    closeTimeoutMS={200}
    className="modal"
    >
    <h3 className="modalTitle">Selected Option:</h3>
    {props.selectedOption && <p className="modalBody">{props.selectedOption}</p>}
    <button className="button" onClick={props.handleCloseModal}>Okay</button>
    </Modal>
);

export default OptionModal;
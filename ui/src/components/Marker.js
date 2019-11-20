import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import './Marker.css';

const Marker = (props) => {    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button 
                className={`marker ${ props.class }`}
                onClick= { handleShow }
            >    
            </button> 
            
            <Modal 
                size="sm"
                show={ show }
                onHide={ handleClose }
                animation={ false }
            >
                <Modal.Header closeButton>
                    <Modal.Title>Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    { props.lat + "...." + props.lng }
                </Modal.Body>
            </Modal>
        </>
    );
};
export default Marker;
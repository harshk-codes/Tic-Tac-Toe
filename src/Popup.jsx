// import React from 'react';
import { Modal, Button, Box } from '@mui/material';
import PropTypes  from 'prop-types';


 // eslint-disable-next-line react/prop-types
 function Popup({open, onClose}) {
    return (
        <Modal open={open} onClose={onClose}>
        <Box>
            <h2>WElCOME TO TIC-TAC-TOE</h2>
            <Button onClick={onClose}>Start</Button>
        </Box>
        </Modal>
    );
}

Popup.PropTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default Popup;
// import React from 'react';
import { Modal, Button, Box } from "@mui/material";
import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
function Popup({ open, onClose }) {
  return (
    <Modal open={open} onClose={onClose}>
      <Box>
        <div className="container">
          <h2>welcome to Tic-Tac-Toe</h2>
          <Button onClick={onClose}><p>start</p></Button>
        </div>
      </Box>
    </Modal>
  );
}

Popup.PropTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Popup;

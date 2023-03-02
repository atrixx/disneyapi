import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import { show } from './modalSlice';

export const ModalView = (props) => {
  const dispatch = useDispatch();
  const modalShow = useSelector(state => state.modal.modalShow);

  const [open, setOpen] = useState(true);
//   const [show, setShow] = useState(props.show)
  const handleOpen = () => setOpen(false);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    //border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    modalShow &&  (
      <Modal open={open} onClose={handleOpen}>
        <Box sx={style}>
          <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
          >
            <Typography id="modal-modal-title" variant="h6" component="h2">
              character name - image {dispatch()}
            </Typography>

            <Divider variant="fullWidth" component="li" />
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {'list of tv shows '}
            </Typography>
            <Divider variant="fullWidth" component="li" />
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {'list video games participations'}
            </Typography>

          </List>
          <Button sx={{ align: 'center', mt: 5 }} onClick={handleClose}>
            Close
          </Button>
        </Box>
      </Modal>
    )
  );
};

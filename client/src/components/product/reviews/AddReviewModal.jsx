import React from 'react';
import { Modal, TextField, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import AddReviewsForm from './reviewForm/AddReviewsForm';
import { Autorenew } from '@material-ui/icons';

const AddReviewModal = ({handleClose, open, product}) => {
  function getModalStyle() {
    const top = 25; 
    const left = 25;

    return {
      top: `${top}%`,
      margin:'auto'
    };
  }

  const useStyles = makeStyles(theme => ({
      modal: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          
      },
      paper: {
          position: 'absolute',
          width: 800,
          backgroundColor: theme.palette.background.paper,
          boxShadow: theme.shadows[5],
          padding: theme.spacing(2, 4, 3),
      },
  }));


  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);

  return (
    <>
    <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
                style={{display:'flex',alignItems:'center',justifyContent:'center', overflow: 'scroll'}}
        >
          <div style={modalStyle} className={classes.paper}>
            {/* <h2>Write Your Review</h2>
            <h3>
              About the
              { ` ${product.name}` }
            </h3> */}
            <AddReviewsForm name={product.name}/>
          </div>
        </Modal>
    </>
  )
  
}

export default AddReviewModal;
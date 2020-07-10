
import Button from '@material-ui/core/Button';
import React, { useState } from 'react';
import DefaultView from './defaultView'
// import QuestionSearch from './QuestionSearch';
import AddQuestion from './QuestionModal';


const ProductQA = () => {
  const [showList, setshowList] = useState(false)
  const [filter, setFilter] = useState(false);
  // const handleChange =(state, bool) => {
  //   if (state === 'list') return setshowList(bool);
  //   return setFilter(bool);
  // }
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  

  return (
    <div>
        <h3>Questions & Answers</h3>
      <div className='qa-widget'>
          {/* <QuestionSearch onChange={handleChange}/>
        {!filter
          ?
        <DefaultView />
          :
          <>
          </>
        } */}
        <DefaultView />
      </div>
        <Button variant="contained" size="small">View More</Button>
        <Button variant="contained" size="small" onClick={handleOpen}>Add A Question +</Button>
        <AddQuestion open={open} handleClose={handleClose} />
    </div>
  );
};


export default ProductQA;

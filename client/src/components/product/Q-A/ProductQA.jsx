
import Button from '@material-ui/core/Button';
import React , { useState } from 'react';
import DefaultView from './defaultView'


const ProductQA = () => {
  const [showList, setshowList] = useState(false)
  
  

  return (
    <div>
      <p>Questions & Answers</p>
      {/* input div goes here */}
      <DefaultView />
      <Button variant="contained" size="large">View More</Button>
      <Button variant="contained" size="large">Add a Question +</Button>
    </div>
  );
};


export default ProductQA;

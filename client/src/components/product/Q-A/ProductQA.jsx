
import Button from '@material-ui/core/Button';
import React , { useState } from 'react';
import DefaultView from './defaultView'
import QuestionSearch from './QuestionSearch'


const ProductQA = () => {
  const [showList, setshowList] = useState(false)
  const [filter, setFilter] = useState(false);
  // const handleChange =(state, bool) => {
  //   if (state === 'list') return setshowList(bool);
  //   return setFilter(bool);
  // }
  
  

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
        <Button variant="contained" size="large">View More</Button>
        <Button variant="contained" size="large">Add A Question +</Button>
    </div>
  );
};


export default ProductQA;

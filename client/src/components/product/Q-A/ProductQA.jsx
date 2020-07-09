
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
      <p>Questions & Answers</p>
        {/* <QuestionSearch onChange={handleChange}/>
      {!filter
        ?
      <DefaultView />
        :
        <>
        </>
      } */}
      <DefaultView />
      <Button variant="contained" size="large">View More</Button>
      <Button variant="contained" size="large">Add a Question +</Button>
    </div>
  );
};


export default ProductQA;

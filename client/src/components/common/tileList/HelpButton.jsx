import React from 'react';
import { connect } from 'react-redux';
import { fetchQuestions } from '../../../redux/actions/questionActions';

const HelpButton = ({ widget, data }) => {
  const handleClick = (e) => {
      e.preventDefault();
    if (widget === 'qa') {
      // fetch(`http://18.224.200.47/qa`)
      console.log(data);
    }
    else if (widget === 'answer') {} 
    else if (widget === 'reviews') {}
  };
  return (
    <p>
      Helpful?  
      <a href="" onClick={() => handleClick(event)}>  Yes</a>
    </p>
  );
};

const mapDispatchToProps = (dispatch) => ({
  update: (id) => dispatch(fetchQuestions(id)),
});
const mapStateToProps = (state) => ({
  id: state.product.product.id,
});

export default connect(mapStateToProps, mapDispatchToProps)(HelpButton);

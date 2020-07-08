import React from 'react';
import { connect } from 'react-redux';
import { fetchQuestions } from '../../../redux/actions/questionActions';

const HelpButton = ({ widget, data, update, id}) => {
  const handleClick = (e) => {
      e.preventDefault();
    if (widget === 'qa') {
      fetch(`http://18.224.200.47/qa/question/${data.question_id}/helpful`,{
        method: 'PUT',
      })
      .then(val => update(id))
      .catch(err => console.log('Helpful update error'))
    }
    else if (widget === 'answer') {
      fetch(`http://18.224.200.47/qa/answer/${data.id}/helpful`,{
        method: 'PUT',
      })
      .then(val => update(id))
      .catch(err => console.log('Helpful update error'))
    } 
    else if (widget === 'reviews') {}
  };
  return (
    <p>
      Helpful?  
      <a href="" onClick={() => handleClick(event)}>  Yes </a> ({data.question_helpfulness || data.helpfulness})
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

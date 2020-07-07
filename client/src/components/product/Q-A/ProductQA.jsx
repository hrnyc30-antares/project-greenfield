import React from 'react';
import { connect } from 'react-redux';
import { Tile } from '../../Common/tileList/Tile';

const ProductQA = ({
  questions,
  answers,
  questionLoading,
  answerLoading,
  questionHasErrors,
}) => {
  const renderList = () => {
    if (questionLoading === false) {
        const defaultView = [];
        questions.forEach(val => {
            Object.values(val.answers).forEach(value =>{
                if(value.answerer_name === 'Seller')defaultView.push(val)
            })
        })
      if(defaultView.length <= 1){
          const sorted = questions.sort((a,b) => a['question_helpfulness'] - b['question_helpfulness'])
          const highestHelpful = questions[questions.length -1];
          defaultView.push(highestHelpful)
        } 
        if( defaultView.length < 2){
            const secHighestHelpful = questions[questions.length -2];
            defaultView.push(secHighestHelpful);
        }  
      return Tile('qa', defaultView);
    }
    if (questionLoading) return <p>Loading Questions..</p>;
    if (questionHasErrors) return <p>Error Loading Questions ..</p>;
  };

  return (
    <div>
      <p>Questions & Answers</p>
      {/* input div goes here */}
      {renderList()}
    </div>
  );
};

const mapStateToProps = (state) => ({
  answers: state.answers.answers.results,
  questions: state.questions.questions.results,
  questionHasErrors: state.questions.hasErrors,
  questionLoading: state.questions.loading,
  answerHasError: state.answers.hasErrors,
  answerLoading: state.answers.loading,
});

export default connect(mapStateToProps)(ProductQA);

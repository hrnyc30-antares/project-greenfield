import React, { useState } from 'react';
import { connect } from 'react-redux';
import Tile from '../../Common/tileList/Tile';

const DefaultView = ({ questions, questionLoading, questionHasErrors }) => {
  if (questionLoading) return <p>Loading Questions..</p>;
  if (questionHasErrors) return <p>Error Loading Questions ..</p>;
  if (questionLoading === false) {
    const showTwo = [];

    // this first iteration is checking for any seller answers
    // if it finds one it will be pushed to the default view array
    questions.forEach((val) => {
      Object.values(val.answers).forEach((value) => {
        if (value.answerer_name === 'Seller' && showTwo.length < 2) showTwo.push(val);
      });
    });
    // if no seller answer or only 1 was found, then it will iterate through the rest of the questions, but sorted by helpfulness
    // it will only be pushed into the default view array if the length is less then 1 or empty
    questions.sort((a, b) => a.question_helpfulness - b.question_helpfulness);
    if (showTwo.length <= 1) {
      const highestHelpful = questions[questions.length - 1];
      showTwo.push(highestHelpful);
    }
    if (showTwo.length < 2) {
      const secHighestHelpful = questions[questions.length - 2];
      showTwo.push(secHighestHelpful);
    }
    return Tile('qa', showTwo);
  }
};

const mapStateToProps = (state) => ({
  questions: state.questions.questions.results,
  questionHasErrors: state.questions.hasErrors,
  questionLoading: state.questions.loading,
});

export default connect(mapStateToProps)(DefaultView);

import React from 'react';
import { connect } from 'react-redux';
import Tile from '../../Common/tileList/Tile';
import { setHelpful } from '../../../redux/actions/helpfulAction';

const DefaultView = ({
  questions,
  questionLoading,
  questionHasErrors,
  set,
}) => {
  if (questionLoading) return <p>Loading Questions..</p>;
  if (questionHasErrors) return <p>Error Loading Questions ..</p>;
  if (questionLoading === false) {
    const showTwo = [];

    // this first iteration is checking for any seller answers
    // if it finds one it will be pushed to the default view array
    let allIds = [];
    questions.forEach((val) => {
      allIds.push(val.question_id);
      Object.values(val.answers).forEach((value) => {
        allIds.push(value.id);
        if (value.answerer_name === 'Seller' && showTwo.length < 2)
          showTwo.push(val);
      });
    });
    set(allIds);
    // if no seller answer or only 1 was found, then it will iterate through the rest of the questions, but sorted by helpfulness
    // it will only be pushed into the default view array if the length is less then 1 or empty
    questions.sort((a, b) => a.question_helpfulness - b.question_helpfulness);
    if (showTwo.length <= 1) {
      const highestHelpful = questions[questions.length - 1];
      showTwo.push(highestHelpful);
    }
    if (showTwo.length < 2 && questions.length > 1 ) {
      const secHighestHelpful = questions[questions.length - 2];
      showTwo.push(secHighestHelpful);
    }
    return <Tile widget='qa' data={showTwo} />;
  }
};

const mapStateToProps = (state) => ({
  questions: state.questions.questions.results,
  questionHasErrors: state.questions.hasErrors,
  questionLoading: state.questions.loading,
});

const mapDispatchToProps = (dispatch) => ({
  set: (ids) => dispatch(setHelpful(ids)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DefaultView);

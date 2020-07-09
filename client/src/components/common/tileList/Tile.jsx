import React from 'react';
import HelpButton from './HelpButton';
import ReportButton from './ReportButton';

// think about using ...args as a parameter so that you can add more to it, will probably make seller sorting easier
const Tile = ({ widget, data }) => {
  const renderTile = () => {
    if (widget === 'qa') {
      return data.map((element) => (
        <li key={element.question_id}>
          <p>Question:</p>
          <span>{element.question_body}</span>
          <span>
            <HelpButton widget='qa' data={element} /> | Add Answer
          </span>
          <p>Answers:</p>
          <ul>
            {Object.values(element.answers)
              .sort((a, b) => b.helpfulness - a.helpfulness)
              .map((value, idx) => {
                if (idx < 2) {
                  const dateFormat = new Date(value.date)
                    .toDateString()
                    .slice(4, value.date.length);
                  return (
                    <li key={value.id}>
                      <span>{value.body}</span>
                      <span>
                        {value.photos.length > 1 ? (
                          value.photos.map((el, index) => {
                            return (
                              <img
                                src={el}
                                alt='answer photo'
                                key={index + Math.random() * 86}
                                width='150px'
                                height='150px'
                              />
                            );
                          })
                        ) : (
                          <></>
                        )}
                        <p>
                          {' '}
                          by {value.answerer_name}, {dateFormat}
                        </p>{' '}
                        | <HelpButton widget={'answer'} data={value} /> |{' '}
                        <ReportButton widget={'answer'} data={value} />
                      </span>
                    </li>
                  );
                }
              })}
          </ul>
        </li>
      ));
    }
    if (widget === 'reviews') {
      console.log(data);
    }
  };
  return <ul>{renderTile()}</ul>;
};

export default Tile;

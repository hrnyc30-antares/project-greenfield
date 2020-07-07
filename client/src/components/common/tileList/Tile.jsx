
import React from 'react';
import HelpButton from './HelpButton';
// think about using ...args as a parameter so that you can add more to it, will probably make seller sorting easier
const Tile = (widget, data) => {
  const renderTile = () => {
    if (widget === 'qa') {
      return data.map((element) => (
        <li key ={element.question_id}>
          <p>Question:</p>
          <span>{element.question_body}</span>
          <HelpButton widget="qa" data={element} />
          <p>Answers:</p>
          <ul>
            {Object.values(element.answers)
              .sort((a, b) => b.helpfulness - a.helpfulness)
              .map((value, idx) => {
                if (idx < 2) {
                  const dateFormat = new Date(value.date).toDateString().slice(4, value.date.length);
                  return (
                    <li key={value.id}>
                      <span>{value.body}</span>
                      <p>{value.answerer_name}</p>
                      <span>{dateFormat}</span>
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

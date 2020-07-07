/* eslint-disable import/prefer-default-export */
import React from 'react';
// think about using arugments as a parameter so that you can add more to it, will probably make seller sorting easier
export const Tile = (widget, data) => {
  const renderTile = () => {
    if (widget === 'qa') {
      return data.map((element) => (
        <li>
          <p>Question:</p>
          <span>{element.question_body}</span>
          <p>Answers:</p>
          <ul> 
            {Object.values(element.answers)
            .sort((a,b) => a['helpfulness'] - b['helpfulness'])
            .map((value,idx)=> {
                if (idx < 2) {
                const dateFormat = new Date(value.date).toDateString().slice(4, value.date.length);
                return (
                    <li>
                    <span>{value.body}</span>
                    <p>{value.answerer_name}</p>
                    <span>{dateFormat}</span>
                    </li>
                )}
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

import React from 'react';
import Slider from '@material-ui/core/Slider';
import { makeStyles, withStyles } from '@material-ui/core/styles';

const RatingsCharacteristicsBar = ({chars}) => {
  const sorter = () => {
    let allChars = Object.keys(chars);
    return allChars.map(char => {
      const general = char === 'Fit' || char === "Size" || char === 'Length' || char === "Width" ? 
      ['too small', 'perfect', 'too big'] :
      ['poor', 'ok', 'great'];
      return (
        <div key={chars[char].id} className="char-bar">
        <div className="char-name" key={2}>
          {char}
        </div>
        <div className="slidecontainer">
          <input type='range' min="1" max="5"  defaultValue={Math.round(parseInt(chars[char].value))} className="slider" id="volume"></input>
        </div>
        <div className="char-wrapper">
          <div>{general[0]}</div>
          <div>{general[1]}</div>
          <div>{general[2]}</div>
        </div>
        </div>
      )
    })
  }

  return (
    <>
    {sorter()}
    </>
  );
}

export default RatingsCharacteristicsBar;

/*
Characteristics is an object with multiple objects -> 
   {Fit: {…}, Length: {…}, Comfort: {…}, Quality: {…}}

      *individual objects contain -> 
        Comfort -> {id: 3, value: "3.5000"}
        Fit-> {id: 1, value: "3.0000"}
        Length -> {id: 2, value: "2.7500"}
        Quality -> {id: 4, value: "3.0000"}

*/
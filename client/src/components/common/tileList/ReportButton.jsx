import React, {useState} from 'react';

const ReportButton = ({ widget, data }) => {
    let [clicked, setClicked] = useState(false)
    const handleChange = (bool) => {
        setClicked(bool)
    }
  const handleClick = (e) => {
    e.preventDefault();
    if (widget === 'answer') {
        fetch(`http://18.224.200.47/qa/answer/${data.id}/report`,{method:'PUT'})
        .then(() => handleChange(true))
        .catch(err => console.log('report error'))
    }
  };
  return (
    <div className='report-div'>
      {!clicked
      ? 
          <a href="" onClick={handleClick} className='report-btn'>Report</a>
          :
          <p>Reported</p>
    }
    </div>
  );
};

export default ReportButton;

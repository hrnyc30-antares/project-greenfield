import React from 'react';

const ReviewDate = ({dates}) => {
  const date = new Date(dates)
  const dateTimeFormat = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: '2-digit' }) 
  const [{ value: month },,{ value: day },,{ value: year }] = dateTimeFormat .formatToParts(date ) 

  return (
    <>
    {`${month} ${day}, ${year}`}
    </>
  )
}

export default ReviewDate;
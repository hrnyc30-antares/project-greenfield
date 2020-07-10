import React from 'react';

const ReviewBody = ({body, images}) => {

  const renderBody = (text) => {
    if (text.length > 250 && typeof text === 'string') {
      const snippet = text.substring(0, 250);
      return (
        <>
        {snippet}
        <div><a>...Show More</a></div>
        </>
      );
    }
    return (
      text
    )
  }

  const renderImages = (photos) => {
    if (photos.length > 0) {
      return photos.map(photo => {
        if (photo.url.indexOf('blob') > -1) {
          return (
            <img className="review-list-image" src={'https://source.unsplash.com/random'} key={photo.id}></img>
          );
        }
        return (
            <img className="review-list-image" src={photo.url} key={photo.id}></img>
        );
      });
    }

    return ('')
  }

  return (
    <>
    <div className="review-body">
    {renderBody(body)}
    </div>
    <div>
      {renderImages(images)}
    </div>
    </>
  )
}

export default ReviewBody;


// Images 
// [ {id: 3, url: }]
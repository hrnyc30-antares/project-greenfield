import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import ReviewDate from '../reviews/reviewTileComponents/ReviewDate';
import ReviewBody from '../reviews/reviewTileComponents/ReviewBody';
import ReviewResponse from '../reviews/reviewTileComponents/ReviewResponse';
import ReviewRecommended from '../reviews/reviewTileComponents/ReviewRecommended';

const ReviewTile = ({reviews}) => {
  return (
    <>
      <div className="top-tile"> 
        <div className="review-stars">
          <Box component="fieldset" mb={3} borderColor="transparent">
            <Rating name="read-only" value={reviews.rating} precision={0.25} readOnly />
          </Box>
        </div>
        <div className="user-and-date-wrapper">
          <div className="user-name">
            {`${reviews.reviewer_name},`}
          </div>
          <div className="review-date">
            <ReviewDate dates={reviews.date}/>
          </div> 
        </div>
      </div>
      <h3 className="review-title">{reviews.summary}</h3>
      <ReviewBody body={reviews.body} images={reviews.photos}/>
      <ReviewRecommended recommendation={reviews.recommend} />
      <ReviewResponse response={reviews.response} />
      <div className="helpful">
        Helpful? Yes({reviews.helpfulness}) | Report
      </div>

      <hr className="line-break"></hr>
  </>
  )

}

export default ReviewTile;

/* 

Call to reviews API returns the following structure -->

 {product: "1", page: 0, count: 5, results: [{}, {}, ....] }

  Each result object contains --> 

  {
    "review_id": 57337,
    "rating": 5,
    "summary": "Et praesentium itaque at aut iste.",
    "recommend": 1,
    "response": null,
    "body": "Molestias sint aliquam. Repellendus qui laborum voluptatem exercitationem sed explicabo omnis et possimus. Fugit molestiae ut modi.",
    "date": "2020-05-17T00:00:00.000Z",
    "reviewer_name": "customer1",
    "helpfulness": 3,
    "photos": []
}

*/
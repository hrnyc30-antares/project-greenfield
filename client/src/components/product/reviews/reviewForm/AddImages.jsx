import React, { useState } from 'react';
import { TextField } from '@material-ui/core';

const AddImages = () => {
  const [photos, setPhotos] = useState({
    "photo-1": "",
    "photo-2": "",
    "photo-3": "",
    "photo-4": "",
    "photo-5": "",
    "photo-6": "",

  });

  const handleChange= (event) => {
    let photoNum = event.target.getAttribute('name');
    setPhotos({
      ...photos,
      [photoNum]: URL.createObjectURL(event.target.files[0])
    })
  }

  return (
    <>
      <TextField
        name="photo-1"
        className="photo-1"
        type="file"
        style={{ margin: 8, marginTop: 25, display: 'block' }}
        label="Image 1"
        onChange={handleChange}
      />
      {photos["photo-1"] !== '' ? (<img className="review-list-image" src={photos["photo-1"]}></img>) : (<div></div>) }

      <TextField
        name="photo-2"
        className="photo-2"
        type="file"
        style={{ margin: 8, marginTop: 25, display: 'block' }}
        label="Image 2"
        onChange={handleChange}
      />
      {photos["photo-2"] !== '' ? (<img className="review-list-image" src={photos["photo-2"]}></img>) : (<div></div>) }

      <TextField
        name="photo-3"
        className="photo-3"
        type="file"
        style={{ margin: 8, marginTop: 25, display: 'block' }}
        label="Image 3"
        onChange={handleChange}
      />
      {photos["photo-3"] !== '' ? (<img className="review-list-image" src={photos["photo-3"]}></img>) : (<div></div>) }

      <TextField
        name="photo-4"
        className="photo-4"
        type="file"
        style={{ margin: 8, marginTop: 25, display: 'block' }}
        label="Image 4"
        onChange={handleChange}
      />
      {photos["photo-4"] !== '' ? (<img className="review-list-image" src={photos["photo-4"]}></img>) : (<div></div>) }

      <TextField
        name="photo-5"
        className="photo-5"
        type="file"
        style={{ margin: 8, marginTop: 25, display: 'block' }}
        label="Image 5"
        onChange={handleChange}
      />
      {photos["photo-5"] !== '' ? (<img className="review-list-image" src={photos["photo-5"]}></img>) : (<div></div>) }
    </>
  )
}

export default AddImages;
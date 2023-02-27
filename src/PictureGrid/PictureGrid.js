import React from 'react'

const PictureGrid = ({pictures}) => {
  return (
        <div className = "Picture-Grid">PictureGrid
            {pictures.map((picture) => (
                <div key={picture.id} classname="picture">
                    <img src={picture.url} alt={picture.title} />
                    <h2>{picture.title}</h2>
                    <p>{picture.description}</p>
            </div>
         ))}
    </div>
  );
};

export default PictureGrid
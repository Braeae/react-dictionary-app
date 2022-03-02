import React from "react";
import "./Photos.css";

function Photos(props) {
  if (props.photos) {
    return (
      <section className="Photos">
        {props.photos.map(function (photo, index) {
          return (
            <img
              src={photo.src.tiny}
              key={index}
              alt="word"
              className="img-fluid"
            />
          );
        })}
      </section>
    );
  } else {
    return null;
  }
}

export default Photos;

import React from "react";

const CourseCard = (props) => {
  console.log(props);
  return (
    <div style={{ display: "flex" }}>
      <div className="video-responsive">
        <iframe
          width="400"
          height="200"
          src={`https://www.youtube.com/embed/${props.embedId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
      <div style={{ textAlign: "left", marginLeft: "20px" }}>
        <h1>{props.title}</h1>
        <p>{props.detail}</p>
      </div>
    </div>
  );
};

export default CourseCard;

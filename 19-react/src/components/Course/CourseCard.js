import React from "react";

const CourseCard = () => {
  return (
    <div style={{ display: "flex" }}>
      <div className="video-responsive">
        <iframe
          width="400"
          height="200"
          src={"https://www.youtube.com/embed/rokGy0huYEA"}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
      <div style={{ textAlign: "left", marginLeft: "20px" }}>
        <h1>How to be youtuber</h1>
        <p>Tips and trick menjadi Youtuber</p>
      </div>
    </div>
  );
};

export default CourseCard;

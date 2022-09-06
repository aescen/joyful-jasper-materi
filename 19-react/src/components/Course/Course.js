import CourseCard from "./CourseCard";

const Course = () => {
  return (
    <div>
      <h1>Course</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <CourseCard
          title="How to be youtuber"
          detail="Tips and trick menjadi Youtuber"
          embedId="rokGy0huYEA"
        />

        <CourseCard
          title="programmer"
          detail="Tips and trick menjadi Youtuber"
          embedId="qrlj6tijDlY"
        />

        <CourseCard
          title="How to be artist"
          detail="Tips and trick menjadi Youtuber"
        />

        <CourseCard
          title="How to be CEO"
          detail="Tips and trick menjadi Youtuber"
        />
        {/* <CourseCard /> */}
      </div>
    </div>
  );
};

export default Course;

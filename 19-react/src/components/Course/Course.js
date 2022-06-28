import CourseCard from "./CourseCard";

const Course = () => {
  return (
    <div>
      <h1>Course</h1>
      <div style={{ display: "flex" }}>
        <CourseCard />
        <CourseCard />
      </div>
    </div>
  );
};

export default Course;

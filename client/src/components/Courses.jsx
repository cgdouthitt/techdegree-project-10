import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../utils/apiHelper";

//This component displays all courses
const Courses = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState(null);

  //Loads course data upon render. Error handling route setup to handle any issues
  useEffect(() => {
    (async () => {
      try {
        const response = await api("/courses", "GET", null, null);
        setCourses(response.data);
      } catch (error) {
        if (error.status === 500) {
          navigate("/error");
        }
      }
    })();
  }, [navigate]);

  return (
    <>
      <div className="wrap main--grid">
        {courses?.map((course) => (
          <a
            className="course--module course--link"
            href={"/courses/" + course.id}
            key={course.id}
          >
            <h2 className="course--label">Course</h2>
            <h3 className="course--title">{course.title}</h3>
          </a>
        ))}
        <a
          className="course--module course--add--module"
          href="/courses/create"
        >
          <span className="course--add--title">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 13 13"
              className="add"
            >
              <polygon points="7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 "></polygon>
            </svg>
            New Course
          </span>
        </a>
      </div>
    </>
  );
};

export default Courses;

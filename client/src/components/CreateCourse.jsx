import { useContext, useRef } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";

const CreateCourse = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate(null);

  const title = useRef(null);
  const description = useRef(null);
  const estimatedTime = useRef(null);
  const materialsNeeded = useRef(null);

  const course = {
    title: title,
    description: description,
    estimatedTime: estimatedTime,
    materialsNeeded: materialsNeeded,
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  const handleCancel = (event) => {
    event.preventDefault();
    navigate("/");
  };

  return (
    <>
      <div className="wrap">
        <h2>Create Course</h2>
        <form onSubmit={handleSubmit}>
          <div className="main--flex">
            <div>
              <label htmlFor="courseTitle">Course Title</label>
              <input
                id="courseTitle"
                name="courseTitle"
                type="text"
                ref={title}
              />
              <p>
                By {user.firstName} {user.lastName}
              </p>
              <label htmlFor="courseDescription">Course Description</label>
              <textarea
                id="courseDescription"
                name="courseDescription"
                ref={description}
              ></textarea>
            </div>
            <div>
              <label htmlFor="estimatedTime">Estimated Time</label>
              <input
                id="estimatedTime"
                name="estimatedTime"
                type="text"
                ref={estimatedTime}
              />
              <label htmlFor="materialsNeeded">Materials Needed</label>
              <textarea
                id="materialsNeeded"
                name="materialsNeeded"
                ref={materialsNeeded}
              ></textarea>
            </div>
          </div>
          <button className="button" type="submit">
            Create Course
          </button>
          <button className="button button-secondary" onClick={handleCancel}>
            Cancel
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateCourse;

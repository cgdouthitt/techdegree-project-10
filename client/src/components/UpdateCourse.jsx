import { useContext, useRef, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UserContext from "../context/UserContext";
import { api } from "../utils/apiHelper";
import ValidationErrors from "./ValidationErrors";

const UpdateCourse = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate(null);
  const { id } = useParams();
  const [details, setDetails] = useState(null);

  const title = useRef(null);
  const description = useRef(null);
  const estimatedTime = useRef(null);
  const materialsNeeded = useRef(null);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await api(`/courses/${id}`, "GET", null, null);
      setDetails(response.data);
    })();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const credentials = {
      username: user.emailAddress,
      password: user.password,
    };

    const course = {
      userId: user.id,
      title: title.current.value,
      description: description.current.value,
      estimatedTime: estimatedTime.current.value,
      materialsNeeded: materialsNeeded.current.value,
    };

    try {
      const response = await api(`/courses/${id}`, "PUT", course, credentials);
      navigate(`/courses/${id}`);
    } catch (error) {
      if (error.status === 400) {
        setErrors(error.response.data.errors);
      } else {
        throw new Error();
      }
    }
  };

  const handleCancel = (event) => {
    event.preventDefault();
    navigate("/");
  };

  return (
    <>
      <div className="wrap">
        <h2>Update Course</h2>
        <ValidationErrors errors={errors} />
        <form onSubmit={handleSubmit}>
          <div className="main--flex">
            <div>
              <label htmlFor="courseTitle">Course Title</label>
              <input
                id="courseTitle"
                name="courseTitle"
                type="text"
                defaultValue={details?.title}
                ref={title}
              />
              <p>
                By {details?.User?.firstName} {details?.User?.lastName}
              </p>
              <label htmlFor="courseDescription">Course Description</label>
              <textarea
                id="courseDescription"
                name="courseDescription"
                defaultValue={details?.description}
                ref={description}
              ></textarea>
            </div>
            <div>
              <label htmlFor="estimatedTime">Estimated Time</label>
              <input
                id="estimatedTime"
                name="estimatedTime"
                type="text"
                defaultValue={details?.estimatedTime}
                ref={estimatedTime}
              />
              <label htmlFor="materialsNeeded">Materials Needed</label>
              <textarea
                id="materialsNeeded"
                name="materialsNeeded"
                defaultValue={details?.materialsNeeded}
                ref={materialsNeeded}
              ></textarea>
            </div>
          </div>
          <button className="button" type="submit">
            Update Course
          </button>
          <button className="button button-secondary" onClick={handleCancel}>
            Cancel
          </button>
        </form>
      </div>
    </>
  );
};

export default UpdateCourse;

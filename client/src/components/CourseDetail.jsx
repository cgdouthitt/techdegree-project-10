import { useContext, useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { api } from "../utils/apiHelper";
import UserContext from "../context/UserContext";
import ReactMarkdown from "react-markdown";

//This compenent displays the course details
const CourseDetail = () => {
  const { id } = useParams();
  const [details, setDetails] = useState(null);
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  //Loads course data upon render. Various error handling routes are setup to handle any issues
  useEffect(() => {
    (async () => {
      try {
        const response = await api(`/courses/${id}`, "GET", null, null);
        if (!response.data) {
          navigate("/notfound");
        } else {
          setDetails(response.data);
        }
      } catch (error) {
        if (error.status === 500) {
          navigate("/error");
        }
      }
    })();
  }, [id, navigate]);

  //Used to conditionally render delete and update buttons only for course owner
  const checkOwner = () => {
    const courseUser = details?.User?.id;
    if (user) {
      const loggedInUser = user.id;
      const ownerUser = courseUser === loggedInUser ? true : false;

      return ownerUser;
    }
  };

  //Delete handler
  const handleDelete = async (event) => {
    event.preventDefault();

    const credentials = {
      username: user.emailAddress,
      password: user.password,
    };

    await api(`/courses/${id}`, "DELETE", null, credentials);
    navigate("/");
  };

  return (
    <>
      <div className="actions--bar">
        <div className="wrap">
          {checkOwner() ? (
            <>
              <Link className="button" to={"/courses/" + id + "/update"}>
                Update Course
              </Link>
              <button className="button" onClick={handleDelete}>
                Delete Course
              </button>
            </>
          ) : (
            <></>
          )}
          <Link className="button button-secondary" to="/">
            Return to List
          </Link>
        </div>
      </div>

      <div className="wrap">
        <h2>Course Detail</h2>
        <form>
          <div className="main--flex">
            <div>
              <h3 className="course--detail--title">Course</h3>
              <h4 className="course--name">{details?.title}</h4>
              <p>
                By {details?.User?.firstName} {details?.User?.lastName}
              </p>
              <ReactMarkdown>{details?.description}</ReactMarkdown>
            </div>
            <div>
              <h3 className="course--detail--title">Estimated Time</h3>
              <p>{details?.estimatedTime}</p>
              <h3 className="course--detail--title">Materials Needed</h3>
              <ul className="course--detail--list">
                <ReactMarkdown>{details?.materialsNeeded}</ReactMarkdown>
              </ul>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default CourseDetail;

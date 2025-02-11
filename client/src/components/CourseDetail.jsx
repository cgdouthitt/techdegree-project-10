import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../utils/apiHelper";
import ReactMarkdown from "react-markdown";

const CourseDetail = () => {
  const { id } = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await api(`/courses/${id}`, "GET", null, null);
      setDetails(response.data);
    })();
  }, []);

  return (
    <>
      <div className="actions--bar">
        <div className="wrap">
          <a className="button" href={"/courses/" + id + "/update"}>
            Update Course
          </a>
          <a className="button" href="/">
            Delete Course
          </a>
          <a className="button button-secondary" href="/">
            Return to List
          </a>
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

import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import axios from "axios";

import LoadingContext from "../context/LoadingContext";

const CourseDetail = () => {
  const { id } = useParams();
  const { data, loading, actions } = useContext(LoadingContext);

  useEffect(() => {
    const fetchData = async () => {
      actions.setLoading(true);
      await axios
        .get(`http://localhost:5000/api/courses/${id}`)
        .then((response) => {
          actions.setData(response.data);
        })
        .catch((error) => actions.setError(error))
        .finally(actions.setLoading(false));
    };

    fetchData();
  }, []);

  return (
    <main>
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
              <h4 className="course--name">{data.title}</h4>
              <p>
                By {data?.User?.firstName} {data?.User?.lastName}
              </p>
              <ReactMarkdown>{data.description}</ReactMarkdown>
            </div>
            <div>
              <h3 className="course--detail--title">Estimated Time</h3>
              <p>{data.estimatedTime}</p>
              <h3 className="course--detail--title">Materials Needed</h3>
              <ul className="course--detail--list">
                <ReactMarkdown>{data.materialsNeeded}</ReactMarkdown>
              </ul>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};

export default CourseDetail;

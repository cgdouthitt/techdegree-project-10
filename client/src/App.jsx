import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Courses from "./components/Courses";
import CourseDetail from "./components/CourseDetail";
import UserSignIn from "./components/UserSignIn";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Courses />}></Route>
        <Route path="courses/:id" element={<CourseDetail />}></Route>
        <Route path="signin" element={<UserSignIn />}></Route>
      </Routes>
    </>
  );
}

export default App;

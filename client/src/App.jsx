import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Courses from "./components/Courses";
import CourseDetail from "./components/CourseDetail";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Courses />}></Route>
        <Route path="courses/:id" element={<CourseDetail />}></Route>
      </Routes>
    </>
  );
}

export default App;

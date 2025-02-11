import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Courses from "./components/Courses";
import CourseDetail from "./components/CourseDetail";
import UserSignIn from "./components/UserSignIn";
import UserSignOut from "./components/UserSingOut";
import UserSignUp from "./components/UserSignUp";
import CreateCourse from "./components/CreateCourse";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Courses />}></Route>
          <Route path="courses/:id" element={<CourseDetail />}></Route>
          <Route path="signup" element={<UserSignUp />}></Route>
          <Route path="signin" element={<UserSignIn />}></Route>
          <Route path="signout" element={<UserSignOut />}></Route>
          <Route path="courses/create" element={<CreateCourse />}></Route>
        </Routes>
      </main>
    </>
  );
}

export default App;

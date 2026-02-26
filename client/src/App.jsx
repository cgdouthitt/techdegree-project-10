import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Courses from "./components/Courses";
import CourseDetail from "./components/CourseDetail";
import UserSignIn from "./components/UserSignIn";
import UserSignOut from "./components/UserSingOut";
import UserSignUp from "./components/UserSignUp";
import CreateCourse from "./components/CreateCourse";
import UpdateCourse from "./components/UpdateCourse";
import PrivateRoute from "./components/PrivateRoute";
import NotFound from "./components/NotFound";
import Forbidden from "./components/Forbidden";
import UnhandledError from "./components/UnhandledError";

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
          <Route element={<PrivateRoute />}>
            <Route path="courses/create" element={<CreateCourse />}></Route>
            <Route path="courses/:id/update" element={<UpdateCourse />}></Route>
          </Route>
          <Route path="forbidden" element={<Forbidden />}></Route>
          <Route path="error" element={<UnhandledError />}></Route>
          <Route path="notfound" element={<NotFound />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </main>
    </>
  );
}

export default App;

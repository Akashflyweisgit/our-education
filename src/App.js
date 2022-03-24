/** @format */

import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import Login from "./Components/Login/Login";
import Signup from "./Components/Login/Signup";
import UserList from "./Components/EducationPages/User/UserList";
import Instructor from "./Components/EducationPages/Instructor/Instructor";
import AddGroup from "./Components/ManageGroup/AddGroup";
import GroupList from "./Components/ManageGroup/GroupList";
import Course from "./Components/EducationPages/Course/Course";
import CouponCode from "./Components/EducationPages/CouponCode/CouponCode";
import AddVedio from "./Components/ManageVideo/AddVideo";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import BlockuserList from "./Components/EducationPages/User/BlockuserList";
import AddCategogy from "./Components/EducationPages/AddCategogy/AddCategogy";
import FeaturedCourses from "./Components/EducationPages/featuredCourses/FeaturedCourses";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/user-list" element={<UserList />} />
        <Route exact path="/instructor" element={<Instructor />} />
        <Route exact path="/AddGroup" element={<AddGroup />} />
        <Route exact path="/GroupList" element={<GroupList />} />
        <Route exact path="/course" element={<Course />} />
        <Route exact path="/CouponCode" element={<CouponCode />} />
        <Route exact path="/AddVedio" element={<AddVedio />} />
        <Route exact path="/BlockuserList" element={<BlockuserList />} />
        <Route exact path="/addcategogy" element={<AddCategogy />} />
        <Route exact path="/featuredCourses" element={<FeaturedCourses />} />
      </Routes>
    </>
  );
}

export default App;

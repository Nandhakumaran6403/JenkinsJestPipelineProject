import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Hero from "./components/Hero";
import Main from "./components/main";
import ViewUser from "./pages/ViewUser";
// import Add from "./pages/Add";
import Edit from "./pages/Edit";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import UserMain from "./components/UserMain";
import ViewRequest from "./pages/ViewRequest";
import Navbar1 from "./components/Navbar1";
import Navbar2 from "./components/Navbar2";
import About from "./components/About";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route
          path="/main"
          element={
            <>
              <Navbar2 />
              <Main />
              <About />
              <Blog />
              <Footer />
            </>
          }
        />
        <Route
          path="/usermain"
          element={
            <>
              <Navbar1 />
              <UserMain />
              <About />
              <Blog />
              <Footer />
            </>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* <Route path="/add" element={<><Add/></>} /> */}
        <Route
          path="/adduser"
          element={
            <>
              <Navbar1 />
              <AddUser />
            </>
          }
        />

        <Route
          path="/edit/:id"
          element={
            <>
              <Navbar2 />
              <Edit />
            </>
          }
        />
        <Route
          path="/edituser/:id"
          element={
            <>
              <Navbar1 />
              <EditUser />
            </>
          }
        />

        <Route
          path="/viewrequest"
          element={
            <>
              <Navbar2 />
              <ViewRequest />
            </>
          }
        />
        <Route
          path="/viewuser"
          element={
            <>
              <Navbar1 />
              <ViewUser />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default AppRouter;

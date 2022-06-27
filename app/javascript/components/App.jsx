import React, { useEffect } from "react";
//import Routes from "../routes/Index";
import { useState } from "react";
import axios from "axios";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import BugsIndex from "../components/Bugs/BugsIndex";
import BugsShow from "../components/Bugs/BugsShow";
import BugsNew from "../components/Bugs/BugsNew";
import BugsEdit from "../components/Bugs/BugsEdit";

import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
// Add Front-End Paths (Routes) here

export default function App(props) {
  const [loggedInStatus, setloginedInStatus] = useState("NOT_LOGGED_IN");
  const checkLoginStatus = () => {
    axios
      .get("/api/v1/override/logged_in", { withCredentials: true })
      .then((response) => {
        if (response.data.logged_in && loggedInStatus === "NOT_LOGGED_IN") {
          setloginedInStatus({
            loggedInStatus: "LOGGED_IN",
          });
        } else if (!response.data.logged_in && loggedInStatus === "LOGGED_IN") {
          setloginedInStatus({
            loggedInStatus: "NOT_LOGGED_IN",
          });
        }
      })
      .catch((error) => {
        console.log("login error", error);
      });
  };

  useEffect(() => {
    checkLoginStatus();
  });

  const handleSuccessfulAuth = (data) => {
    console.log("in app successful: ", data);
    handleLogin(data);
    window.location = "http://www.localhost:3000/bugs"
  };

  const handleLogin = (data) => {
    console.log("in app login handle: ", data);
    setloginedInStatus({
      loggedInStatus: "LOGGED_IN",
    });

  };

  const handleLogout = () => {
    console.log("in logout ...", loggedInStatus);
    setloginedInStatus({ loggedInStatus: "NOT_LOGGED_IN" });

    axios
      .delete(" /api/v1/override/logout", { withCredentials: true })
      .then((response) => {
        if (response.data.logged_out === true)
          setloginedInStatus("NOT_LOGGED_IN");
      })
      .then(() => {window.location = "http://localhost:3000/login";})
      .catch((error) => {
        console.log("login error", error);
      });
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              {...props}
              loggedInStatus={loggedInStatus}
              handleLogin={handleLogin}
              handleLogout={handleLogout}
            />
          }
          exact
        />
        <Route
          path="/login"
          element={
            <Login
              handleSuccessfulAuth={handleSuccessfulAuth}
              {...props}
              loggedInStatus={loggedInStatus}
            />
          }
          exact
        />
        <Route path="/register" element={<Register />} />
        <Route path="/bugs" element={<BugsIndex />} />
        <Route path="/bugs/:id" element={<BugsShow />} />
        <Route path="/bugs/new" element={<BugsNew />} />
        <Route path="/bugs/:id/edit" element={<BugsEdit />} />
      </Routes>
    </Router>
  );
}

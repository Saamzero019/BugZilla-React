import React from "react";
import { Route, BrowserRouter as Router, Routes  } from "react-router-dom";
import BugsIndex from "../components/Bugs/BugsIndex";
import BugsShow from "../components/Bugs/BugsShow";
import BugsNew from "../components/Bugs/BugsNew";
import BugsEdit from "../components/Bugs/BugsEdit";

import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
    // Add Front-End Paths (Routes) here

export default (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/login" element={<Login />} exact/>
            {/* <Route path="/logout" element={<Logout />} exact/> */}
            <Route path="/register" element={<Register  />} />
            <Route path="/bugs" element={<BugsIndex />} />
            <Route path="/bugs/:id" element={<BugsShow />} />
            <Route path="/bugs/new" element={<BugsNew />} />
            <Route path="/bugs/:id/edit" element={<BugsEdit />} />
        </Routes>
    </Router>
);



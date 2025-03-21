import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Registration from "./components/Registration";
import StudentMenu from "./components/StudentMenu";
import AddStudent from "./components/AddStudent";
import GetAllStudents from "./components/GetAllStudents";

function App () {
    return (
        <Router>
            <Routes>
                 <Route path="/" element={<Login />} />
                 <Route path="/home" element={<Home />} />
                 <Route path="/register" element={<Registration />} />
                 <Route path="/student" element={<StudentMenu />}>
                      <Route path="add" element={<AddStudent />} />
                      <Route path="all" element={<GetAllStudents />} />
                 </Route>
            </Routes>
        </Router>
    );
};

export default App;
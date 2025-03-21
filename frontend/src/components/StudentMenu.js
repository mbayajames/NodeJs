import React from "react";
import { Link, Outlet } from "react-router-dom";

const StudentMenu = () => {
    return (
        <div>
            <h1>Student Management</h1>

            <nav>
                <Link to="add">Add Student</Link> |{' '}
                <Link to="all">Get All Students</Link>
            </nav>
        </div>
    );
};

export default StudentMenu;
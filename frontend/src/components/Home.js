import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
             <h1>Welcome to the Home Page</h1>
             <nav>
                     <Link to="/student/add">Add Student</Link> |{''}
                     <Link to="/student/all">Get All Students</Link>
             </nav>
        </div>
    );
};

export default Home;
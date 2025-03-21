import React from "react";

const GetAllStudents = () => {
    //Stimulate fetching students from an API

    const students = ['John Doe', 'Jane Smith', 'Alice Johnson'];

    return (
        <div>
            <h2>All Students</h2>
            <ul>
                {students.map((student, index) => (
                    <li key={index}>{student}</li>
                ))}
            </ul>
        </div>
    );
};

export default GetAllStudents;
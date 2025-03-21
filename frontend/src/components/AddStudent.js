import React, { useState } from "react";

const AddStudent = () => {
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Student ${name} added successfully`);
        setName('');
    };

    return (
        <div>
            <h2>Add Student</h2>

            <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Student Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default AddStudent;
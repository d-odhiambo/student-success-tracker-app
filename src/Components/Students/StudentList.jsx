import React from "react";

function StudentList() {
  const students = ["Alice", "Brian", "Cynthia"];

  return (
    <div>
      <h3>Student List</h3>
      <ul>
        {students.map((student, index) => (
          <li key={index}>{student}</li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;

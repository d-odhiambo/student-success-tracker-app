import React from "react";
import StudentList from "./StudentList"; // 👈 import StudentList

function Students() {
  return (
    <div>
      <h2>Student Tracker</h2>
      <p>This page will display all students and their progress.</p>

      {/* Show the list of students */}
      <StudentList />
    </div>
  );
}

export default Students;

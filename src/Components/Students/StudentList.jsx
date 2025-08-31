import React from "react";
import StudentCard from "./StudentCard";
import "./Students.css";

function StudentList({ students, onDelete }) {
  return (
    <div className="students-container">
      <ul className="students-list">
        {students.map((student, index) => (
          <StudentCard key={index} student={student} onDelete={onDelete} />
        ))}
      </ul>
    </div>
  );
}

export default StudentList;

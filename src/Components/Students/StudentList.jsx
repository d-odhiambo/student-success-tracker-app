import React from "react";
import StudentCard from "./StudentCard";
import "./Students.css";

function StudentList({ students, onDelete, onUpdate }) {
  return (
    <div className="students-container">
      <h2 className="students-heading">Students</h2>
      <ul className="student-list">
        {students.map((student, index) => (
          <StudentCard
            key={student.id}
            student={student}
            number={index + 1}
            onDelete={onDelete}
            onUpdate={onUpdate}  // pass update function
          />
        ))}
      </ul>
    </div>
  );
}

export default StudentList;

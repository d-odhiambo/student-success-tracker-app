import React from "react";
import "./Students.css";

function StudentCard({ student, onDelete }) {
  return (
    <li className="student-card">
      <h3 className="student-name">{student.name}</h3>
      <p className="student-details">Attendance: {student.attendancePercent}%</p>
      <p className="student-details">Accountability: {student.accountabilityScore}</p>
      <button 
        className="delete-btn"
        onClick={() => onDelete(student)}
      >
        Delete
      </button>
    </li>
  );
}

export default StudentCard;

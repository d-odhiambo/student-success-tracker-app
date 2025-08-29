import React from "react";

function StudentCard({ student }) {
  return (
    <div className="student-card">
      <h3>{student.name}</h3>
      <p>Grade: {student.grade}</p>
    </div>
  );
}

export default StudentCard;

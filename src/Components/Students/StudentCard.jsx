import React from "react";

function StudentCard({ student }) {
  return (
    <div className="student-card">
      <h3>{student.name}</h3>
      <p>Attendance: {student.attendancePercent}%</p>
      <p>Accountability Score: {student.accountabilityScore}</p>
    </div>
  );
}

export default StudentCard;

import React, { useState } from "react";
import "./Students.css";

function AddStudentForm({ addStudent }) {
  const [name, setName] = useState("");
  const [attendancePercent, setAttendancePercent] = useState("");
  const [accountabilityScore, setAccountabilityScore] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !attendancePercent || !accountabilityScore) return;

    addStudent({ 
      name, 
      attendancePercent: Number(attendancePercent), 
      accountabilityScore: Number(accountabilityScore) 
    });

    setName("");
    setAttendancePercent("");
    setAccountabilityScore("");
  }

  return (
    <div className="add-student-container">
      <h2 className="form-heading">Add Student</h2>
      <form onSubmit={handleSubmit} className="add-student-form">
        <input
          type="text"
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Attendance %"
          value={attendancePercent}
          onChange={(e) => setAttendancePercent(e.target.value)}
        />
        <input
          type="number"
          placeholder="Accountability Score %"
          value={accountabilityScore}
          onChange={(e) => setAccountabilityScore(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddStudentForm;

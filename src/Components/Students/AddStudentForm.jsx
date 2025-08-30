import React, { useState } from "react";

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
    <form onSubmit={handleSubmit}>
      <h3>Add Student</h3>
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
        placeholder="Accountability Score"
        value={accountabilityScore}
        onChange={(e) => setAccountabilityScore(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddStudentForm;

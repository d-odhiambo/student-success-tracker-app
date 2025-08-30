import React, { useState } from "react";

function SubmissionForm({ students, assignments, submitAssignment }) {
  const [studentId, setStudentId] = useState("");
  const [assignmentId, setAssignmentId] = useState("");
  const [status, setStatus] = useState("on-time");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!studentId || !assignmentId) return;
    submitAssignment(assignmentId, { studentId, status });
    setStudentId("");
    setAssignmentId("");
    setStatus("on-time");
  };

  return (
    <div className="submission-form">
      <h3>Submit Assignment</h3>
      <form onSubmit={handleSubmit}>
        <select value={studentId} onChange={(e) => setStudentId(e.target.value)}>
          <option value="">Select Student</option>
          {students.map((s) => (
            <option key={s.id} value={s.id}>{s.name}</option>
          ))}
        </select>

        <select value={assignmentId} onChange={(e) => setAssignmentId(e.target.value)}>
          <option value="">Select Assignment</option>
          {assignments.map((a) => (
            <option key={a.id} value={a.id}>{a.title}</option>
          ))}
        </select>

        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="on-time">On-time</option>
          <option value="late">Late</option>
          <option value="missing">Missing</option>
        </select>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SubmissionForm;

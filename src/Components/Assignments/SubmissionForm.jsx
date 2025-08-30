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
      <form onSubmit={handleSubmit} className="submission-form-grid">
        
        {/* Student Select */}
        <select
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
          className="form-input"
        >
          <option value="">Select Student</option>
          {students.map((s) => (
            <option key={s.id} value={s.id}>
              {s.name}
            </option>
          ))}
        </select>

        {/* Assignment Select */}
        <select
          value={assignmentId}
          onChange={(e) => setAssignmentId(e.target.value)}
          className="form-input"
        >
          <option value="">Select Assignment</option>
          {assignments.map((a) => (
            <option key={a.id} value={a.id}>
              {a.title}
            </option>
          ))}
        </select>

        {/* Status Select */}
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="form-input"
        >
          <option value="on-time">On-time</option>
          <option value="late">Late</option>
          <option value="missing">Missing</option>
        </select>

        {/* Submit Button */}
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default SubmissionForm;

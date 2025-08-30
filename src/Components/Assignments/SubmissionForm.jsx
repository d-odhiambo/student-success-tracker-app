import React, { useState } from "react";

function SubmissionForm({ students, assignments, submitAssignment }) {
  const [studentId, setStudentId] = useState("");
  const [assignmentId, setAssignmentId] = useState("");
  const [status, setStatus] = useState("on-time");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!studentId || !assignmentId) {
      setError("⚠️ Please enter both Student and Assignment.");
      setSuccess("");
      return;
    }

    submitAssignment(assignmentId, { studentId, status });

    setStudentId("");
    setAssignmentId("");
    setStatus("on-time");
    setError("");
    setSuccess("✅ Submission recorded successfully!");
  };

  return (
    <div className="submission-form card">
      <h3 className="form-title">Submit Assignment</h3>
      <form onSubmit={handleSubmit} className="form-grid">

        {/* Student Input */}
        <input
          type="text"
          placeholder="Enter Student ID or Name"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
          required
        />

        {/* Assignment Input */}
        <input
          type="text"
          placeholder="Enter Assignment ID or Title"
          value={assignmentId}
          onChange={(e) => setAssignmentId(e.target.value)}
          required
        />

        {/* Status Dropdown */}
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="on-time">On-time</option>
          <option value="late">Late</option>
          <option value="missing">Missing</option>
        </select>

        {/* Submit Button */}
        <button type="submit" className="btn-primary">
          Submit Assignment
        </button>
      </form>

      {/* Feedback messages */}
      {error && <p className="error-text">{error}</p>}
      {success && <p className="success-text">{success}</p>}
    </div>
  );
}

export default SubmissionForm;

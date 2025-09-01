import React, { useState } from "react";

function AssignmentCard({ assignment, students, updateAssignment, deleteAssignment }) {
  const [editingSubmission, setEditingSubmission] = useState(null);
  const [newStatus, setNewStatus] = useState("");

  // Get student name
  const getStudentName = (studentId) => {
    const student = students.find((s) => s.id === studentId.toString());
    return student ? student.name : `Student #${studentId}`;
  };

  // Get student avatar initial
  const getStudentAvatar = (studentId) => {
    const student = students.find((s) => s.id === studentId.toString());
    return student ? student.name.charAt(0) : "?";
  };

  // Open modal for editing
  const openEditModal = (sub) => {
    setEditingSubmission(sub);
    setNewStatus(sub.status);
  };

  // Save changes
  const handleSaveSubmission = () => {
    const updatedSubmissions = assignment.submissions.map((s) =>
      s.studentId === editingSubmission.studentId ? { ...s, status: newStatus } : s
    );
    updateAssignment(assignment.id, { ...assignment, submissions: updatedSubmissions });
    setEditingSubmission(null);
  };

  // Delete submission
  const handleDeleteSubmission = (studentId) => {
    const updatedSubmissions = assignment.submissions.filter(
      (s) => s.studentId !== studentId
    );
    updateAssignment(assignment.id, { ...assignment, submissions: updatedSubmissions });
  };

  return (
    <div className="assignment-card">
      <h3>{assignment.title}</h3>
      <p>
        <strong>Due:</strong> {assignment.dueDate} | <strong>Points:</strong>{" "}
        {assignment.points}
      </p>

      <div className="submissions">
        <h4>Submissions:</h4>
        {assignment.submissions?.length > 0 ? (
          <ul>
            {assignment.submissions.map((sub, i) => (
              <li key={i} className="submission-item">
                <div className="student-info">
                  <div className="student-avatar">{getStudentAvatar(sub.studentId)}</div>
                  <span>{getStudentName(sub.studentId)}</span>
                  <span className={`status ${sub.status}`}>{sub.status}</span>
                </div>

                <div className="submission-actions">
                  <button onClick={() => openEditModal(sub)}>Edit</button>
                  <button
                    className="delete-btn"
                    onClick={() => handleDeleteSubmission(sub.studentId)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="no-submissions">No submissions yet</p>
        )}
      </div>

      <div className="actions">
        <button
          onClick={() =>
            updateAssignment(assignment.id, {
              ...assignment,
              title: prompt("New title", assignment.title) || assignment.title,
            })
          }
        >
          Edit
        </button>
        <button className="delete-btn" onClick={() => deleteAssignment(assignment.id)}>
          Delete
        </button>
      </div>

      {/* MODAL for editing submission */}
      {editingSubmission && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Edit Submission</h3>
            <p>
              <strong>{getStudentName(editingSubmission.studentId)}</strong>
            </p>

            <select
              value={newStatus}
              onChange={(e) => setNewStatus(e.target.value)}
            >
              <option value="on-time">On-time</option>
              <option value="late">Late</option>
              <option value="missing">Missing</option>
            </select>

            <div className="modal-actions">
              <button onClick={handleSaveSubmission}>Save</button>
              <button className="cancel-btn" onClick={() => setEditingSubmission(null)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AssignmentCard;

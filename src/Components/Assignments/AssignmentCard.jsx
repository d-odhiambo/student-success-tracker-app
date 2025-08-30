import React from "react";

function AssignmentCard({ assignment, updateAssignment, deleteAssignment }) {
  return (
    <div className="assignment-card">
      <h3>{assignment.title}</h3>
      <p>
        <strong>Due:</strong> {assignment.dueDate} | <strong>Points:</strong> {assignment.points}
      </p>

      <div className="submissions">
        <h4>Submissions:</h4>
        {assignment.submissions?.length > 0 ? (
          <ul>
            {assignment.submissions.map((sub, i) => (
              <li key={i}>
                Student #{sub.studentId} — <span className={sub.status}>{sub.status}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="no-submissions">No submissions yet</p>
        )}
      </div>

      <div className="actions">
        <button onClick={() => updateAssignment(assignment.id, { title: prompt("New title", assignment.title) })}>
          Edit
        </button>
        <button className="delete-btn" onClick={() => deleteAssignment(assignment.id)}>Delete</button>
      </div>
    </div>
  );
}

export default AssignmentCard;

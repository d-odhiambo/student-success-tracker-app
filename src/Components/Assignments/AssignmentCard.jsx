import React from "react";

function AssignmentCard({ assignment, students, updateAssignment, deleteAssignment }) {
  // Function to get student name by ID
  const getStudentName = (studentId) => {
    const student = students.find(s => s.id === studentId.toString());
    return student ? student.name : `Student #${studentId}`;
  };

  // Function to get student avatar initial
  const getStudentAvatar = (studentId) => {
    const student = students.find(s => s.id === studentId.toString());
    return student ? student.name.charAt(0) : "?";
  };

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
              <li key={i} className="submission-item">
                <div className="student-info">
                  <div className="student-avatar">
                    {getStudentAvatar(sub.studentId)}
                  </div>
                  <span>{getStudentName(sub.studentId)}</span>
                </div>
                <span className={`status ${sub.status}`}>{sub.status}</span>
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
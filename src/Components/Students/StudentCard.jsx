import React, { useState } from "react";
import "./Students.css";

function StudentCard({ student, number, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [attendance, setAttendance] = useState(student.attendancePercent);
  const [accountability, setAccountability] = useState(student.accountabilityScore);

  const handleSave = () => {
    onUpdate(student.id, { attendancePercent: attendance, accountabilityScore: accountability });
    setIsEditing(false);
  };

  return (
    <li className="student-card">
      <div className="student-info">
        <h3>{number}. {student.name}</h3>

        {isEditing ? (
          <>
            <input
              type="number"
              value={attendance}
              onChange={(e) => setAttendance(e.target.value)}
              placeholder="Attendance %"
            />
            <input
              type="number"
              value={accountability}
              onChange={(e) => setAccountability(e.target.value)}
              placeholder="Accountability %"
            />
          </>
        ) : (
          <>
            <p className="student-details">Attendance: {attendance}%</p>
            <p className="student-details">Accountability: {accountability}%</p>
          </>
          
        )}

        <div className="buttons">
          {isEditing ? (
            <button className="save-btn" onClick={handleSave}>Save</button>
          ) : (
            <button className="edit-btn" onClick={() => setIsEditing(true)}>Edit</button>
          )}
          <button className="delete-btn" onClick={() => onDelete(student.id)}>Delete</button>
        </div>
      </div>
    </li>
  );
}

export default StudentCard;

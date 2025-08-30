import React, { useState } from "react";
import AssignmentCard from "./AssignmentCard";

function AssignmentList({ assignments, addAssignment, updateAssignment, deleteAssignment, submitAssignment, students }) {
  const [title, setTitle] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    addAssignment({ title, dueDate: new Date().toISOString().split("T")[0], points: 10, submissions: [] });
    setTitle("");
  };

  return (
    <div className="assignment-list">
      <h2>Assignments</h2>
      <form onSubmit={handleAdd} className="add-assignment-form">
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Assignment Title" />
        <button type="submit">Add</button>
      </form>

      <div className="assignments-grid">
        {assignments.map((a) => (
          <AssignmentCard
            key={a.id}
            assignment={a}
            updateAssignment={updateAssignment}
            deleteAssignment={deleteAssignment}
          />
        ))}
      </div>
    </div>
  );
}

export default AssignmentList;

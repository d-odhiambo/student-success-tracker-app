import React, { useState } from "react";

function AddStudentForm({ addStudent }) {
  const [name, setName] = useState("");
  const [grade, setGrade] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !grade) return;

    addStudent({ name, grade });
    setName("");
    setGrade("");
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
        type="text"
        placeholder="Grade"
        value={grade}
        onChange={(e) => setGrade(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddStudentForm; // ✅ required

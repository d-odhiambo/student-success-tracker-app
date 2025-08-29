import React, { useState } from "react";

function AddStudentForm() {
  const [name, setName] = useState("");
  const [grade, setGrade] = useState("");

  return (
    <form>
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

export default AddStudentForm;

import React from "react";

function AddStudentForm() {
  return (
    <form>
      <h3>Add Student</h3>
      <input type="text" placeholder="Student Name" />
      <input type="text" placeholder="Grade" />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddStudentForm;

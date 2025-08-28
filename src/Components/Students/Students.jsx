import React, { useState } from "react";
import AddStudentForm from "./AddStudentForm";
import StudentList from "./StudentList";

function Students() {
  const [students, setStudents] = useState([]);

  function handleAddStudent(newStudent) {
    setStudents((prev) => [...prev, newStudent]);
  }

  return (
    <section>
      <h2>Students</h2>
      <AddStudentForm onAddStudent={handleAddStudent} />
      <StudentList students={students} />
    </section>
  );
}

export default Students;

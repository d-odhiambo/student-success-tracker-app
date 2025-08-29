import React from "react";
import StudentCard from "./StudentCard";

function StudentList({ students }) {
  if (!students || students.length === 0) {
    return 
  }

  return (
    <div>
      {students.map((student) => (
        <StudentCard key={student.id} student={student} />
      ))}
    </div>
  );
}

export default StudentList;

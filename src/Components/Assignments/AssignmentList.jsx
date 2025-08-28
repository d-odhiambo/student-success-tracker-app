import React,{useEffect,useState} from 'react'
import AssignmentCard from "./AssignmentCard" ;
import SubmissionForm from "./SubmissionForm"

const AssignmentList = ({
  assignments,
  students,
  addAssignment,
  updateAssignment,
  deleteAssignment,
  submitAssignment,
}) => {
  
  return (

    <div>
       <h2>Assignments</h2>
      {/* Add Assignment Form (simple inline for now) */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const title = e.target.title.value;
          if (!title) return;
          addAssignment({ title, submissions: [] });
          e.target.reset();
        }}
      >
        <input name="title" placeholder="Assignment Title" required />
        <button type="submit">Add</button>
      </form>

      <ul>
        {assignments.map((a) => (
          <AssignmentCard
            key={a.id}
            assignment={a}
            updateAssignment={updateAssignment}
            deleteAssignment={deleteAssignment}
          />
        ))}
      </ul>

      <SubmissionForm
        assignments={assignments}
        students={students}
        submitAssignment={submitAssignment}
      />      
    </div>
  )
}

export default AssignmentList

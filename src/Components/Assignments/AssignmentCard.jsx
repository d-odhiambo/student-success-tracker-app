import React from 'react'

const AssignmentCard = ({Assignment}) => {
  return (
    <div>
      <li className="assignment-card">
        <h4>{assignment.card}</h4>
        <p>Due :{assignment.dueDate} </p>
        <p>Points :{assignment.points} </p>
        <p>submissions :{assignment.submissions.length}</p>
      </li>      
    </div>
  )
}

export default AssignmentCard;

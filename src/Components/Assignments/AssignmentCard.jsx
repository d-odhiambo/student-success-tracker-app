import React,{useState} from 'react'

const AssignmentCard = ({ assignment, updateAssignment, deleteAssignment }) => {

  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(assignment.title);

  async function handleSave() {
    await updateAssignment(assignment.id, { title });
    setIsEditing(false);
  }

  return (
      <li>
        {isEditing ? (
          <>
            <input value={title} onChange={(e) => setTitle(e.target.value)} />
            <button onClick={handleSave}>Save</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
          </>
        ) : (
          <>
            <span>{assignment.title}</span>
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={() => deleteAssignment(assignment.id)}>Delete</button>
          </>
        )}
  
        {/* Show submissions if any */}
        {assignment.submissions?.length > 0 && (
          <ul>
            {assignment.submissions.map((sub, i) => (
              <li key={i}>
                Student #{sub.studentId} — {sub.status}
              </li>
            ))}
          </ul>
        )}
      </li>
    );
  }
  

export default AssignmentCard;

// src/Components/Assignments/SubmissionForm.jsx
import { useState } from 'react'

const SubmissionForm = ({ assignments, students }) => {
  const [formData, setFormData] = useState({
    studentId: '',
    assignmentId: '',
    status: 'on-time',
    submissionDate: new Date().toISOString().split('T')[0]
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Here you would typically send this data to your backend
    alert(`Assignment submitted successfully for ${getStudentName(formData.studentId)}`)
    
    // Reset form
    setFormData({
      studentId: '',
      assignmentId: '',
      status: 'on-time',
      submissionDate: new Date().toISOString().split('T')[0]
    })
  }

  const getStudentName = (studentId) => {
    const student = students.find(s => s.id === studentId)
    return student ? student.name : 'Select a student'
  }

  return (
    <form className="submission-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="studentId">Select Student:</label>
        <select 
          id="studentId" 
          name="studentId" 
          value={formData.studentId} 
          onChange={handleChange}
          required
        >
          <option value="">-- Select Student --</option>
          {students.map(student => (
            <option key={student.id} value={student.id}>
              {student.name}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="assignmentId">Select Assignment:</label>
        <select 
          id="assignmentId" 
          name="assignmentId" 
          value={formData.assignmentId} 
          onChange={handleChange}
          required
        >
          <option value="">-- Select Assignment --</option>
          {assignments.map(assignment => (
            <option key={assignment.id} value={assignment.id}>
              {assignment.title} (Due: {assignment.dueDate})
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>Submission Status:</label>
        <div className="radio-group">
          <label>
            <input 
              type="radio" 
              name="status" 
              value="on-time" 
              checked={formData.status === 'on-time'} 
              onChange={handleChange}
            />
            On Time
          </label>
          <label>
            <input 
              type="radio" 
              name="status" 
              value="late" 
              checked={formData.status === 'late'} 
              onChange={handleChange}
            />
            Late
          </label>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="submissionDate">Submission Date:</label>
        <input 
          type="date" 
          id="submissionDate" 
          name="submissionDate" 
          value={formData.submissionDate} 
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" className="btn-submit">Submit Assignment</button>
    </form>
  )
}

export default SubmissionForm
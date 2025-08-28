import React from 'react'

const SubmissionForm = ({ assignments, students, submitAssignment }) => {

  const [studentId, setStudentId] = useState("");
  const [assignmentId, setAssignmentId] = useState("");
  const [status, setStatus] = useState("on-time");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await submitAssignment(Number(assignmentId), {
        studentId: Number(studentId),
        status,
      });
      setStudentId("");
      setAssignmentId("");
      setStatus("on-time");
    } catch (err) {
      alert("Failed to submit: " + err.message);
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <h3>Submit Assignment</h3>
      <select
        value={studentId}
        onChange={(e) => setStudentId(e.target.value)}
        required
      >
        <option value="">Select Student</option>
        {students.map((s) => (
          <option key={s.id} value={s.id}>
            {s.name}
          </option>
        ))}
      </select>

      <select
        value={assignmentId}
        onChange={(e) => setAssignmentId(e.target.value)}
        required
      >
        <option value="">Select Assignment</option>
        {assignments.map((a) => (
          <option key={a.id} value={a.id}>
            {a.title}
          </option>
        ))}
      </select>

      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="on-time">On-time</option>
        <option value="late">Late</option>
        <option value="missing">Missing</option>
      </select>

      <button type="submit">Submit</button>
    </form>
  );
}
 

export default SubmissionForm

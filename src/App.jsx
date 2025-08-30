import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Dashboard from './Components/Dashboard';
import StudentList from './Components/Students/StudentList';
import AddStudentForm from './Components/Students/AddStudentForm';
import AssignmentList from './Components/Assignments/AssignmentList';
import { STUDENTS_URL, ASSIGNMENTS_URL, jsonFetch } from './api';
import "./App.css"
import SubmissionForm from "./Components/Assignments/SubmissionForm"

function App() {
  const [students, setStudents] = useState([]);
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const [s, a] = await Promise.all([jsonFetch(STUDENTS_URL), jsonFetch(ASSIGNMENTS_URL)]);
        setStudents(s);
        setAssignments(a);
      } catch (e) {
        console.error('Failed to load initial data', e);
      }
    })();
  }, []);

  
  async function addStudent(studentData) {
    const newStudent = await jsonFetch(STUDENTS_URL, { method: 'POST', body: JSON.stringify(studentData) });
    setStudents(prev => [...prev, newStudent]);
  }

  async function updateStudent(id, updates) {
    const updated = await jsonFetch(`${STUDENTS_URL}/${id}`, { method: 'PATCH', body: JSON.stringify(updates) });
    setStudents(prev => prev.map(s => (s.id === id ? updated : s)));
  }

  async function deleteStudent(id) {
    await jsonFetch(`${STUDENTS_URL}/${id}`, { method: 'DELETE' });
    setStudents(prev => prev.filter(s => s.id !== id));
  }

  
  async function addAssignment(assignData) {
    const newAssign = await jsonFetch(ASSIGNMENTS_URL, { method: 'POST', body: JSON.stringify(assignData) });
    setAssignments(prev => [...prev, newAssign]);
  }

  async function updateAssignment(id, updates) {
    const patched = await jsonFetch(`${ASSIGNMENTS_URL}/${id}`, { method: 'PATCH', body: JSON.stringify(updates) });
    setAssignments(prev => prev.map(a => (a.id === id ? patched : a)));
  }

  async function deleteAssignment(id) {
    await jsonFetch(`${ASSIGNMENTS_URL}/${id}`, { method: 'DELETE' });
    setAssignments(prev => prev.filter(a => a.id !== id));
  }

  async function submitAssignment(assignmentId, submission) {
    
    const assignment = await jsonFetch(`${ASSIGNMENTS_URL}/${assignmentId}`);
    const updatedSubmissions = [...(assignment.submissions || []), submission];
    const patched = await jsonFetch(`${ASSIGNMENTS_URL}/${assignmentId}`, {
      method: 'PATCH',
      body: JSON.stringify({ submissions: updatedSubmissions })
    });
    setAssignments(prev => prev.map(a => (a.id === assignmentId ? patched : a)));
  }

  return (
    <div>
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard students={students} assignments={assignments} />} />
          <Route path="/students" element={<StudentList students={students} updateStudent={updateStudent} deleteStudent={deleteStudent} />} />
          <Route path="/students/add" element={<AddStudentForm addStudent={addStudent} />} />
          <Route path="/assignments" element={<AssignmentList assignments={assignments} addAssignment={addAssignment} submitAssignment={submitAssignment} updateAssignment={updateAssignment} deleteAssignment={deleteAssignment} students={students} />} />
          <Route 
            path="/submit-assignment" 
            element={
              <div>
                <h2>Submit Assignment</h2>
                <SubmissionForm 
                  assignments={assignments} 
                  students={students} 
                  submitAssignment={submitAssignment} 
                />
              </div>
            } 
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
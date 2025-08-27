import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="navbar">
      <h1>Student Success Tracker</h1>
      <nav className="links">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/students">Students</Link>
        <Link to="/students/add">Add Student</Link>
        <Link to="/assignments">Assignments</Link>
      </nav>
    </header>
  );
}

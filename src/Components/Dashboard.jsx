import React, { useMemo } from 'react';

export default function Dashboard({ students = [], assignments = [] }) {
  const now = new Date();

  const overdueCount = useMemo(() => {
    return assignments.filter(a => new Date(a.dueDate) < now && (!a.submissions || a.submissions.length === 0)).length;
  }, [assignments, now]);

  const atRiskStudents = useMemo(() => students.filter(s => (s.attendancePercent || 0) < 80 || (s.accountabilityScore || 0) < 70), [students]);

  return (
    <div>
      <h2 className="title">Dashboard</h2>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 12 }}>
        <div className="card" style={{ flex: 1 }}>
          <h3>Total students</h3>
          <p>{students.length}</p>
        </div>
        <div className="card" style={{ flex: 1 }}>
          <h3>Total assignments</h3>
          <p>{assignments.length}</p>
        </div>
        <div className="card" style={{ flex: 1 }}>
          <h3>Overdue unsubmitted</h3>
          <p className={overdueCount > 0 ? 'overdue' : ''}>{overdueCount}</p>
        </div>
      </div>

      <section>
        <h3>Students needing attention</h3>
        {atRiskStudents.length === 0 ? <p className="muted">No immediate concerns.</p> : (
          <div className="grid">
            {atRiskStudents.map(s => (
              <div key={s.id} className="card">
                <h3>{s.name}</h3>
                <p>Attendance: {s.attendancePercent}%</p>
                <p>Accountability: {s.accountabilityScore}</p>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

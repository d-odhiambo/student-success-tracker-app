# Student Success Tracker App

The Student Success Tracker App is a web-based tool designed for teachers to monitor and improve student performance across attendance, assignments, labs, punctuality, and overall student progress. It provides real-time tracking, analytics, and insights to help teachers support students more effectively and efficiently.

---

## Core Functionality

### 1. Student Dashboard
- Displays a list of students with their attendance, assignment submissions, lab completions, and punctuality records.  
- Each student has a progress overview at a glance.

### 2. Add Student Form
- Teachers can add new students using a controlled form.  
- New students are saved to the backend (json-server) via a POST request and appear immediately in the UI.

### 3. Student Detail Page
- Clicking on a student opens a detail view with full statistics.  
- Shows:
  - Pending labs  
  - Late submissions  
  - Attendance rate  
  - Overall performance  

### 4. Deadline & Submission Tracking
- Teachers can mark whether students submitted labs, projects, or code challenges on time.  
- Students who miss deadlines are flagged visually (e.g., red warning text).

### 5. Attendance Monitoring
- Teachers can mark daily attendance.  
- Attendance percentage updates dynamically.

### 6. Teacher Dashboard / Analytics
- Provides aggregated statistics for the class:  
  - % of students meeting deadlines  
  - % of students attending on time  
  - Average assignment completion rate

---

## Technology
- Frontend: React (with hooks & controlled forms)  
- Backend: JSON Server (mock REST API)  
- State Management: React state + props  
- Styling: CSS / Tailwind (depending on implementation)  
- Testing: Jest + React Testing Library  

---

## Getting Started

### 1. Clone the Repository

git clone https://github.com/your-username/student-success-tracker-app.git
cd student-success-tracker-app

### 2. Install Dependencies
npm install

### 3. Start JSON Server (Backend)
npx json-server --watch db.json --port 3001

### 4. Run the React App
npm start

## Usage
- Open the app in your browser at http://localhost:3000.
- View the Student Dashboard for an overview.
- Add new students via the Add Student Form.
- Click a student to view detailed stats.
- Track attendance, deadlines, and submissions.
- Check the Teacher Dashboard for analytics.

## Features in Development
- Authentication for teachers
- Exporting analytics reports (CSV / PDF)
- Student self-service login to check their own progress

## Contributing
- Fork the repo
- Create a feature branch (git checkout -b feature/your-feature)
- Commit your changes (git commit -m "Add new feature")
- Push to the branch (git push origin feature/your-feature)
- Create a Pull Request

## License

This project is licensed under the MIT License.

## Author

Built with love to help teachers track and improve student success by;
Dancan Odhiambo
George Mukoshi
Zophar Nyakundi
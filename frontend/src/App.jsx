
import { useEffect, useMemo, useState } from "react";
import {
  Search,
  RefreshCw,
  GraduationCap,
  Users,
  UserCheck
} from "lucide-react";

import Navbar from "./components/Navbar";
import StudentForm from "./components/StudentForm";
import StudentTable from "./components/StudentTable";
import StudentDetails from "./components/StudentDetails";

import {
  getAllStudents,
  getStudentById,
  addStudent,
  updateStudent,
  deleteStudent
} from "./services/StudentService";

import "./App.css";

const emptyStudent = {
  name: "",
  email: "",
  course: ""
};

function App() {
  const [students, setStudents] = useState([]);
  const [student, setStudent] = useState(emptyStudent);
  const [editId, setEditId] = useState(null);

  const [search, setSearch] = useState("");
  const [searchId, setSearchId] = useState("");
  const [selectedStudent, setSelectedStudent] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // GET ALL STUDENTS
  const loadStudents = async () => {
    try {
      setLoading(true);
      setError("");

      const result = await getAllStudents();
      setStudents(result.data || []);

    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Load students when the page opens
  useEffect(() => {
    loadStudents();
  }, []);

  // ADD STUDENT
  const handleAdd = async () => {
    if (!student.name.trim() ||
        !student.email.trim() ||
        !student.course.trim()) {
      alert("Please fill in all fields");
      return;
    }

    try {
      await addStudent(student);

      alert("Student added successfully");
      clearForm();
      loadStudents();

    } catch (error) {
      alert(error.message);
    }
  };

  // SELECT STUDENT FOR EDITING
  const handleEdit = (selected) => {
    setEditId(selected.id);

    setStudent({
      name: selected.name,
      email: selected.email,
      course: selected.course
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  // UPDATE STUDENT
  const handleUpdate = async () => {
    if (editId === null) return;

    if (!student.name.trim() ||
        !student.email.trim() ||
        !student.course.trim()) {
      alert("Please fill in all fields");
      return;
    }

    try {
      await updateStudent(editId, student);

      alert("Student updated successfully");
      clearForm();
      loadStudents();

    } catch (error) {
      alert(error.message);
    }
  };

  // DELETE STUDENT
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?"
    );

    if (!confirmDelete) return;

    try {
      await deleteStudent(id);

      alert("Student deleted successfully");

      if (editId === id) {
        clearForm();
      }

      if (selectedStudent?.id === id) {
        setSelectedStudent(null);
      }

      loadStudents();

    } catch (error) {
      alert(error.message);
    }
  };

  // GET STUDENT BY ID
  const handleSearchById = async () => {
    if (!searchId.trim()) {
      alert("Please enter a student ID");
      return;
    }

    try {
      const result = await getStudentById(searchId);
      setSelectedStudent(result.data);

    } catch (error) {
      setSelectedStudent(null);
      alert(error.message);
    }
  };

  // CLEAR INPUTS
  const clearForm = () => {
    setStudent(emptyStudent);
    setEditId(null);
  };

  // SEARCH BY NAME OR EMAIL
  const filteredStudents = useMemo(() => {
    return students.filter((s) =>
      `${s.name} ${s.email}`
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [students, search]);

  return (
    <div className="app-layout">

      <Navbar />

      <main className="main-content">

        {/* TOP HEADER */}
        <header className="topbar">
          <div>
            <h1>Student Dashboard</h1>
            <p>Manage your student records in one place.</p>
          </div>

          <button
            className="refresh-btn"
            onClick={loadStudents}
          >
            <RefreshCw size={17} />
            Refresh
          </button>
        </header>

        {/* SUMMARY CARDS */}
        <section className="stats-grid">

          <div className="stat-card">
            <div className="stat-icon blue">
              <GraduationCap size={24} />
            </div>
            <div>
              <p>Total Students</p>
              <h2>{students.length}</h2>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon green">
              <Users size={24} />
            </div>
            <div>
              <p>Displayed Students</p>
              <h2>{filteredStudents.length}</h2>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon purple">
              <UserCheck size={24} />
            </div>
            <div>
              <p>System Status</p>
              <h2 className="status-text">Active</h2>
            </div>
          </div>

        </section>

        {/* ADD / UPDATE STUDENT */}
        <StudentForm
          student={student}
          setStudent={setStudent}
          editId={editId}
          onAdd={handleAdd}
          onUpdate={handleUpdate}
          onCancel={clearForm}
        />

        {/* GET STUDENT BY ID */}
        <div className="panel lookup-panel">
          <div>
            <h3>Find Student by ID</h3>
            <p>Search for an individual student record.</p>
          </div>

          <div className="lookup-controls">
            <input
              type="number"
              placeholder="Enter student ID"
              value={searchId}
              onChange={(e) => setSearchId(e.target.value)}
            />

            <button
              className="primary-btn"
              onClick={handleSearchById}
            >
              <Search size={17} />
              Find Student
            </button>
          </div>

          <StudentDetails
            student={selectedStudent}
            onClose={() => setSelectedStudent(null)}
          />
        </div>

        {/* STUDENT TABLE */}
        <section className="records-section">

          <div className="records-toolbar">
            <div>
              <h2>All Students</h2>
              <p>View, edit and manage student information.</p>
            </div>

            <div className="search-box">
              <Search size={18} />
              <input
                type="text"
                placeholder="Search name or email..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          {error && (
            <p className="error-message">{error}</p>
          )}

          {loading ? (
            <div className="loading">Loading students...</div>
          ) : (
            <StudentTable
              students={filteredStudents}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          )}

        </section>

        <footer className="footer">
          Student Management System · React + Spring Boot
        </footer>

      </main>
    </div>
  );
}

export default App;

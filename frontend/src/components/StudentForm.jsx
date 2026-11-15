
import { UserPlus, Save, X } from "lucide-react";

function StudentForm({
  student,
  setStudent,
  editId,
  onAdd,
  onUpdate,
  onCancel
}) {

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="panel">
      <div className="panel-heading">
        <div>
          <h3>{editId ? "Update Student" : "Add New Student"}</h3>
          <p>
            {editId
              ? `Editing student #${editId}`
              : "Enter student information below"}
          </p>
        </div>

        <div className="panel-icon">
          <UserPlus size={21} />
        </div>
      </div>

      <div className="field">
        <label>Student Name</label>
        <input
          name="name"
          value={student.name}
          onChange={handleChange}
          placeholder="Enter full name"
        />
      </div>

      <div className="field">
        <label>Email Address</label>
        <input
          name="email"
          type="email"
          value={student.email}
          onChange={handleChange}
          placeholder="Enter email address"
        />
      </div>

      <div className="field">
        <label>Course</label>
        <input
          name="course"
          value={student.course}
          onChange={handleChange}
          placeholder="Enter course name"
        />
      </div>

      <div className="form-actions">
        {editId ? (
          <>
            <button className="primary-btn" onClick={onUpdate}>
              <Save size={17} /> Save Changes
            </button>

            <button className="secondary-btn" onClick={onCancel}>
              <X size={17} /> Cancel
            </button>
          </>
        ) : (
          <button className="primary-btn" onClick={onAdd}>
            <UserPlus size={17} /> Add Student
          </button>
        )}
      </div>
    </div>
  );
}

export default StudentForm;

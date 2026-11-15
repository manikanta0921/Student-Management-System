
import { Pencil, Trash2, Users } from "lucide-react";

function StudentTable({
  students,
  onEdit,
  onDelete
}) {
  return (
    <div className="panel table-panel">
      <div className="panel-heading">
        <div>
          <h3>Student Records</h3>
          <p>Manage all registered students</p>
        </div>

        <div className="count-badge">
          <Users size={16} />
          {students.length} Students
        </div>
      </div>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>STUDENT NAME</th>
              <th>EMAIL ADDRESS</th>
              <th>COURSE</th>
              <th>ACTIONS</th>
            </tr>
          </thead>

          <tbody>
            {students.length > 0 ? (
              students.map((student) => (
                <tr key={student.id}>
                  <td>#{student.id}</td>

                  <td>
                    <div className="student-name">
                      <div className="student-avatar">
                        {student.name?.charAt(0).toUpperCase()}
                      </div>
                      <strong>{student.name}</strong>
                    </div>
                  </td>

                  <td>{student.email}</td>

                  <td>
                    <span className="course-tag">
                      {student.course}
                    </span>
                  </td>

                  <td>
                    <div className="action-buttons">
                      <button
                        className="icon-btn edit-action"
                        title="Edit student"
                        onClick={() => onEdit(student)}
                      >
                        <Pencil size={17} />
                      </button>

                      <button
                        className="icon-btn delete-action"
                        title="Delete student"
                        onClick={() => onDelete(student.id)}
                      >
                        <Trash2 size={17} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="empty-state">
                  No student records found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StudentTable;

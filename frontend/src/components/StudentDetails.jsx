
import { UserRound, X } from "lucide-react";

function StudentDetails({ student, onClose }) {
  if (!student) return null;

  return (
    <div className="details-card">
      <div className="details-heading">
        <div>
          <h3>Student Details</h3>
          <p>Student ID: #{student.id}</p>
        </div>

        <button className="icon-btn" onClick={onClose}>
          <X size={18} />
        </button>
      </div>

      <div className="details-avatar">
        <UserRound size={30} />
      </div>

      <h3 className="details-name">{student.name}</h3>

      <p><strong>Email:</strong> {student.email}</p>
      <p><strong>Course:</strong> {student.course}</p>
    </div>
  );
}

export default StudentDetails;

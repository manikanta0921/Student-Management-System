
import { GraduationCap, LayoutDashboard} from "lucide-react";

function Navbar() {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-icon">
          <GraduationCap size={25} />
        </div>
        <span>EduManage</span>
      </div>

      <p className="menu-heading">MAIN MENU</p>

      <div className="nav-item active">
        <LayoutDashboard size={19} />
        <span>Dashboard</span>
      </div>

      {/* <div className="nav-item">
        <Users size={19} />
        <span>Students</span>
      </div> */}

      <div className="sidebar-footer">
        <div className="avatar">A</div>
        <div>
          <strong>Admin</strong>
          <small>Administrator</small>
        </div>
      </div>
    </aside>
  );
}

export default Navbar;

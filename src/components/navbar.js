import TaskManager from "../assets/task_manager.png";
import Logo from "../assets/logo.png";
import "../styles/navbar.css";

export default function Navbar() {
  return (
    <>
      {/* Header Bar */}
      <header className="header">
        <img className="logo" src={Logo} alt="Logo" />
        <div className="header-btns">
          <button className="login-btn">Login</button>
          <button className="nav-btn">Get Started Free</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="navbar">
        <div className="nav-left">
          <div className="nav-detail">
            <h1>Stay Productive, Stay in Flow.</h1>
            <span>
              Organize your tasks, manage your projects, and collaborate in
              real-time.
            </span>
            <br />
            <br />
            <button className="nav-btn">Get Started Free</button>
          </div>
        </div>

        <div className="nav-right">
          <img
            className="taskManager"
            src={TaskManager}
            alt="Task Manager"
          />
        </div>
      </section>
    </>
  );
}

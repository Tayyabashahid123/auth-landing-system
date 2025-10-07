import TaskManager from "../assets/task_manager.png";
import "../styles/navbar.css";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <>
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
                    <Link to="/SignUp">
                    <button className="nav-btn">Get Started For Free</button>
                    </Link>

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

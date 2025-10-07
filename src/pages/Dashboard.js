import "../styles/Dashboard.css";
import Navbar from "../components/navbar"
import Footer from "../components/Footer"

export default function Dashboard() {
  const userName = "Tayyaba";

  return (
    <>
      <Navbar Logout={true} LogIn={false} Signup={false} Contact={false} /> 

      <div className="Dashboard-wrapper"> 
        
        <div className="salutation">
          <h1>Hello, {userName}</h1>
          <h2>Welcome Back!</h2> 
        </div>
          
        <div className="feature-gridS">
          
          <div className="metric-card">
            <div className="metric-detail">10</div>
            <div className="metric-name">Tasks Completed</div>
          </div>
          
          <div className="metric-card">
            <div className="metric-detail">2</div>
            <div className="metric-name">Messages</div>
          </div>

          <div className="metric-card">
            <div className="metric-detail">5</div>
            <div className="metric-name">Notifications</div>
          </div>

        </div>

        <div className="activities">
          <h2>Recent Activity</h2>
          <ul>
            <li>Task 1 Completed</li>
            <li>Task 2 Completed</li>
            <li>Task 3 Completed</li>
            <li>Task 4 Completed</li>
          </ul>
        </div>
      </div>

    </>
  )
}
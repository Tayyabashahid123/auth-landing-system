import FeatureCard from "../components/FeatureCard"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Footer from "../components/Footer"
import "../styles/Landing.css"
import Dashboard from "../assets/dashboard.png"
import Notifications from "../assets/notification.png"
import collabrationTool from "../assets/collabration_tool.png"
import organization from "../assets/organization.png"
import mobile from "../assets/mobile.png"
import lock from "../assets/lock.png"
import { Link } from "react-router-dom";


export default function Landing(){
    return (
        <>
           <Navbar Signup={true} LogIn={true} Contact={true} />
           <Hero/>

           <div className="Landing-Content">
               
               <h2 className="Heading"> Features</h2>

               <div className="feature-grid">
                   <FeatureCard name="Intuitive Dashboard" detail=" Manage your projects with ease using a clean drag-and-drop interface designed for speed and simplicity." img={Dashboard}/>
                   <FeatureCard name="Real-Time Notifications" detail=" Get real-time alerts on task updates and deadlines, optimized for both desktop and mobile devices." img={Notifications}/>
                   <FeatureCard name="Secure Collaboration" detail="Work together securely — share tasks, track progress, and protect your data with built-in verification." img={collabrationTool}/>
               </div>

               <div className="feature-grid">
                   <FeatureCard name="Organize Tasks" detail=" Drag and Drop tasks between boards" img={organization}/>
                   <FeatureCard name="Work Anywhere" detail=" Mobile Friendly Interface" img={mobile}/>
                   <FeatureCard name="Stay Secure" detail="Login and verify to keep your data safe" img={lock}/>
               </div>

               <div className="Signup-Section">
                   <h2 className="Heading"> Sign Up Today and Boost your Productivity</h2>
                   <Link to="/SignUp">
                       <button className="nav-btn">Get Started For Free</button>
                   </Link>
               </div>
           </div>

           <Footer />
        </>
    )
}

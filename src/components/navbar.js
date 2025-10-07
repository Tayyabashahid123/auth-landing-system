import Logo from "../assets/logo.png";
import "../styles/navbar.css";
import { Link } from "react-router-dom";



export default function Navbar({ Signup, LogIn, Logout, Contact }) {
  return (
    <>
      <header className="header">
        <img className="logo" src={Logo} alt="Logo" />
        <div className="header-btns">


        {LogIn &&
          <Link to="/Login">
            <button className="login-btn">Login</button>
          </Link>
        }
        {Signup &&
          <Link to="/SignUp">
            <button className="nav-btn">Sign Up</button>
          </Link>
        }

        {Contact &&
          <Link to="/contact"><button className="login-btn">Contact</button></Link>
        }

        {Logout &&
          <Link to="/"><button className="nav-btn">Log Out</button></Link>
        }

        </div>
      </header>

   
    </>
  );
}

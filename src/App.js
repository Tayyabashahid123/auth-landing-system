import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp"
import Verification from "./pages/Verification";
import Contact from "./pages/Contact";
import ThankYou from "./pages/ThankYou";
import Dashboard from "./pages/Dashboard";

function App() {

  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;

import "./App.css";
import "bulma/css/bulma.css";
import Navbar from "./components/Navbar.js";
import FormField from "./components/FormField.js";
import SignupForm from "./components/SignupForm.js";
import { useState } from "react";


function App() {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showLogin, setShowLogin] = useState(true);


  const handleSignUpClick = () => {
    setShowSignUp(!showSignUp); 
    setShowLogin(false); 
  };

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowSignUp(false); 
  };
  return (
    
    <div className="App">
      <Navbar onLoginClick={handleLoginClick} onSignUpClick={handleSignUpClick} />
      {showSignUp && <SignupForm />}
      {showLogin && (
        <div className="form-container">
          <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
          <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        </div>)} 
      </div> 
  );
}

export default App;

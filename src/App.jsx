import "./App.css";
import Hero from "./component/Hero";
import Navigation from "./component/Navigation";
import { useState } from "react";

const App = () => {
  const [isLogin, setIsLogin] = useState(false);

  const toggleLogin = () => {
    setIsLogin((prev) => !prev);
  };

  return (
    <div>
      <Navigation toggle={toggleLogin} />
      <Hero />

      
      {isLogin && (
        <div className="popup">
          <div className="popup-content">
            <h2>Login</h2>
            <p>Please enter your login details.</p>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <div className="popup-buttons">
              <button>Submit</button>
              <button className="btn-2" onClick={toggleLogin}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;

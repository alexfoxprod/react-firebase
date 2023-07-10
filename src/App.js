import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import { AuthProvider } from "./Auth";
function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;

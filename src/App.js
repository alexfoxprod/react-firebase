import "./App.css";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from "./Home";
// import Login from "./Login";
import SignUp from "./components/auth/SignUp";
import SignIn from "./components/auth/SignIn";
// import { AuthProvider } from "./Auth";
// import PrivateRoute from "./PrivateRoute";
import AuthDetails from "./components/AuthDetails";
function App() {
  return (
    <div className="App">
      <SignIn />
      <SignUp />
      <AuthDetails />
    </div>
    // <AuthProvider>
    //   <Router>
    //     <div>
    //       <Routes>
    //         <Route
    //           exact
    //           path="/"
    //           element={<PrivateRoute exact path="/" element={<Home />} />}
    //         />
    //         <Route exact path="/login" element={<Login />} />
    //         <Route exact path="/signup" element={<SignUp />} />
    //       </Routes>
    //     </div>
    //   </Router>
    // </AuthProvider>
  );
}

export default App;

// eslint-disable-next-line no-unused-vars
import React from "react";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./pages/Login/Login";
import { Navigate } from "react-router";
import SignUp from "./pages/SignUp/SignUp";


const routes = (
  <Router>
    <Routes>
      <Route path="/dashboard" exact element={<Home/>}/>
      <Route path="/login" exact element={<Login/>}/>
      <Route path="/signup" exact element={<SignUp/>}/>
      <Route path="*" element={<Navigate to="/login" />} /> {/* Redirect to /login by default */}
    </Routes>
  </Router>
);

const App = () => {
  return (
    <div>
      {routes}
    </div>
  );
};

export default App;

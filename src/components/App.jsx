
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { lazy, Suspense } from "react";

const Home = lazy(() => import('pages/Home'));
const Login = lazy(() => import('pages/Login'));
const Register = lazy(() => import('pages/Register'));


const App =() => {

    return (
     <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Log in</Link>
        <Link to="/register">Register</Link>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="login" element={<Login />}/>
      <Route path="register" element={<Register/>}/>
     </Routes>
      </Suspense>
     
     </div>
    );
  
  
};
export default App;

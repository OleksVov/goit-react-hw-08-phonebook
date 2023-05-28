
import React from "react";
import { Routes, Route } from "react-router-dom";
import { lazy, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { Layout } from "./Layout/Layout";
import { PrivateRoute } from "./PrivateRoute";
import { RestrictedRoute } from "./RestrictedRoute";
import { useAuth } from "hooks";
import { refreshUser } from "redux/auth/auth-operations";

const HomePage = lazy(() => import('../pages/Home'));
const LoginPage = lazy(() => import('../pages/Login'));
const RegisterPage = lazy(() => import('../pages/Register'));
const ContactsBookPage = lazy(() => import('../pages/ContactsBook'));


const App =() => {

  const dispatch = useDispatch();
  const {isRefreshing} = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch])

    return isRefreshing ? (<b>Refreshing user...</b>) : (

      <Routes>
      <Route path="/" element={<Layout />}/>
      <Route index element={<HomePage/>}/>
      
      <Route path="register" element={
        <RestrictedRoute redirectTo="/contacts" component={<RegisterPage/>}/>
      }/>
      <Route path="login" element={
        <RestrictedRoute redirectTo="/contacts" component={<LoginPage />}/>
      }/> 
       <Route path="contacts" element={
        <PrivateRoute redirectTo="/login" component={<ContactsBookPage/>}/>
      }/> 
      
     </Routes>
  
    );
  
  
};
export default App;

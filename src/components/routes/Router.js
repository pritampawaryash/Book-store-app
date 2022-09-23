import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Home";
import Login from "../login/Login";
import Signup from "../signin/signup";
import ProtectedRoute from "./ProtectedRoute";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home/>
            </ProtectedRoute>
          }
        />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    </>
  );
};

export default Router;

import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// components

import Navbar from "../components/Navbars/AuthNavbar.js";

// views

import Login from "../views/auth/Login.js";

export default function Auth() {
  return (
    <>
      <Navbar transparent />
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
            style={{
              backgroundImage:
                "url(" + require("../assets/img/register_bg_2.png").default + ")",
            }}
          ></div>
          <Routes>
            <Route path="/auth/login"  component={<Login/>} exact/>
            <Navigate from="/auth" to="/auth/login" />
          </Routes>
         
        </section>
      </main>
    </>
  );
}

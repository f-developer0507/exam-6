import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Sidebar from "./components/sitebar/index";
import Teachers from "./pages/Teachers/Teachers";
import AddTeachers from "./pages/Add-teachers/Teachers";
import { SignIn, SignUp } from "@pages";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
      <div className="flex">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route index path="/main/dashboard" element={<Dashboard />} />
            <Route path="/main/teachers" element={<Teachers />} />
            <Route path="/main/teachers/add" element={<AddTeachers />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;

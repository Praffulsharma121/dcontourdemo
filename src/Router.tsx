import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { Home } from "./Home/Home";
import { PageNotFound } from "./PageNotFound/PageNotFound";
import { Login } from "./Login/Login";
import ProtectedRoute from "./ProtectedRoute";
import { Ffstrip } from "./FFSTRIP/Ffstrip";
import { LightGuide } from "./Light-Guide/LightGuide";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/Tool-Name/FFSTRIP" element={<Ffstrip />} />
            <Route path="/Tool-Name/Light-Guide" element={<LightGuide />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default AppRouter;

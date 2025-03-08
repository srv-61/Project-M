import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PoliticianDashboard from "./pages/Politician";
import AudienceView from "./pages/Audience";
import AdminPanel from "./pages/Admin";
import Login from "./Login";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/politician" element={<PoliticianDashboard />} />
        <Route path="/audience" element={<AudienceView />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </Router>
  );
};

export default App;

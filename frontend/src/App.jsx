import DashboardPage from "./components/Dashboard";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </div>
  );
};

export default App;

import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Geolocation from "../components/Geolocation";
import User from "../components/User";
import Logs from "../components/Logs";

const DashboardPage = () => {
  const [selectedComponent, setSelectedComponent] = useState("geolocation");

  const renderContent = () => {
    switch (selectedComponent) {
      case "geolocation":
        return <Geolocation />;
      case "user":
        return <User />;
      case "logs":
        return <Logs />;
      default:
        return <Geolocation />;
    }
  };

  return (
    <div className="min-h-screen w-full flex">
      <Sidebar onSelect={setSelectedComponent} />
      <div className="flex-grow flex justify-center items-center">
        {renderContent()}
      </div>
    </div>
  );
};

export default DashboardPage;

import React from "react";

const Sidebar = ({ onSelect }) => {
  return (
    <div className="min-h-screen w-1/6 bg-gray-800 text-white flex flex-col gap-5">
      <button onClick={() => onSelect("geolocation")}>Geolocation</button>
      <button onClick={() => onSelect("user")}>User</button>
      <button onClick={() => onSelect("logs")}>Logs</button>
      <button
        onClick={() => {
          alert("logout clicked");
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Sidebar;

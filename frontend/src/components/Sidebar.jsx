import React, { useState } from "react";

const Sidebar = ({ onSelect }) => {
  const [activeButton, setActiveButton] = useState("geolocation"); // Default to Geolocation
  
  const menuItems = [
    { label: "Geolocation", value: "geolocation" },
    { label: "User", value: "user" },
    { label: "Logs", value: "logs" },
  ];
  
  return (
    <div className="left-0 top-0 h-screen w-1/5 bg-[#FB4F4F]/75 text-white px-5 py-16 flex flex-col items-center shadow-xl">
      {/* Sidebar Container */}
      <div className="flex flex-col items-center w-full">
        <img src="/dashboard_icon.png" alt="Dashboard Icon" className="mb-4" />
        
        {/* Menu Buttons */}
        {menuItems.map((item, index) => {
          const isActive = activeButton === item.value;
          return (
            <button
              key={item.value}
              onClick={() => {
                setActiveButton(item.value);
                onSelect(item.value);
              }}
              className={`py-5 px-4 w-full title4 relative overflow-hidden group ${
                index === 0 ? 'border-t' : index === menuItems.length - 1 ? 'border-b' : 'border-y'
              } ${isActive ? 'bg-white/20' : ''}`}
            >
              <span className="relative z-10">{item.label}</span>
              {!isActive && (
                <span className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              )}
            </button>
          );
        })}
      </div>
      
      {/* Logout Button */}
      <button
        onClick={() => alert("logout clicked")}
        className="py-2 px-4 text-base bg-red-600 hover:bg-red-500 rounded-lg transition mt-auto"
      >
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
import React, { useState } from "react";
import { MapPinHouse, UserSearch, Logs, DoorOpen, Menu } from "lucide-react";

const Sidebar = ({ onSelect, className = "" }) => {
  const [activeButton, setActiveButton] = useState("geolocation");
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems = [
    { label: "Geolocation", value: "geolocation", icon: <MapPinHouse size={24} /> },
    { label: "User", value: "user", icon: <UserSearch size={24} /> },
    { label: "Logs", value: "logs", icon: <Logs size={24} /> },
  ];

  return (
    <div className={`md:flex h-screen ${isCollapsed ? "w-16" : "w-flex"} bg-[#FB4F4F] text-white p-4 flex-col items-start ${className} transition-all`}>
      {/* Menu Toggle Button */}
      <button 
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="items-center hover:bg-white/10 transition mb-4"
      >
        <Menu size={24} />
      </button>
      
      <img src="/dashboard_icon.png" alt="Dashboard Icon" className={`${isCollapsed ? "hidden" : "mb-4"}`} />
      
      {/* Menu Items */}
      <div className="w-full flex flex-col gap-2">
        {menuItems.map((item) => {
          const isActive = activeButton === item.value;
          return (
            <button
              key={item.value}
              onClick={() => {
                setActiveButton(item.value);
                onSelect(item.value);
              }}
              className={`py-4 w-full text-lg flex items-center transition ${
                isActive ? "bg-white/20" : "hover:bg-white/10"
              }`}
            >
              <div className="w-8 flex justify-center">{item.icon}</div>
              {!isCollapsed && <span className="ml-2 text-left">{item.label}</span>}
            </button>
          );
        })}
      </div>

      {/* Logout Button at the Bottom */}
      <div className="w-full mt-auto"> 
        <button
          onClick={() => alert("Logout clicked")}
          className="py-4 w-full flex items-center hover:bg-red-500 transition"
        >
          <div className="w-8 flex justify-center"><DoorOpen size={24} /></div>
          {!isCollapsed && <span className="ml-2 text-left">Logout</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;

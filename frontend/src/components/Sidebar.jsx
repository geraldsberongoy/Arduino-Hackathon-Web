import React, { useState } from "react";
import { MapPinHouse, UserSearch, Logs, DoorOpen, Menu, X } from "lucide-react";

const Sidebar = ({ onSelect, className = "" }) => {
  const [activeButton, setActiveButton] = useState("geolocation");
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems = [
    { label: "Geolocation", value: "geolocation", icon: <MapPinHouse size={24} /> },
    { label: "User", value: "user", icon: <UserSearch size={24} /> },
    { label: "Logs", value: "logs", icon: <Logs size={24} /> },
  ];

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      {/* Sidebar Container */}
      <div 
        className={`flex flex-col h-screen text-white bg-[#FB4F4F] p-5 transition-all duration-300 ${
          isCollapsed ? "w-20" : "w-64"
        }`}
      >
        {/* Sidebar Items Container*/}
        <div className="flex flex-col w-full h-full justify-between gap-20">
          
          {/* Hamburger-menu and Logo Container */}
          <div className="flex flex-col items-center gap-4 pb-5 border-b">
            <button 
              onClick={toggleCollapse} 
              className="self-end hover:bg-white/10 p-2 rounded-full transition"
            >
              {isCollapsed ? <Menu size={24} /> : <X size={24} />}
            </button>
            
            <div className="flex flex-col items-center gap-2">
              <img 
                src="/dashboard_icon.png" 
                alt="Dashboard Icon" 
                className={`transition-all duration-300 ${isCollapsed ? "size-8" : "size-20"}`} 
              />
              <h1 className={`title4 ${isCollapsed ? "hidden" : "block"}`}>ALERTECH</h1>
            </div>
          </div>

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
                  className={`p-4 w-full text-lg flex ${isCollapsed ? "justify-center" : "items-center"} transition ${
                    isActive ? "bg-white/20" : "hover:bg-white/10"
                  }`}
                >
                  <div className={`${isCollapsed ? "" : "w-8"} flex justify-center`}>
                    {item.icon}
                  </div>
                  {!isCollapsed && <span className="ml-2 text-left">{item.label}</span>}
                </button>
              );
            })}
          </div>
          
          {/* Logout Button at the Bottom */}
          <div className="w-full border-t pt-5"> 
            <button
              onClick={() => alert("Logout clicked")}
              className={`py-4 w-full flex ${isCollapsed ? "justify-center" : "items-center"} hover:bg-red-500 transition`}
            >
              <div className={`${isCollapsed ? "" : "w-8"} flex justify-center`}>
                <DoorOpen size={24} />
              </div>
              {!isCollapsed && <span className="ml-2 text-left">Logout</span>}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
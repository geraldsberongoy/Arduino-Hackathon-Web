import React, { useState } from "react";
import { MapPinHouse, UserSearch, Logs, DoorOpen, Menu, X } from "lucide-react";

const Sidebar = ({ onSelect, className = "" }) => {
  const [activeButton, setActiveButton] = useState("geolocation");
  const [isOpen, setIsOpen] = useState(false); // Controls the drawer visibility

  const menuItems = [
    { label: "Geolocation", value: "geolocation", icon: <MapPinHouse size={20} /> },
    { label: "User", value: "user", icon: <UserSearch size={20} /> },
    { label: "Logs", value: "logs", icon: <Logs size={20} /> },
  ];

  return (
    <>
      {/* Menu Button for Small Screens */}
{!isOpen && ( 
  <button 
    onClick={() => setIsOpen(true)} 
    className="md:hidden fixed top-4 left-4 z-[1000] bg-[#FB4F4F] p-2 rounded text-white"
  >
    <Menu size={28} />
  </button>
)}

      {/* Sidebar for Large Screens */}
      <div className={`hidden md:flex mt-auto h-screen w-1/6 bg-[#FB4F4F] text-white p-6 flex-col items-center ${className} z-[999]`}>
        <img src="/dashboard_icon.png" alt="Dashboard Icon" className="mb-4" />
        {/* Menu Items */}
        {menuItems.map((item) => {
          const isActive = activeButton === item.value;
          return (
            <button
              key={item.value}
              onClick={() => {
                setActiveButton(item.value);
                onSelect(item.value);
              }}
              className={`py-5 px-4 w-full text-lg flex items-center transition ${
                isActive ? "bg-white/20" : "hover:bg-white/10"
              }`}
            >
              {item.icon}
              <span className="ml-2">{item.label}</span>
            </button>
          );
        })}
        {/* Logout Button */}
        <button
          onClick={() => alert("Logout clicked")}
          className="py-5 mt-auto px-4 text-base bg-red-600 hover:bg-red-500 w-full flex justify-items-center rounded-lg transition"
        >
          <DoorOpen size={24} className="mr-2" />
          Logout
        </button>
      </div>

      {/* Mobile Drawer */}
      <div 
        className={`fixed top-0 md:hidden left-0 h-screen w-64 bg-[#FB4F4F] text-white p-6 flex flex-col z-[999] shadow-xl transform transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ transition: "transform 0.3s ease-in-out" }} // Ensures smooth animation
      >
        {/* Close Button */}
        <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-white">
          <X size={28} />
        </button>

        <img src="/dashboard_icon.png" alt="Dashboard Icon" className="mb-4" />

        {/* Menu Items */}
        {menuItems.map((item) => {
          const isActive = activeButton === item.value;
          return (
            <button
              key={item.value}
              onClick={() => {
                setActiveButton(item.value);
                onSelect(item.value);
                setIsOpen(false); // Close drawer on selection
              }}
              className={`py-5 px-4 w-full text-lg flex items-center transition ${
                isActive ? "bg-white/20" : "hover:bg-white/10"
              }`}
            >
              {item.icon}
              <span className="ml-2">{item.label}</span>
            </button>
          );
        })}

        {/* Logout Button */}
        <button
          onClick={() => alert("Logout clicked")}
          className="py-5 px-4 mt-auto text-base bg-red-600 hover:bg-red-500 w-full flex justify-items-center rounded-lg transition"
        >
          <DoorOpen size={24} className="mr-2" />
          Logout
        </button>
      </div>

      {/* Background Overlay When Drawer is Open */}
      {isOpen && (
        <div 
          className="fixed inset-0 md:hidden bg-black bg-opacity-50 z-[998]"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;

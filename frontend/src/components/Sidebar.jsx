import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  MapPinHouse,
  UserSearch,
  Logs,
  LogOut,
  Menu,
  SquareChevronLeft,
} from "lucide-react";

const Sidebar = ({ onSelect, className = "" }) => {
  const [activeButton, setActiveButton] = useState("geolocation");
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems = [
    {
      label: "Geolocation",
      value: "geolocation",
      icon: <MapPinHouse size={24} />,
    },
    { label: "User", value: "user", icon: <UserSearch size={24} /> },
    { label: "Logs", value: "logs", icon: <Logs size={24} /> },
  ];

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`flex flex-col h-screen text-white bg-[#FB4F4F]/75 z-1 px-5 py-3 transition-all duration-300 shadow-[8px_0px_15px_0px_rgba(0,0,0,0.2)] ${
        isCollapsed ? "w-20" : "w-64"
      }`}
    >
      {/* Sidebar Items Container*/}
      <div className="flex flex-col w-full h-full justify-between gap-20">
        {/* Hamburger-menu and Logo Container */}
        <div className="flex flex-col items-center gap-4 pb-3 border-b">
          <button
            onClick={toggleCollapse}
            className="self-end hover:bg-white/10 p-2 rounded-full transition relative h-10 w-10 flex items-center justify-center  tooltip tooltip-primary tooltip-right"
          data-tip={isCollapsed ? "Expand" : "Collapse"}>
            <div
              className={`absolute transition-all duration-300 ${
                isCollapsed ? "opacity-100 rotate-0" : "opacity-0 rotate-90"
              }`}
            >
              <Menu size={24} />
            </div>
            <div
              className={`absolute transition-all duration-300 ${
                isCollapsed ? "opacity-0 -rotate-90" : "opacity-100 rotate-0"
              }`}
            >
              <SquareChevronLeft size={24} />
            </div>
          </button>

          <div className="flex flex-col items-center gap-2">
            <img
              src="/dashboard_icon.png"
              alt="Dashboard Icon"
              className={`transition-all duration-300 ${
                isCollapsed ? "size-8" : "size-20"
              }`}
            />
            <h1
              className={`${
                isCollapsed ? "hidden" : "block"
              } font-['Bebas_Neue'] text-[42px]`}
            >
              ALERTECH
            </h1>
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
                className={`p-4 w-full text-lg flex rounded-xl text-gray-100 ${
                  isCollapsed
                    ? "justify-center  text-white tooltip tooltip-primary tooltip-right"
                    : "items-center"
                } transition ${isActive ? "bg-white/20" : "hover:bg-white/10"}`}
                data-tip={item.label}
              >
                <div
                  className={`${isCollapsed ? "" : "w-8"} flex justify-center`}
                >
                  {item.icon}
                </div>
                {!isCollapsed && (
                  <span className="ml-2 text-left">{item.label}</span>
                )}
              </button>
            );
          })}
        </div>

        {/* Logout Button at the Bottom */}
        <div>
          <hr className="border border-white w-full mb-2" />
          <div className="w-full ">
            <Link to="/">
              <button
                className={`py-4 px-4 w-full flex ${
                  isCollapsed ? "justify-center tooltip tooltip-primary tooltip-right" : "items-center"
                } hover:bg-red-500 transition rounded-xl`}
              data-tip="Logout">
                <div
                  className={`${isCollapsed ? "" : "w-8"} flex justify-center`}
                >
                  <LogOut size={24} />
                </div>
                {!isCollapsed && <span className="ml-2 text-left">Logout</span>}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

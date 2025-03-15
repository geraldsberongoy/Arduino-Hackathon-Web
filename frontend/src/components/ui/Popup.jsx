import React from "react";

const Popup = ({ temperature, date, lastUpdate, status }) => {
  const statusColors = {
    critical: "#fb4f4f",
    warning: "#ff9911",
    safe: "#33bc85",
  };

  const statusMessages = {
    critical: "Critical = (3 validations, firefighters alerted)",
    warning: "Warning = (1–2 validations)",
    safe: "Safe = No Detected Issues",
  };

  return (
    <div className="w-[349px] h-[230px] relative">
      <div className="w-[349px] h-[230px] left-0 top-0 absolute bg-[#fb4f4f]/75 rounded-[20px] shadow-[4px_4px_4px_0px_rgba(255,255,255,1.00)]" />
      <div className="w-[349px] h-10 left-0 top-[190px] absolute bg-[#ffd9da] rounded-bl-[20px] rounded-br-[20px] shadow-[4px_4px_4px_0px_rgba(255,255,255,1.00)]" />
      <div className="left-[20px] top-[48px] absolute justify-center text-white text-[85px] font-normal font-['Bebas_Neue']">
        {temperature}°
      </div>
      <div className="left-[233px] top-[200px] absolute justify-start text-[#30343f] text-base font-normal font-['IBM_Plex_Sans']">
        {date}
      </div>
      <div className="left-[20px] top-[200px] absolute justify-start text-[#30343f] text-base font-normal font-['IBM_Plex_Sans']">
        Last Update: {lastUpdate}
      </div>
      <div
        className={`w-[18px] h-[18px] left-[143px] top-[121px] absolute rounded-full shadow-[2px_2px_4px_0px_rgba(255,255,255,1.00)]`}
        style={{ backgroundColor: statusColors[status] }}
      />
      <div className="w-[170px] left-[174px] top-[119px] absolute justify-center">
        <span className="text-white text-sm font-medium font-['IBM_Plex_Sans'] leading-tight">
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
        <span className="text-white text-sm font-normal font-['IBM_Plex_Sans'] leading-tight">
          {" "}
          = {statusMessages[status]}
        </span>
      </div>
    </div>
  );
};

export default Popup;

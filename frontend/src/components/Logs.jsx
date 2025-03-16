import React, { useState } from "react";
import LogPanel from "./LogPanel";
import ConsolePanel from "./ConsolePanel";
import DatabasePanel from "./DatabasePanel";

const tabs = ["Logs", "Console", "Database"];

const Logs = () => {
  const [activeTab, setActiveTab] = useState("Logs");

  const getActivePanel = () => {
    const panels = {
      "Logs": <LogPanel />,
      "Console": <ConsolePanel />,
      "Database": <DatabasePanel />
    };
    
    return panels[activeTab] || <h1>Content Coming Soon</h1>;
  };

  return (
    <div className="w-full h-screen bg-white p-10">
      <div className="w-full h-full flex flex-col gap-10">
        {/* Header */}
        <div className="flex flex-col gap-2">
          <h1 className="text-5xl font-bold font-['IBM_Plex_Sans'] text-[#30343f]">Logs</h1>
          <p className="text-[#fc6791] text-base font-normal font-['IBM_Plex_Sans']">
            Monitor user fire statuses and details
          </p>
        </div>

        {/* Dashboard */}
        <div className="flex flex-col w-full flex-grow gap-2">
          {/* Tabs */}
          <div className="flex flex-row gap-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 text-lg font-semibold rounded-full w-40 cursor-pointer
                  transition-all duration-200 ${
                    activeTab === tab
                      ? "bg-gradient-to-r from-[#FC99C5] via-[#FF6501] to-[#F91] text-white shadow-[inset_0_5px_7px_1px_rgba(0,0,0,0.25)]"
                      : "text-transparent bg-clip-text bg-gradient-to-r from-[#FC99C5] via-[#FF6501] to-[#F91] border-2 border-[#FC99C5]"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="bg-[#FFD9DA] flex justify-center items-center w-full flex-grow drop-shadow-[0_7px_5px_rgba(0,0,0,0.25)] rounded-xl p-5">
            {getActivePanel()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logs;
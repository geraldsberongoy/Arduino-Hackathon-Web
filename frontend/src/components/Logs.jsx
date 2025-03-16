import React from "react";

const tabs = ["Logs", "Console", "Database"]; // Moved outside for better readability

const Logs = () => {
  return (
    <>
      {/* Logs Page Container */}
      <div className="w-full h-screen bg-white p-10">

        {/* Logs Panel */}
        <div className="w-full h-full flex flex-col gap-10">

          {/* Page Header */}
          <div className="flex flex-col gap-2">
            <h1 className="text-5xl font-bold font-['IBM_Plex_Sans'] text-[#30343f]">Logs</h1>
            <p className="justify-start text-[#fc6791] text-base font-normal font-['IBM_Plex_Sans']">
              Monitor user fire statuses and details
            </p>
          </div>

          {/* Logs Dashboard */}
          <div className="flex flex-col w-full flex-grow gap-2">

            {/* Navigation Tabs */}
            <div className="flex flex-row gap-4">
                {tabs.map((tab, index) => (
                <button 
                key={index} 
                className="relative px-6 py-2 text-lg font-semibold rounded-full overflow-hidden cursor-pointer w-40"
                >

                  {/* Gradient Border */}
                  <span className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-[#FC99C5] via-[#FF6501] to-[#F91] p-[0.1px]">
                    <span className="block h-full w-full rounded-full bg-white"></span>
                  </span>

                  {/* Gradient Text */}
                  <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-[#FC99C5] via-[#FF6501] to-[#F91]">
                    {tab}
                  </span>
                </button>
              ))}
            </div>

            {/* Active Content Area */}
            <div className="bg-[#FFD9DA] flex justify-center items-center w-full flex-grow drop-shadow-[0_7px_5px_rgba(0,0,0,0.25)] rounded-xl">
              <h1>Hello, World!</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Logs;

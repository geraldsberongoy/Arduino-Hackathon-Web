import React from "react";

const StaticCard = () => {
  return (
    <div className="flex flex-col w-[360px] h-[230px] flex-shrink-0">
      {/* Main background container */}
      <div className="flex flex-col flex-1 bg-[#fb4f4f]/75 rounded-[20px] shadow-[4px_4px_4px_0px_rgba(255,255,255,1.00)]">
        {/* Top content area */}
        <div className="flex flex-1 p-5">
          {/* Left side - Temperature */}
          <div className="flex items-center text-white text-[85px] font-normal font-['Bebas_Neue']">
            36°
          </div>

          {/* Right side - Status indicators */}
          <div className="flex flex-col justify-center ml-3 gap-4">
            {/* Status line with vertical divider */}
            <div className="flex items-center relative">
              {/* Vertical divider */}
              <div className="absolute left-[-10px] h-full w-[0.5px] bg-white shadow-[2px_2px_4px_0px_rgba(255,255,255,1.00)]"></div>

              {/* Status indicators */}
              <div className="flex flex-col gap-5">
                {/* Safe status */}
                <div className="flex items-center">
                  <div className="w-[18px] h-[18px] bg-[#33bc85] rounded-full shadow-[2px_2px_4px_0px_rgba(255,255,255,1.00)]"></div>
                  <div className="ml-3">
                    <span className="text-white text-sm font-medium font-['IBM_Plex_Sans'] leading-tight">
                      Safe
                    </span>
                    <span className="text-white text-sm font-normal font-['IBM_Plex_Sans'] leading-tight">
                      {" "}
                      = No Detected Issues
                    </span>
                  </div>
                </div>

                {/* Warning status */}
                <div className="flex items-center">
                  <div className="w-[18px] h-[18px] bg-[#ff9911] rounded-full shadow-[2px_2px_4px_0px_rgba(255,255,255,1.00)]"></div>
                  <div className="ml-3">
                    <span className="text-white text-sm font-medium font-['IBM_Plex_Sans'] leading-tight">
                      Warning
                    </span>
                    <span className="text-white text-sm font-normal font-['IBM_Plex_Sans'] leading-tight">
                      {" "}
                      = (1–2 validations)
                    </span>
                  </div>
                </div>

                {/* Critical status */}
                <div className="flex items-center">
                  <div className="w-[18px] h-[18px] flex-shrink-0 bg-[#fb4f4f] rounded-full shadow-[2px_2px_4px_0px_rgba(255,255,255,1.00)]"></div>
                  <div className="ml-3">
                    <span className="text-white text-sm font-medium font-['IBM_Plex_Sans'] leading-tight">
                      Critical
                    </span>
                    <span className="text-white text-sm font-normal font-['IBM_Plex_Sans'] leading-tight">
                      {" "}
                      = (3 validations, firefighters alerted)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom footer bar */}
        <div className="h-10 bg-[#ffd9da] rounded-bl-[20px] rounded-br-[20px] shadow-[4px_4px_4px_0px_rgba(255,255,255,1.00)] flex justify-between items-center px-5">
          <div className="text-[#30343f] text-base font-normal font-['IBM_Plex_Sans']">
            Last Update: 7:31PM
          </div>
          <div className="text-[#30343f] text-base font-normal font-['IBM_Plex_Sans']">
            Sat, March 15
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaticCard;
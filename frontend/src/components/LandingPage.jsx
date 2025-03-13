import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="relative min-h-screen w-full flex justify-end items-center bg-gradient-to-l from-[#fc99c5] via-[#fc6791] to-[#ff9911]">
      <img
        src="/fire_bg.png"
        alt="Fire Bg"
        className="absolute right-0 top-0 h-screen w-3/4 "
      />

      <div className="flex justify-end w-[630px] items-end flex-col gap-2.5 z-50 mr-20">
        <div className="flex justify-between w-full">
          <div className="flex flex-col justify-end">
            <div
              className="text-9xl font-normal font-['Bebas_Neue']"
              style={{
                background:
                  "linear-gradient(to top, #FC99C5, #FC6791 25%, #FB4F4F 50%, #FF6501 75%, #FF9911)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              ALERTECH
            </div>

            <div className="justify-start text-[#30343f] text-[42px] font-normal font-['IBM_Plex_Sans']">
              TECHNOQUATRO
            </div>
          </div>
          <img src="/logo.png" alt="ALERTECH LOGO" />
        </div>

        <div class=" text-[#30343f] text-xl font-normal font-['IBM_Plex_Sans']">
          This project focuses on real-time fire and gas leak detection using
          ESP32 and Firebase. By integrating IoT sensors, a mobile app, and a
          web dashboard, we ensure instant alerts to users and fire stations,
          even triggering an automated call if necessary.
        </div>
        <div className="flex w-full mt-5">
          <Link to="/dashboard">
            <button className="button2 text-center justify-center text-white text-xl font-normal font-['IBM_Plex_Sans']">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

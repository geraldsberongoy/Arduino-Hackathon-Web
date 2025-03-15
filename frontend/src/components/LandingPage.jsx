import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="relative min-h-screen w-full flex justify-end items-center " style={{background: "linear-gradient(58deg, #FC99C5 0%, #FC6791 12.62%, #FB4F4F 25.24%, #FF6501 37.85%, #F91 50.47%)"}}>
      <img
        src="/fire_bg.png"
        alt="Fire Bg"
        className="absolute right-0 top-0 h-screen w-full lg:w-11/12 xl:w-4/5"
      />

      <div className="flex justify-end w-1/2  md:w-[450px] lg:w-[540px] xl:w-[630px] items-end flex-col gap-2.5 z-50 mr-10 lg:mr-16">
        <div className="flex flex-col-reverse sm:flex-row w-full justify-between">
          <div className="flex flex-col justify-end">
            <div
              className="header1"
              style={{
                background:
                  "linear-gradient(to top, #FC99C5, #FC6791 25%, #FB4F4F 50%, #FF6501 75%, #FF9911)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              ALERTECH
            </div>

            <div className="justify-start text-[#30343f] title3">
              TECHNOQUATRO
            </div>
          </div>
          <img
            src="/logo.png"
            alt="ALERTECH LOGO"
            className=" w-[100px] md:w-[140px] lg:w-auto"
          />
        </div>

        <div class=" text-[#30343f] text-xs text-justify text font-normal font-['IBM_Plex_Sans']">
          This project focuses on real-time fire and gas leak detection using
          ESP32 and Firebase. By integrating IoT sensors, a mobile app, and a
          web dashboard, we ensure instant alerts to users and fire stations,
          even triggering an automated call if necessary.
        </div>
        <div className="flex w-full mt-1 md:mt-3 lg:mt-5">
          <Link to="/dashboard">
            <button className="button2 text-center cursor-pointer justify-center text-white text-xs">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

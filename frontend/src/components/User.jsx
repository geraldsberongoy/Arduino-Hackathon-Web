import React from "react";
import Table from "./ui/Table";
import { SlidersHorizontal } from "lucide-react";

const User = () => {
  return (
    <div className="h-screen w-full flex flex-col px-5 py-2">
      <h1 className="text-5xl font-bold font-['IBM_Plex_Sans'] text-[#30343f]">
        User
      </h1>
      <div className=" justify-start text-[#fc6791] text-base font-normal font-['IBM_Plex_Sans']">
        Lorem ipsum dolor sit amet
      </div>
      <div className="w-full flex items-center justify-end pt-10 pb-2">
        <div className="w-[300px] h-10 px-5 bg-white rounded-[50px] outline-1 outline-offset-[-1px] outline-[#7a7a7a] inline-flex justify-start items-center gap-[3px] overflow-hidden">
          <input
            type="text"
            placeholder="Search"
            className="w-full h-full bg-transparent text-[#7a7a7a] text-base font-normal font-['IBM_Plex_Sans'] outline-none"
          />
          <SlidersHorizontal size={20} color="#7a7a7a" />
        </div>
      </div>

      <Table />

      <div className="w-full h-10 flex px-5 mt-2">
        <div className="flex items-center gap-2 w-full">
          <div className="w-5 h-5 bg-[#33bc85] rounded-full shadow-[2px_2px_4px_0px_rgba(255,255,255,1.00)]" />
          <div className="w-full justify-center">
            <span class="text-[#30343f] text-lg font-bold font-['IBM_Plex_Sans']">
              Total Safe Users
            </span>
            <span class="text-[#30343f] text-lg font-normal font-['IBM_Plex_Sans']">
              {" "}
              = X
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3 w-full">
          <div className="w-5 h-5 bg-[#ff9911] rounded-full shadow-[2px_2px_4px_0px_rgba(255,255,255,1.00)]" />
          <div className="w-full justify-center">
            <span class="text-[#30343f] text-lg font-bold font-['IBM_Plex_Sans']">
              Total Warning Users
            </span>
            <span class="text-[#30343f] text-lg font-normal font-['IBM_Plex_Sans']">
              {" "}
              = X
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3 w-full">
          <div className="w-5 h-5 bg-[#fb4f4f] rounded-full shadow-[2px_2px_4px_0px_rgba(255,255,255,1.00)]" />{" "}
          <div className="w-full justify-center">
            <span class="text-[#30343f] text-lg font-bold font-['IBM_Plex_Sans']">
              Total Critical Users
            </span>
            <span class="text-[#30343f] text-lg font-normal font-['IBM_Plex_Sans']">
              {" "}
              = X
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3 w-full">
          <div className="w-full justify-center">
            <span class="text-[#30343f] text-lg font-bold font-['IBM_Plex_Sans']">
              Last System Update
            </span>
            <span class="text-[#30343f] text-lg font-normal font-['IBM_Plex_Sans']">
              {" "}
              = 7:31PM
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;

import React from "react";
import Table from "./ui/Table";
import SearchBar from "./ui/Search";
import { SlidersHorizontal, Search } from "lucide-react";

const User = () => {
  const handleSearch = (query) => {
    console.log("Search query:", query);
    // Implement your search logic here
  };

  return (
    <div className="h-screen w-full flex flex-col px-10 py-5">
      <h1 className="text-5xl font-bold font-['IBM_Plex_Sans'] text-[#30343f]">
        Users
      </h1>
      <div className=" justify-start text-[#fc6791] text-base font-normal font-['IBM_Plex_Sans']">
        Monitor user fire risk statuses and details
      </div>

      <div className="w-full flex mt-2 gap-5 ">
        <div className="flex items-center gap-2 w-full bg-[#fb4f4f]/75 rounded-xl shadow-[4px_4px_4px_0px_rgba(255,255,255,1.00)] p-5">
          <div className="flex items-start justify-start h-full pt-1">
            <div className="w-5 h-5 bg-[#33bc85] rounded-full shadow-[2px_2px_4px_0px_rgba(255,255,255,1.00)]" />
          </div>
          <div className="w-full justify-center flex flex-col">
            <span className="text-white text-lg font-bold font-['IBM_Plex_Sans']">
              Total Safe Users
            </span>
            <p>X</p>
          </div>
        </div>

        <div className="flex items-center gap-3 w-full  bg-[#fb4f4f]/75 rounded-xl shadow-[4px_4px_4px_0px_rgba(255,255,255,1.00)] p-5">
          <div className="flex items-start justify-start h-full pt-1">
            <div className="w-5 h-5 bg-[#ff9911] rounded-full shadow-[2px_2px_4px_0px_rgba(255,255,255,1.00)]" />
          </div>
          <div className="w-full justify-center flex flex-col">
            <span className="text-white text-lg font-bold font-['IBM_Plex_Sans']">
              Total Warning Users
            </span>
            <p>Y</p>
          </div>
        </div>

        <div className="flex items-center gap-3 w-full  bg-[#fb4f4f]/75 rounded-xl shadow-[4px_4px_4px_0px_rgba(255,255,255,1.00)] p-5">
          <div className="flex items-start justify-start h-full pt-1">
            <div className="w-5 h-5 bg-[#fb4f4f] rounded-full shadow-[2px_2px_4px_0px_rgba(255,255,255,1.00)]" />
          </div>
          <div className="w-full justify-center  flex flex-col">
            <span className="text-white text-lg font-bold font-['IBM_Plex_Sans']">
              Total Critical Users
            </span>
            <p>Z</p>
          </div>
        </div>

        <div className="flex items-center gap-3 w-full  bg-[#fb4f4f]/75 rounded-xl shadow-[4px_4px_4px_0px_rgba(255,255,255,1.00)] p-5">
          <div className="w-full justify-center flex flex-col">
            <span className="text-white text-lg font-bold font-['IBM_Plex_Sans']">
              Last System Update
            </span>
            <p>9:09 PM</p>
          </div>
        </div>
      </div>

      <div className="w-full flex items-center justify-between pt-10 pb-2">
        <SearchBar onSearch={handleSearch} />

        <div className="w-[180px] h-10 px-5 bg-white rounded-[50px] outline outline-offset-[-1px] outline-[#7a7a7a] inline-flex justify-start items-center gap-[3px] overflow-hidden">
          <select className="w-full h-full bg-transparent text-[#7a7a7a] text-base font-normal font-['IBM_Plex_Sans'] outline-none">
            <option value="default" disabled selected>
              Filter by Status
            </option>
            <option value="location">Location</option>
            <option value="temperature">Temperature</option>
            <option value="status">Status</option>
            <option value="lastUpdate">Last Update</option>
          </select>
        </div>
      </div>

      <Table />
    </div>
  );
};

export default User;

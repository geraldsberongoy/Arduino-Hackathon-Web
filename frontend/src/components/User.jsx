import React, { useState } from "react";
import Table from "./ui/Table";
import SearchBar from "./ui/Search";
import FilterDropdown from "./ui/FilterDropdown";
import users from "../data/users.json"; // Sample data

const User = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("all");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const countSafeUsers = () => {
    return users.filter((user) => user.status.toLowerCase() === "safe").length;
  };

  const countWarningUsers = () => {
    return users.filter((user) => user.status.toLowerCase() === "warning")
      .length;
  };

  const countCriticalUsers = () => {
    return users.filter((user) => user.status.toLowerCase() === "critical")
      .length;
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
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
            <p>{countSafeUsers()}</p>
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
            <p>{countWarningUsers()}</p>
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
            <p>{countCriticalUsers()}</p>
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
        <FilterDropdown onChange={handleFilterChange} />
      </div>

      <Table users={users} searchQuery={searchQuery} filter={filter} />
    </div>
  );
};

export default User;
import React from "react";
import { SlidersHorizontal } from "lucide-react";

const SortDropdown = ({ onChange }) => {
  return (
    <div className="relative w-[200px] h-10 px-5 bg-white rounded-[50px] outline outline-offset-[-1px] outline-[#7a7a7a] inline-flex justify-start items-center gap-[3px] overflow-hidden">
      <SlidersHorizontal
        className="absolute right-5 text-[#7a7a7a] z-0"
        size={20}
      />

      <select
        className="w-full h-full bg-transparent text-[#7a7a7a] px-2 text-base font-normal font-['IBM_Plex_Sans'] outline-none appearance-none z-10"
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="" disabled selected>
          Sort By
        </option>
        <option value="default">Default</option>
        <option value="name">Name</option>
        <option value="location">Location</option>
        <option value="temperatureLevel">Temperature Level</option>
        <option value="status">Status</option>
        <option value="lastUpdate">Last Update</option>
      </select>
    </div>
  );
};

export default SortDropdown;

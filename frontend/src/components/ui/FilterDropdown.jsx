import React from "react";
import { Filter } from "lucide-react";

const FilterDropdown = ({ onChange }) => {
  return (
    <div className="relative w-[180px] h-10 px-5 bg-white rounded-[50px] outline outline-offset-[-1px] outline-[#7a7a7a] inline-flex justify-start items-center gap-[3px] overflow-hidden">
      <Filter className="absolute right-5 text-[#7a7a7a] z-0" size={20} />
      <select
        className="w-full h-full bg-transparent text-[#7a7a7a] px-2 text-base font-normal font-['IBM_Plex_Sans'] outline-none appearance-none z-10"
        onChange={onChange}
      >
        <option value="dafault" disabled selected>
          Filter by Status
        </option>
        <option value="all">All</option>
        <option value="safe">Safe</option>
        <option value="warning">Warning</option>
        <option value="critical">Critical</option>
      </select>
    </div>
  );
};

export default FilterDropdown;

import React, { useState } from "react";
import { Search as SearchIcon } from "lucide-react";

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="w-[350px] h-10 px-5 bg-white rounded-[50px] outline-1 outline-offset-[-1px] outline-[#7a7a7a] inline-flex justify-start items-center gap-[3px] overflow-hidden">
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={handleInputChange}
        className="w-full h-full bg-transparent text-[#7a7a7a] text-base font-normal font-['IBM_Plex_Sans'] outline-none"
      />
      <SearchIcon size={20} color="#7a7a7a" />
    </div>
  );
};

export default Search;

import React, { useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebaseConfig"; // Adjust path to your firebase config
import Table from "./ui/Table";
import SearchBar from "./ui/Search";
import FilterDropdown from "./ui/FilterDropdown";
import SortDropdown from "./ui/SortDropdown";

const User = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("all");
  const [sortBy, setSortBy] = useState("");

  // Fetch users from Firestore on component mount and listen for real-time updates
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "user"), (snapshot) => {
      const fetchedUsers = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUsers(fetchedUsers);
    });

    // Cleanup listener on unmount
    return () => unsubscribe();
  }, []);

  // Handlers
  const handleSearch = (query) => setSearchQuery(query);
  const handleFilterChange = (event) => setFilter(event.target.value);
  const handleSortChange = (sortOption) => setSortBy(sortOption);

  // Counts
  const countSafeUsers = () =>
    users.filter((user) => user?.status?.toLowerCase() === "safe").length;

  const countWarningUsers = () =>
    users.filter((user) => user?.status?.toLowerCase() === "warning").length;

  const countCriticalUsers = () =>
    users.filter((user) => user?.status?.toLowerCase() === "critical").length;

  return (
    <div className="h-screen w-full flex flex-col px-10 py-5">
      <h1 className="text-5xl font-bold font-['IBM_Plex_Sans'] text-[#30343f]">
        Registered Users with Alertech Device
      </h1>
      <div className="justify-start text-[#fc6791] text-base font-normal font-['IBM_Plex_Sans']">
        Monitor user fire risk statuses and details
      </div>

      <div className="w-full flex mt-2 gap-5 ">
        {/* Safe Users */}
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

        {/* Warning Users */}
        <div className="flex items-center gap-3 w-full bg-[#fb4f4f]/75 rounded-xl shadow-[4px_4px_4px_0px_rgba(255,255,255,1.00)] p-5">
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

        {/* Critical Users */}
        <div className="flex items-center gap-3 w-full bg-[#fb4f4f]/75 rounded-xl shadow-[4px_4px_4px_0px_rgba(255,255,255,1.00)] p-5">
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

        {/* Last System Update (example placeholder) */}
        <div className="flex items-center gap-3 w-full bg-[#fb4f4f]/75 rounded-xl shadow-[4px_4px_4px_0px_rgba(255,255,255,1.00)] p-5">
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
        <div className="flex gap-2">
          <FilterDropdown onChange={handleFilterChange} />
          <SortDropdown onChange={handleSortChange} />
        </div>
      </div>

      <Table
        users={users}
        searchQuery={searchQuery}
        filter={filter}
        sortBy={sortBy}
      />
    </div>
  );
};

export default User;

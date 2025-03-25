import React, { useState } from "react";
import UserModal from "./UserModal";

const Table = ({ users, searchQuery, filter, sortBy }) => {
  const [selectedUser, setSelectedUser] = useState(null);

  const filteredUsers = users
    .filter((user) => {
      const matchesSearchQuery = user?.username
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesFilter =
        filter === "all" || user.status.toLowerCase() === filter;
      return matchesSearchQuery && matchesFilter;
    })
    .sort((a, b) => {
      if (!sortBy) return 0;
      if (sortBy === "lastUpdate") {
        return new Date(b.lastUpdate) - new Date(a.lastUpdate);
      }
      if (a[sortBy] < b[sortBy]) return -1;
      if (a[sortBy] > b[sortBy]) return 1;
      return 0;
    });

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "safe":
        return "bg-[#33bc85]/50 ";
      case "warning":
        return "bg-[#ff9911]/50";
      case "critical":
        return "bg-[#fb4f4f]/50";
      default:
        return "";
    }
  };

  const handleRowClick = (user) => {
    setSelectedUser(user);
  };

  const handleCloseModal = () => {
    setSelectedUser(null);
  };

  return (
    <div className="relative flex-1 w-full overflow-x-auto border rounded-2xl border-base-300 text-black bg-white/60">
      <table className="table">
        {/* head */}
        <thead>
          <tr className="bg-white text-black">
            <th>Name</th>
            <th>Location</th>
            <th>Temperature Level</th>
            <th>Status</th>
            <th>Last Update</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center">
                No users found
              </td>
            </tr>
          ) : (
            filteredUsers.map((user, index) => (
              <tr
                key={index}
                className={`${getStatusColor(
                  user.status
                )} outline-1 cursor-pointer hover:bg-gray-200/80`}
                onClick={() => handleRowClick(user)}
              >
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={user.avatar || '/avatar.png'} alt={`Avatar of ${user.name}`} className="w-16 h-16" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.name}</div>
                    </div>
                  </div>
                </td>
                <td>{user?.address}</td>
                <td>{user?.temperature}°C</td>
                <td className="capitalize">{user?.status}</td>
                <td>{user?.lastUpdate}</td>
              </tr>
            ))
          )}
        </tbody>
        {/* foot */}
        <tfoot></tfoot>
      </table>

      {selectedUser && (
        <UserModal user={selectedUser} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default Table;

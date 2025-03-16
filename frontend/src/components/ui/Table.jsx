import React from "react";

const Table = ({ users, searchQuery, filter }) => {
  const filteredUsers = users.filter((user) => {
    const matchesSearchQuery = user.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filter === "all" || user.status.toLowerCase() === filter;
    return matchesSearchQuery && matchesFilter;
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

  return (
    <div className="flex-1 w-full overflow-x-auto border rounded-2xl border-base-300 text-black bg-white/60">
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
                className={`${getStatusColor(user.status)} outline-1`}
              >
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={user.avatar} alt={`Avatar of ${user.name}`} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.name}</div>
                    </div>
                  </div>
                </td>
                <td>{user.location}</td>
                <td>{user.temperatureLevel}</td>
                <td>{user.status}</td>
                <td>{user.lastUpdate}</td>
              </tr>
            ))
          )}
        </tbody>
        {/* foot */}
        <tfoot></tfoot>
      </table>
    </div>
  );
};

export default Table;
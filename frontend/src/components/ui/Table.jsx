import React from "react";

const users = [
  {
    name: "Hart Hagerty",
    location: "United States",
    temperatureLevel: "Normal",
    status: "Safe",
    lastUpdate: "2025-03-15",
    avatar: "https://img.daisyui.com/images/profile/demo/2@94.webp",
  },
  {
    name: "Brice Swyre",
    location: "China",
    temperatureLevel: "High",
    status: "Warning",
    lastUpdate: "2025-03-14",
    avatar: "https://img.daisyui.com/images/profile/demo/3@94.webp",
  },
  {
    name: "Marjy Ferencz",
    location: "Russia",
    temperatureLevel: "Low",
    status: "Safe",
    lastUpdate: "2025-03-13",
    avatar: "https://img.daisyui.com/images/profile/demo/4@94.webp",
  },
  {
    name: "Yancy Tear",
    location: "Brazil",
    temperatureLevel: "Normal",
    status: "Critical",
    lastUpdate: "2025-03-12",
    avatar: "https://img.daisyui.com/images/profile/demo/5@94.webp",
  },
  {
    name: "Hart Hagerty",
    location: "United States",
    temperatureLevel: "Normal",
    status: "Safe",
    lastUpdate: "2025-03-15",
    avatar: "https://img.daisyui.com/images/profile/demo/2@94.webp",
  },
  {
    name: "Brice Swyre",
    location: "China",
    temperatureLevel: "High",
    status: "Warning",
    lastUpdate: "2025-03-14",
    avatar: "https://img.daisyui.com/images/profile/demo/3@94.webp",
  },
  {
    name: "Marjy Ferencz",
    location: "Russia",
    temperatureLevel: "Low",
    status: "Safe",
    lastUpdate: "2025-03-13",
    avatar: "https://img.daisyui.com/images/profile/demo/4@94.webp",
  },
  {
    name: "Yancy Tear",
    location: "Brazil",
    temperatureLevel: "Normal",
    status: "Critical",
    lastUpdate: "2025-03-12",
    avatar: "https://img.daisyui.com/images/profile/demo/5@94.webp",
  },
];

const Table = () => {
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
          {users.map((user, index) => (
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
          ))}
        </tbody>
        {/* foot */}
        <tfoot></tfoot>
      </table>
    </div>
  );
};

export default Table;

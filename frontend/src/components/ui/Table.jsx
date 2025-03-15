import React from "react";

const users = [
  {
    name: "Hart Hagerty",
    location: "United States",
    temperatureLevel: "Normal",
    status: "Active",
    lastUpdate: "2025-03-15",
    avatar: "https://img.daisyui.com/images/profile/demo/2@94.webp",
  },
  {
    name: "Brice Swyre",
    location: "China",
    temperatureLevel: "High",
    status: "Inactive",
    lastUpdate: "2025-03-14",
    avatar: "https://img.daisyui.com/images/profile/demo/3@94.webp",
  },
  {
    name: "Marjy Ferencz",
    location: "Russia",
    temperatureLevel: "Low",
    status: "Active",
    lastUpdate: "2025-03-13",
    avatar: "https://img.daisyui.com/images/profile/demo/4@94.webp",
  },
  {
    name: "Yancy Tear",
    location: "Brazil",
    temperatureLevel: "Normal",
    status: "Active",
    lastUpdate: "2025-03-12",
    avatar: "https://img.daisyui.com/images/profile/demo/5@94.webp",
  },
];

const Table = () => {
  return (
    <div className="flex-1 w-full overflow-x-auto p-5 ">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Temperature Level</th>
            <th>Status</th>
            <th>Last Update</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index} className="hover:bg-base-300">
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

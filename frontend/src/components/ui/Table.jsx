import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for default marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const Table = ({ users, searchQuery, filter }) => {
  const [selectedUser, setSelectedUser] = useState(null);

  const filteredUsers = users.filter((user) => {
    const matchesSearchQuery = user.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesFilter =
      filter === "all" || user.status.toLowerCase() === filter;
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

      {selectedUser && (
        <div className="fixed inset-0 bg-black/80 bg-opacity-20 flex justify-center items-center z-10">
          <div className="bg-white py-8 px-12 rounded-2xl shadow-2xl relative w-2/3 flex">
            <div className="w-1/2 flex flex-col items-center">
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                onClick={handleCloseModal}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <img
                src={selectedUser.avatar}
                alt={`Avatar of ${selectedUser.name}`}
                className="mask mask-squircle h-32 w-32 mb-6 border-4 border-primary"
              />
              <h2 className="text-3xl font-bold mb-4 text-primary">
                {selectedUser.name}
              </h2>
              <p className="text-lg mb-2 text-secondary">
                Location: {selectedUser.location}
              </p>
              <p className="text-lg mb-2 text-secondary">
                Temperature Level: {selectedUser.temperatureLevel}
              </p>
              <p className="text-lg mb-2 text-secondary">
                Status: {selectedUser.status}
              </p>
              <p className="text-lg text-secondary">
                Last Update: {selectedUser.lastUpdate}
              </p>
            </div>
            <div className="w-1/2">
              <MapContainer
                center={[selectedUser.latitude, selectedUser.longitude]}
                zoom={13}
                style={{ height: "100%", width: "100%" }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker
                  position={[selectedUser.latitude, selectedUser.longitude]}
                >
                  <Popup>{selectedUser.name}'s location</Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Table;

import React from "react";
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

// Custom icons
const safeIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const warningIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const criticalIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const getStatusIcon = (status) => {
  switch (status.toLowerCase()) {
    case "safe":
      return safeIcon;
    case "warning":
      return warningIcon;
    case "critical":
      return criticalIcon;
    default:
      return L.Icon.Default;
  }
};

const UserModal = ({ user, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/80 bg-opacity-20 flex justify-center items-center z-10">
      <div className="bg-white py-8 px-12 rounded-2xl shadow-2xl relative w-2/3 flex">
        <div className="w-1/2 flex flex-col items-center">
          <button
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            onClick={onClose}
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
            src={user.avatar}
            alt={`Avatar of ${user.name}`}
            className="mask mask-squircle h-32 w-32 mb-6 border-4 border-primary"
          />
          <h2 className="text-3xl font-bold mb-4 text-primary">{user.name}</h2>
          <p className="text-lg mb-2 text-secondary">
            Location: {user.location}
          </p>
          <p className="text-lg mb-2 text-secondary">
            Temperature Level: {user.temperatureLevel}
          </p>
          <p className="text-lg mb-2 text-secondary">Status: {user.status}</p>
          <p className="text-lg text-secondary">
            Last Update: {user.lastUpdate}
          </p>
        </div>
        <div className="w-1/2">
          <MapContainer
            center={[user.latitude, user.longitude]}
            zoom={13}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker
              position={[user.latitude, user.longitude]}
              icon={getStatusIcon(user.status)}
            >
              <Popup>{user.name}'s location</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default UserModal;

import React from "react";
import { X } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { getStatusIcon } from "../../utils/iconUtils";
import L from "leaflet";

// Fix for default marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const UserModal = ({ user, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/80 bg-opacity-20 flex justify-center items-center z-10">
      <div className="bg-white py-8 px-12 rounded-2xl shadow-2xl relative w-2/3 flex">
        <div className="w-1/2 flex flex-col items-center">
          <button
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 cursor-pointer"
            onClick={onClose}
          >
            <X size={24} />
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
            Temperature Level: {user.temperature}°C
          </p>
          <p className="text-lg mb-2 text-secondary">Status: {user.status}</p>
          <p className="text-lg text-secondary">
            Last Update: {user.lastUpdate}
          </p>
        </div>
        <div className="w-1/2">
          <MapContainer
            center={[user.geolocation.latitude, user.geolocation.longitude]}
            zoom={100}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker
              position={[user.geolocation.latitude, user.geolocation.longitude]}
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

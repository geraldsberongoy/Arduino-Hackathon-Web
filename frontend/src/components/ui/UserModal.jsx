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
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-10">
      <div className="bg-white/20 border-1 border-white backdrop-blur-xs p-12 rounded-xl shadow-2xl w-2/3 flex">
        <div className="w-1/2 flex flex-col items-center">
          <button
            className="absolute top-4 right-4 text-white hover:text-slate-700 hover:scale-140 duration-300 cursor-pointer"
            onClick={onClose}
          >
            <X size={24} />
          </button>
          <img
            src={user?.avatar || "/avatar.png"}
            alt={`Avatar of ${user?.username}`}
            className="h-16 w-16 mb-6 mask mask-squircle "
          />
          <h2 className="text-3xl font-bold mb-4 text-white">{user?.username}</h2>
          <p className="text-lg mb-2 text-white text-truncate max-w-[300px]">
            Location: {user?.address}
          </p>
          <p className="text-lg mb-2 text-white text-truncate max-w-[300px]">
            Contact Number: {user?.contactNumber}
          </p>
          <p className="text-lg mb-2 text-white">
            Temperature Level: {user?.temperature}°C
          </p>
          <p className="text-lg mb-2 text-white">
            MQ2 Level: {user?.mq2}
          </p>
          <p className="text-lg mb-2 text-white capitalize">Status: {user.status}</p>
          <p className="text-lg text-white">
            Last Update: {user?.lastUpdate}
          </p>
        </div>
        <div className="w-1/2">
          <MapContainer
            center={[user.geolocation.latitude, user.geolocation.longitude]}
            zoom={100}
            style={{ height: "100%", width: "100%", borderRadius: "1rem", border: "100px" }}
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

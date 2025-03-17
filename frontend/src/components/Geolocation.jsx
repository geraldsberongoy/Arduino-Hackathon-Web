import React, { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  ZoomControl,
} from "react-leaflet";
import StaticCard from "./ui/StaticCard";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { getStatusIcon } from "../utils/iconUtils";
import users from "../data/users.json"; // Sample data

// Fix for default marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const Geolocation = () => {
  return (
    <div className="relative w-full h-screen flex ">
      <div className="absolute top-2 right-4 z-10">
        <StaticCard />
      </div>

      <MapContainer
        center={[14.6081418, 121.087403]}
        zoom={10}
        style={{ height: "100%", width: "100%", zIndex: 0 }}
        zoomControl={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {users.map((user) => (
          <Marker
            key={user.id}
            position={[user.geolocation.latitude, user.geolocation.longitude]}
            icon={getStatusIcon(user.status)}
          >
            <Popup className="">
              {user.name} is {user.status}.
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Geolocation;

import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import PopupComp from "./ui/Popup";
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

const Geolocation = () => {
  const position = [14.61644, 121.05405]; // Default position (latitude, longitude)

  return (
    <div className="relative w-full h-screen flex ">
      <div className="absolute top-2 right-4 z-10">
        <PopupComp
          temperature={25}
          date="2025-03-15"
          lastUpdate="2025-03-15"
          status="critical"
        />
      </div>

      <MapContainer
        center={position}
        zoom={30}
        style={{ height: "100%", width: "100%", zIndex: 0 }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Geolocation;

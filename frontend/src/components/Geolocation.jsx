import React from "react";
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

// Fix for default marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

// Create a custom icon using an SVG
const customIcon = L.icon({
  iconUrl:
    "data:image/svg+xml,%0A%3Csvg%20width%3D%2284%22%20height%3D%22111%22%20viewBox%3D%220%200%2084%20111%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20id%3D%22Location%22%3E%0A%3Cg%20id%3D%22Ellipse%205%22%20filter%3D%22url(%23filter0_di_248_399)%22%3E%0A%3Cpath%20d%3D%22M80%2038.0074C80%2062.3321%2042%20103%2042%20103C42%20103%204%2062.3321%204%2038.0074C4%2017.0165%2021.0132%200%2042%200C62.9868%200%2080%2017.0165%2080%2038.0074ZM27.7748%2038.0074C27.7748%2045.8652%2034.1437%2052.2353%2042%2052.2353C49.8563%2052.2353%2056.2252%2045.8652%2056.2252%2038.0074C56.2252%2030.1495%2049.8563%2023.7795%2042%2023.7795C34.1437%2023.7795%2027.7748%2030.1495%2027.7748%2038.0074Z%22%20fill%3D%22%2334BC85%22%2F%3E%0A%3C%2Fg%3E%0A%3Cg%20id%3D%22Ellipse%207%22%20filter%3D%22url(%23filter1_i_248_399)%22%3E%0A%3Cpath%20d%3D%22M80%2038.0074C80%2062.3321%2042%20103%2042%20103C42%20103%204%2062.3321%204%2038.0074C4%2017.0165%2021.0132%200%2042%200C62.9868%200%2080%2017.0165%2080%2038.0074ZM27.7748%2038.0074C27.7748%2045.8652%2034.1437%2052.2353%2042%2052.2353C49.8563%2052.2353%2056.2252%2045.8652%2056.2252%2038.0074C56.2252%2030.1495%2049.8563%2023.7795%2042%2023.7795C34.1437%2023.7795%2027.7748%2030.1495%2027.7748%2038.0074Z%22%20fill%3D%22%2334BC85%22%2F%3E%0A%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3Cfilter%20id%3D%22filter0_di_248_399%22%20x%3D%220%22%20y%3D%220%22%20width%3D%2284%22%20height%3D%22111%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%0A%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%0A%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22%2F%3E%0A%3CfeOffset%20dy%3D%224%22%2F%3E%0A%3CfeGaussianBlur%20stdDeviation%3D%222%22%2F%3E%0A%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22out%22%2F%3E%0A%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.25%200%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22effect1_dropShadow_248_399%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22effect1_dropShadow_248_399%22%20result%3D%22shape%22%2F%3E%0A%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22%2F%3E%0A%3CfeOffset%20dy%3D%224%22%2F%3E%0A%3CfeGaussianBlur%20stdDeviation%3D%222%22%2F%3E%0A%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22arithmetic%22%20k2%3D%22-1%22%20k3%3D%221%22%2F%3E%0A%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%200.988235%200%200%200%200%200.403922%200%200%200%200%200.568627%200%200%200%201%200%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22shape%22%20result%3D%22effect2_innerShadow_248_399%22%2F%3E%0A%3C%2Ffilter%3E%0A%3Cfilter%20id%3D%22filter1_i_248_399%22%20x%3D%222%22%20y%3D%220%22%20width%3D%2278%22%20height%3D%22104%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%0A%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22shape%22%2F%3E%0A%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22%2F%3E%0A%3CfeOffset%20dx%3D%22-2%22%20dy%3D%221%22%2F%3E%0A%3CfeGaussianBlur%20stdDeviation%3D%221%22%2F%3E%0A%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22arithmetic%22%20k2%3D%22-1%22%20k3%3D%221%22%2F%3E%0A%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%201%200%200%200%200%201%200%200%200%200%201%200%200%200%201%200%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22shape%22%20result%3D%22effect1_innerShadow_248_399%22%2F%3E%0A%3C%2Ffilter%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E%0A",
  iconSize: [38, 38], // Size of the icon
  iconAnchor: [19, 38], // Point of the icon which will correspond to marker's location
  popupAnchor: [0, -38], // Point from which the popup should open relative to the iconAnchor
});

const Geolocation = () => {
  const position = [14.61644, 121.05405]; // Default position (latitude, longitude)

  return (
    <div className="relative w-full h-screen flex ">
      <div className="absolute top-2 right-4 z-10">
        <StaticCard
        />
      </div>

      <MapContainer
        center={position}
        zoom={30}
        style={{ height: "100%", width: "100%", zIndex: 0 }}
        zoomControl={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position} icon={customIcon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Geolocation;

# Alertech Web
---
## Overview

Alertech is an integrated fire detection and alert system composed of a mobile app, a website, and an IoT device. It enables real-time monitoring of temperature, humidity, and smoke levels, and provides instant alerts to users and fire authorities in case of a fire.


## Demo
Deployed Link: https://alertech-firestation-dashboard.vercel.app/

## Related Repositories
- 🌐 [Alertech Mobile App](https://github.com/DavidBatoDev/alertech-mobile-app) — The web dashboard for fire stations to monitor and respond to emergencies.
- 🔥 [Alertech FCM API](https://github.com/DavidBatoDev/alertech-fcm-api) — The API for the FCM to send Notifications to all mobile app for users and neighbors to monitor alerts in real-time.
- ⚙️ [Alertech IoT Device Code](https://github.com/DavidBatoDev/alertech-iot-device) — The ESP32 code for reading sensor data and sending alerts via Firebase.

---


## System Overview
### Mobile App (For Users and Neighbors)

- Monitor home environment (temperature, humidity, smoke) in real time.
- Receive alerts when a fire is detected nearby.
- Users without the IoT device can still receive alerts if a neighbor's device detects a fire.

### Website (For Fire Authority)

- Displays geolocation of all users with devices.
- Provides access to a user database containing contact information and addresses.
- Allows monitoring of temperature, smoke, and humidity levels in real time.
- Monitor and respond to fire alerts.

### IoT Device

- Built with ESP32, DHT22 (for temperature and humidity), and MQ-2 (for smoke detection).
- Detects temperature, humidity, and smoke levels.
- Sends alerts to both the user and fire station via Firebase Cloud Messaging (FCM).
- Updates real-time data to Firebase, accessible through mobile and web apps.

---

## Technology Stack

- **Mobile App:** React Native CLI with Firebase integration.
- **Web App:** React with Firebase for real-time monitoring.
- **IoT Device:** ESP32 with DHT22 and MQ-2 sensors, integrated with Firebase.
- **Cloud:** Firebase for authentication, database, and notifications.
---

## Installation & Setup

1. Clone the repository:
	```sh
	git clone https://github.com/geraldsberongoy/Arduino-Hackathon-Web.git
	cd frontend
	```
2. Install Dependencies: 
   ```sh
   npm install
   ```
3. Run the development server:
```sh
npm run dev
```


---

## How It Works

### ESP32 Monitors the Environment

- Reads smoke levels and temperature.
- Sends data to Firebase in real-time.

### Instant Notifications to Users, Neighbors, & Fire Stations

- Mobile app receives alerts via Firebase Cloud Messaging (FCM).
- Neighbors receive alerts if a nearby device detects danger.
- Web dashboard updates instantly.

---

## License
This project includes components licensed under different open-source licenses:  

| Library  | License                                                                             |
| -------- | ----------------------------------------------------------------------------------- |
| React    | [MIT License](https://opensource.org/licenses/MIT)                                  |
| Tailwind | [Tailwind License](https://github.com/tailwindlabs/tailwindcss/blob/master/LICENSE) |
| Leaflet  | [BSD 2-Clause License](https://opensource.org/licenses/BSD-2-Clause)                |

# Alertech 🚨🔥
---
## Description  
Alertech is a real-time fire and gas leak detection system utilizing **ESP32** and **Firebase**. By integrating **IoT sensors**, a **mobile app**, and a **web dashboard**, the system ensures **instant alerts** to users and fire stations, even triggering an **automated emergency call** if necessary.

**Website:** [Insert Link Here]

**Mobile:** [Insert Link here]

---
## Screenshots
![Dashboard Preview](insert-image-link-here)


---
## Tech Stack

### **Embedded Development**
- **Language:** C/C++
- **Platform:** Arduino IDE
- **Data Communication:** HTTP (via Firebase & Alerto PH API)
### **Frontend**
- **Web (React, Vite, Tailwind, LeafletJS)**
    - Web Dashboard (Next.js + Firebase)
    - Admin Panel for Fire Station Authorities
    - Real-time Sensor Monitoring
- **Mobile (Next.js)**
    - Sensor Dashboard with Live Data
    - Emergency Call Trigger
    - Integration with Alerto PH API

### **Cloud & Communication**
- **Firebase Realtime Database** (Stores sensor data)
- **Firebase Cloud Functions** (Handles alerts & call triggers)
- **Twilio/Vonage API** (Automated calls to unresponsive users)

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

1. **ESP32 Monitors the Environment**
    - Reads smoke levels and temperature.
    - Sends data to Firebase in real-time.
    - Users can trigger emergency calls when critical smoke levels are detected.
2. **Instant Notifications to Users & Fire Stations**
    - Mobile app receives alerts via Firebase Cloud Messaging (FCM).
    - Web dashboard updates instantly.

---

## License
This project includes components licensed under different open-source licenses:  

| Library  | License                                                                             |
| -------- | ----------------------------------------------------------------------------------- |
| React    | [MIT License](https://opensource.org/licenses/MIT)                                  |
| Tailwind | [Tailwind License](https://github.com/tailwindlabs/tailwindcss/blob/master/LICENSE) |
| Leaflet  | [BSD 2-Clause License](https://opensource.org/licenses/BSD-2-Clause)                |

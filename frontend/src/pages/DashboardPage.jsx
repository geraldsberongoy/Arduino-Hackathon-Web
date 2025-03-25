import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Geolocation from "../components/Geolocation";
import User from "../components/User";
import Logs from "../components/Logs";
import users from "../data/users";
import AlertModal from "../components/ui/AlertModal";
import { onSnapshot, collection } from "firebase/firestore";
import { db } from "../firebaseConfig";

const DashboardPage = () => {
  const [selectedComponent, setSelectedComponent] = useState("geolocation");

  const [showAlert, setShowAlert] = useState(false);
  const [criticalUser, setCriticalUser] = useState(null);
  const [audio] = useState(new Audio("/alert.mp3"));

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'user'), (snapshot) => {
      const users = snapshot.docs.map((doc) => doc.data());
      const criticalUser = users.find((user) => user.status === 'critical');
  
      if (criticalUser) {
        setCriticalUser(criticalUser);
        setShowAlert(true);
        audio.loop = true;
        audio.play();
      }
    });
  
    return () => unsubscribe();
  }, []);

  const handleCloseAlert = () => {
    setShowAlert(false);
    audio.pause();
    audio.currentTime = 0; // Reset the audio to the beginning
  };

  const renderContent = () => {
    switch (selectedComponent) {
      case "geolocation":
        return <Geolocation users={users} />;
      case "user":
        return <User users={users} />;
      case "logs":
        return <Logs users={users} />;
      default:
        return <Geolocation users={users} />;
    }
  };

  return (
    <div className="min-h-screen w-full flex">
      <Sidebar onSelect={setSelectedComponent} />
      <div className="flex-grow flex justify-center items-center bg-[#ffd9da]">
        {renderContent()}
      </div>
      <AlertModal
        show={showAlert}
        onClose={handleCloseAlert}
        user={criticalUser}
      />
    </div>
  );
};

export default DashboardPage;

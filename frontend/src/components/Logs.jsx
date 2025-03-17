import React, { useState, useEffect } from "react";
import logData from "../data/logs.json";
import LogPanel from "./LogPanel";

const Logs = () => {
  const [logs, setLogs] = useState([]);
  const [filteredLogs, setFilteredLogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("All");
  const [filterResponse, setFilterResponse] = useState("All");

  useEffect(() => {
    // Set the logs from the imported JSON file
    setLogs(logData);
    setFilteredLogs(logData);
  }, []);

  useEffect(() => {
    // Apply filters
    let results = logs;
    
    // Apply search term
    if (searchTerm) {
      results = results.filter(log => 
        log.deviceId.toLowerCase().includes(searchTerm.toLowerCase()) ||
        log.eventType.toLowerCase().includes(searchTerm.toLowerCase()) ||
        log.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Apply event type filter
    if (filterType !== "All") {
      results = results.filter(log => log.eventType === filterType);
    }
    
    // Apply response filter
    if (filterResponse !== "All") {
      results = results.filter(log => log.userResponse === filterResponse);
    }
    
    setFilteredLogs(results);
  }, [searchTerm, filterType, filterResponse, logs]);

  // Format date from ISO string
  const formatDate = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Get event type color
  const getEventTypeColor = (eventType) => {
    const colors = {
      "Fire Alert": "bg-red-500",
      "High Temp Warning": "bg-orange-500",
      "Geolocation Update": "bg-blue-500",
      "System Restarted": "bg-green-500",
      "Malfunction": "bg-purple-500"
    };
    return colors[eventType] || "bg-gray-500";
  };

  // Get response status color
  const getResponseStatusColor = (status) => {
    return status === "Acknowledged" ? "text-green-500" : "text-orange-500";
  };

  // Get unique event types for filter dropdown
  const eventTypes = ["All", ...new Set(logs.map(log => log.eventType))];

  return (
    <div className="flex flex-col w-full h-full bg- shadow-lg bg-[#fdc9c2] overflow-hidden p-10 gap-5">
      <h1 className="text-5xl font-bold font-['IBM_Plex_Sans'] text-[#30343f]">
        Users
      </h1>
      <div className=" justify-start text-[#774956] text-base font-normal font-['IBM_Plex_Sans']">
        Monitor user fire risk statuses and details
      </div>
      {/* Filter Bar */}
      <div className="flex flex-row items-center justify-between p-4 bg-[#FFD9DA] border-b rounded-2xl shadow-lg">
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search logs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border text-black rounded-full w-64 focus:outline-none focus:ring-black"
            />
            <svg className="w-5 h-5 absolute left-3 top-2.5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
          
          {/* Event Type Filter */}
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="px-4 py-2 border text-black rounded-full focus:outline-none focus:ring-black"
          >
            {eventTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
          
          {/* Response Filter */}
          <select
            value={filterResponse}
            onChange={(e) => setFilterResponse(e.target.value)}
            className="px-4 py-2 border text-black rounded-full focus:outline-none focus:ring-black"
          >
            <option value="All">All Responses</option>
            <option value="Acknowledged">Acknowledged</option>
            <option value="Pending">Pending</option>
          </select>
        </div>
        
        <div className="text-gray-500 font-semibold">
          {filteredLogs.length} {filteredLogs.length === 1 ? 'result' : 'results'}
        </div>
      </div>
      
      {/* Log Panel */}
      <LogPanel 
        logs={filteredLogs} 
        formatDate={formatDate} 
        getEventTypeColor={getEventTypeColor} 
        getResponseStatusColor={getResponseStatusColor} 
      />
    </div>
  );
};

export default Logs;
import React from "react";

const LogPanel = ({ logs, formatDate, getEventTypeColor, getResponseStatusColor }) => {
  return (
    <div className="flex-1 overflow-auto rounded-2xl">
      <table className="min-w-full divide-y divide-gray-200 [#FFD9DA]">
        <thead className="bg-gradient-to-r from-[#F91] via-[#FF6501] to-[#F91] sticky top-0 ">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Time</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Device ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Event Type</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Location</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Sensor Data</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Action</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Response</th>
          </tr>
        </thead>
        <tbody className="bg-[#FFD9DA] divide-y divide-gray-200">
          {logs.length > 0 ? (
            logs.map((log, index) => (
              <tr key={index} className="hover:bg-gray-50 border-y-black">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                  {formatDate(log.timestamp)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {log.deviceId}
                </td>
                <td className="p-4 whitespace-nowrap">
                  <span className={`p-2 inline-flex leading-5 font-semibold rounded-full text-white ${getEventTypeColor(log.eventType)}`}>
                    {log.eventType}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-black">
                  {log.location}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-black">
                  {log.sensor ? (
                    <div className="flex flex-col">
                      <span>Temp: {log.sensor.temp !== null ? `${log.sensor.temp}°F` : "N/A"}</span>
                      <span>RH: {log.sensor.RH !== null ? `${log.sensor.RH}%` : "N/A"}</span>
                      <span>Smoke: {log.sensor.smoke || "N/A"}</span>
                    </div>
                  ) : (
                    "No sensor data"
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-black">
                  {log.action}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-xs">
                  <span className={`font-semibold ${getResponseStatusColor(log.userResponse)}`}>
                    {log.userResponse}
                  </span>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="px-6 py-8 text-center text-gray-500">
                No logs found matching your criteria
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default LogPanel;
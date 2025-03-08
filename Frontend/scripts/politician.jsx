import React, { useState } from "react";

const PoliticianDashboard = () => {
  const [achievements, setAchievements] = useState([]);

  const handleUpload = () => {
    // Dummy function to simulate uploading an achievement
    setAchievements([...achievements, `Achievement ${achievements.length + 1}`]);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Politician Dashboard</h2>
      <button onClick={handleUpload} className="bg-blue-500 text-white p-2 rounded mt-4">
        Upload Achievement
      </button>
      <ul className="mt-4">
        {achievements.map((ach, index) => (
          <li key={index} className="border p-2 my-2">{ach}</li>
        ))}
      </ul>
    </div>
  );
};

export default PoliticianDashboard;

import React from "react";

const AudienceView = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Audience View</h2>
      <p>Here, voters can see the rankings of politicians based on achievements.</p>
      {/* Dummy ranking table */}
      <table className="border-collapse border border-gray-500 mt-4">
        <thead>
          <tr>
            <th className="border p-2">Rank</th>
            <th className="border p-2">Politician</th>
            <th className="border p-2">Achievements</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">1</td>
            <td className="border p-2">John Doe</td>
            <td className="border p-2">10</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AudienceView;

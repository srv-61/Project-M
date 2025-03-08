import React, { useState } from "react";

const AdminPanel = () => {
  const [users, setUsers] = useState(["John Doe", "Jane Smith"]);

  const handleDelete = (user) => {
    setUsers(users.filter((u) => u !== user));
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Admin Panel</h2>
      <ul className="mt-4">
        {users.map((user, index) => (
          <li key={index} className="border p-2 my-2 flex justify-between">
            {user}
            <button onClick={() => handleDelete(user)} className="bg-red-500 text-white p-1 rounded">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;

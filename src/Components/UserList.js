import React from "react";

function UserList() {
  const users = ["Biswanth", "Harshith", "Jaysurya"];

  return (
    <div className="card p-3">
      <h5 className="mb-3">User List</h5>
      <ol className="list-group list-group-numbered">
        {users.map((user, index) => (
          <li key={index} className="list-group-item">
            {user}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default UserList;

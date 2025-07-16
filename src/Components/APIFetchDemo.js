import React, { useState } from "react";

function APIFetchDemo() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetched, setFetched] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const handleFetch = () => {
    setLoading(true);
    setFetched(true);

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setLoading(false);
        setCollapsed(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  const handleToggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="card p-3">
      <h5 className="mb-3">Users Fetched from API</h5>

      <div className="d-flex gap-2 mb-3 flex-wrap">
        <button className="btn btn-primary" onClick={handleFetch}>
          Fetch Users
        </button>

        {fetched && !loading && (
          <button className="btn btn-outline-secondary" onClick={handleToggle}>
            {collapsed ? "Expand" : "Collapse"}
          </button>
        )}
      </div>

      {loading && <div className="alert alert-info">Loading...</div>}

      {!loading && fetched && !collapsed && (
        <ul className="list-group">
          {data.map((user) => (
            <li key={user.id} className="list-group-item">
              <strong>{user.name}</strong> – {user.email} – {user.address.city}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default APIFetchDemo;

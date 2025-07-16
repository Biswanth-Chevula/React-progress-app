import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Welcome from "./Components/Welcome";
import Counter from "./Components/Counter";
import GreetingForm from "./Components/GreetingForm";
import EffectDemo from "./Components/EffectDemo";
import UserList from "./Components/UserList";
import ToggleMessage from "./Components/ToggleMessage";
import APIFetchDemo from "./Components/APIFetchDemo";
import IframeComponent from "./Components/IframeComponent";
function App() {
  const [selectedDay, setSelectedDay] = useState(null);

  const renderModules = () => {
    switch (selectedDay) {
      case "day1":
        return (
          <>
            <h4 className="mb-3">Day 1 – Props and State</h4>

            <div className="mb-4">
              <h5 className="text-primary">🔹 Welcome Component</h5>
              <Welcome name="Biswanth ch" age="21" />
            </div>

            <div className="mb-4">
              <h5 className="text-primary">🔹 Counter Component</h5>
              <Counter />
            </div>
          </>
        );

      case "day2":
        return (
          <>
            <h4 className="mb-3">Day 2 – Forms and Conditional Rendering</h4>

            <div className="mb-4">
              <h5 className="text-primary">🔹 Greeting Form</h5>
              <GreetingForm />
            </div>
          </>
        );

      case "day3":
        return (
          <>
            <h4 className="mb-3">Day 3 – UI Toggle, Hooks & Lists</h4>

            <div className="mb-4">
              <h5 className="text-primary">🔹 Toggle Message</h5>
              <ToggleMessage />
            </div>

            <div className="mb-4">
              <h5 className="text-primary">🔹 useEffect Demo</h5>
              <EffectDemo />
            </div>

            <div className="mb-4">
              <h5 className="text-primary">🔹 User List</h5>
              <UserList />
            </div>
          </>
        );

      case "day4":
        return (
          <>
            <h4 className="mb-3">Day 4 – API Integration</h4>

            <div className="mb-4">
              <h5 className="text-primary"> 🔹 API Fetch Demo</h5>
              <APIFetchDemo />
            </div>
          </>
        );

      case "day5":
        return (
          <>
            <h4 className="mb-3">Day 5 – Iframe</h4>

            <div className="mb-4">
              <h5 className="text-primary"> 🔹 Iframe Demo</h5>
              <IframeComponent />
            </div>
          </>
        );

      default:
        return (
          <p className="text-muted">Please select a day from the sidebar.</p>
        );
    }
  };

  return (
    <div>
      <nav className="navbar navbar-dark bg-dark fixed-top px-4">
        <span className="navbar-brand mb-0 h1">React Practice</span>
      </nav>

      <div className="maincontainer container-fluid">
        <div className="row">
          <div className="col-md-2 bg-light border vh-100 p-3">
            <h5 className="mb-3">Topics</h5>
            <ul className="list-group">
              <li
                className="list-group-item list-group-item-action"
                onClick={() => setSelectedDay("day1")}
              >
                Day 1 – Props & State
              </li>
              <li
                className="list-group-item list-group-item-action"
                onClick={() => setSelectedDay("day2")}
              >
                Day 2 – Forms & Conditions
              </li>
              <li
                className="list-group-item list-group-item-action"
                onClick={() => setSelectedDay("day3")}
              >
                Day 3 – Hooks & Lists
              </li>
              <li
                className="list-group-item list-group-item-action"
                onClick={() => setSelectedDay("day4")}
              >
                Day 4 – API
              </li>
              <li
                className="list-group-item list-group-item-action"
                onClick={() => setSelectedDay("day5")}
              >
                Day 5 – Iframe 
              </li>
            </ul>
          </div>

          <div className="col-md-9 p-4">{renderModules()}</div>
        </div>
      </div>
    </div>
  );
}

export default App;

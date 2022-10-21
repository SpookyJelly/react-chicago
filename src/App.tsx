import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import { Chicago } from "react-chicago";
import "./App.css";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import logo from "./assets/rc-logo.png";
import { Select } from "antd";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      navigate("en");
    }
  }, []);

  return (
    <div className="App">
      <header>
        <nav>
          <div className="banner">
            <Select
              style={{ width: 120 }}
              defaultValue={"en"}
              className="banner-picker"
              onChange={(value) => navigate(value)}
            >
              <Select.Option value="en">English</Select.Option>
              <Select.Option value="kr">한국어</Select.Option>
            </Select>
          </div>
        </nav>
        <div>
          <img src={logo} alt="react-chicago-logo" />
        </div>
        <div className="title">
          <Chicago
            text="React-Chicago"
            style={{ fontSize: "2.3rem", margin: 0, marginBottom: 10 }}
          />
          <small>version : 0.1.0-a</small>
        </div>
        <i>Simple Typo Animation Component for React</i>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;

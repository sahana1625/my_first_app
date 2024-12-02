import React, { useState } from "react";
import catImage from './assets/cat.webp';
import "./App.css";

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    setDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e) => {
    if (dragging) {
      setPosition({ x: e.clientX - dragStart.x, y: e.clientY - dragStart.y });
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  return (
    <div
      className="App"
      style={{
        transform: translate(${position.x}px, ${position.y}px),
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div className="left-section">
        <div className="image-container">
        <img
          src={catImage}
          alt="Cute cat"
          className="left-image"
        />

        </div>
        <h2>Turn your ideas into reality.</h2>
        <p>Start for free and get attractive offers from the community.</p>
      </div>
      <div className="right-section">
        <div className="login-container">
          <h1>Login to your Account</h1>
          <p>See what is going on with your business</p>
          <form>
            <table className="login-table">
              <tbody>
                <tr>
                  <td>
                    <label htmlFor="email">Email:</label>
                  </td>
                  <td>
                    <input type="email" id="email" required />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="password">Password:</label>
                  </td>
                  <td>
                    <input type="password" id="password" required />
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="checkbox-cell">
                    <label>
                      <input type="checkbox" /> Remember Me </label>
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="forgot-password-cell">
                    <a href="#forgot-password">Forgot Password?</a>
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="button-cell">
                    <button type="submit" className="login-button"> Login </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
          <p>
            Not Registered Yet? <a href="#create-account">Create an account</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
import React from "react";
import "./Example.scss";

export default function SassExample() {
  return (
    <div>
      <p>Seolyu</p>
      <p className="font">Seolyu</p>
      <nav>
        <ul>
          <li>123</li>
          <li>
            <a>456</a>
          </li>
        </ul>
      </nav>
      <p className="base">Hello</p>
      <p className="inverse">Hello</p>
      <p className="info">Hello</p>
      <p className="alert">Hello</p>
      <p className="success">Hello</p>
      <p className="message">Hello</p>
      <p className="success2">Hello</p>
      <p className="error">Hello</p>
      <p className="warning">Hello</p>
      <div className="square-av">Hello</div>
      <div className="circle-av">Hello</div>
      <div className="sidebar">Hello</div>
      <div className="gray">Grays</div>
      <div className="button">button</div>
      <div className="header">header</div>
      <div className="pulse">pulse</div>
    </div>
  );
}

import React from "react";
import "./Header.css";

export default function Header(props) {
  return (
    <React.Fragment>
      <header className="header margin-medium">
        <h1 className="margin-small">
          1815 Rose Gold Chronograph Watch - Brown Croco Strap
        </h1>
        <h2 className="margin-small">{props.title}</h2>
      </header>
      <div className="main-container">
        <div className="form-steps">
          {props.title === "Review" && (
            <div className="circle margin-small">
              <span className="step active"></span>
              <span className="step"></span>
              <span className="step"></span>
              <span className="step"></span>
            </div>
          )}
          {props.title === "Ratings" && (
            <div className="circle margin-small">
              <span className="step finished"></span>
              <span className="step active"></span>
              <span className="step "></span>
              <span className="step"></span>
            </div>
          )}
          {props.title === "Media" && (
            <div className="circle margin-small">
              <span className="step finished"></span>
              <span className="step finished"></span>
              <span className="step active"></span>
              <span className="step"></span>
            </div>
          )}
          {props.title === "Confirm" && (
            <div className="circle margin-small">
              <span className="step finished"></span>
              <span className="step finished"></span>
              <span className="step finished"></span>
              <span className="step active"></span>
            </div>
          )}
          <div className="step-title">
            <span>Review</span>
            <span>Ratings</span>
            <span>Media</span>
            <span>Confirm</span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

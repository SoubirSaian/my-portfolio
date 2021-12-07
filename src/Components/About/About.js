import React from "react";
import html from "../../images/myskills/html.png";
import css from "../../images/myskills/css.png";
import javascript from "../../images/myskills/javascript.svg";
import react from "../../images/myskills/react.png";
import nodejs from "../../images/myskills/nodejs.jpg";
import mongodb from "../../images/myskills/mongodb.png";
import firebase from "../../images/myskills/firebase.png";
import express from "../../images/myskills/express.png";

import {
  buildStyles, CircularProgressbarWithChildren
  
} from "react-circular-progressbar";
import VisibilitySensor from "react-visibility-sensor";
import "react-circular-progressbar/dist/styles.css";
function AboutMe() {
  return (
    <div className="container" id="aboutme">
      <div className="row">
        <p className="fs-5" style={{textAlign:"justify"}}>
        Hi, I am a MERN Stack Developer. I have completed a Web development (MERN) Course from Programming Hero. I am an enthusiastic and detail-oriented front-end and back-end web developer. Seeking a challenging career opportunity in a reputed company where I can implement my programming and problem-solving skills, work experience towards the development and implementation of new ideas, contributing to the growth of organization thereby developing myself. 
        </p>
        <h1 className="text-center my-3">My Skills</h1>
       
        <div className="col-md-6 ">
          <h2 className="text-center">Front End</h2>
          <div className="d-flex m-5 justify-content-center row">
            <div
              className="col-md-6 "
              style={{ width: 130, height: 130, marginRight: "10px" }}
            >
              {/* ---------------------HTML------------------- */}
              <VisibilitySensor>
                {({ isVisible }) => {
                  const percentage = isVisible ? 80 : 0;
                  return (
                    <CircularProgressbarWithChildren
                      value={percentage}
                      styles={buildStyles({
                        pathColor: `#3ae374`,

                        trailColor: "white",
                      })}
                    >
                      <img
                        style={{ width: 40, marginTop: 15 }}
                        src={html}
                        alt="doge"
                      />
                      <div style={{ fontSize: 12, marginTop: 3 }}>
                        <p>{`${percentage}%`}</p>
                      </div>
                    </CircularProgressbarWithChildren>
                  );
                }}
              </VisibilitySensor>
            </div>
            <div
              className="col-md-6"
              style={{ width: 130, height: 130, marginRight: "10px" }}
            >
              {/* -----------------------CSS------------------------ */}
              <VisibilitySensor>
                {({ isVisible }) => {
                  const percentage = isVisible ? 75 : 0;
                  return (
                    <CircularProgressbarWithChildren
                      value={percentage}
                      styles={buildStyles({
                        pathColor: `#3ae374`,

                        trailColor: "white",
                      })}
                    >
                      <img
                        style={{ width: 40, marginTop: 15 }}
                        src={css}
                        alt="doge"
                      />
                      <div style={{ fontSize: 12, marginTop: 3 }}>
                        <p>{`${percentage}%`}</p>
                      </div>
                    </CircularProgressbarWithChildren>
                  );
                }}
              </VisibilitySensor>
            </div>
            <div
              className="col-md-6"
              style={{ width: 130, height: 130, marginRight: "10px" }}
            >
              {/*--------------------- Javascript------------------- */}
              <VisibilitySensor>
                {({ isVisible }) => {
                  const percentage = isVisible ? 70 : 0;
                  return (
                    <CircularProgressbarWithChildren
                      value={percentage}
                      styles={buildStyles({
                        pathColor: `#3ae374`,

                        trailColor: "white",
                      })}
                    >
                      <img
                        style={{ width: 40, marginTop: 15 }}
                        src={javascript}
                        alt="doge"
                      />
                      <div style={{ fontSize: 12, marginTop: 3 }}>
                        <p>{`${percentage}%`}</p>
                      </div>
                    </CircularProgressbarWithChildren>
                  );
                }}
              </VisibilitySensor>
            </div>
            <div
              className="col-md-6"
              style={{ width: 130, height: 130, marginRight: "10px" }}
            >
              {/*------------------- React--------------------- */}
              <VisibilitySensor>
                {({ isVisible }) => {
                  const percentage = isVisible ? 68 : 0;
                  return (
                    <CircularProgressbarWithChildren
                      value={percentage}
                      styles={buildStyles({
                        pathColor: `#3ae374`,

                        trailColor: "white",
                      })}
                    >
                      <img
                        style={{ width: 40, marginTop: 15 }}
                        src={react}
                        alt="doge"
                      />
                      <div style={{ fontSize: 12, marginTop: 3 }}>
                        <p>{`${percentage}%`}</p>
                      </div>
                    </CircularProgressbarWithChildren>
                  );
                }}
              </VisibilitySensor>
            </div>
          </div>
        </div>

{/* ---------------------------Backend-------------------------------- */}

        <div className="col-md-6 ">
          <h2 className="text-center">Back End</h2>
          <div className="d-flex m-5 justify-content-center row">
            <div
              className=" "
              style={{ width: 130, height: 130, marginRight: "10px" }}
            >
              {/* Node js */}
              <VisibilitySensor>
                {({ isVisible }) => {
                  const percentage = isVisible ? 60 : 0;
                  return (
                    <CircularProgressbarWithChildren
                      value={percentage}
                      styles={buildStyles({
                        pathColor: `#3ae374`,

                        trailColor: "white",
                      })}
                    >
                      <img
                        style={{ width: 40, marginTop: 15 }}
                        src={nodejs}
                        alt="doge"
                      />
                      <div style={{ fontSize: 12, marginTop: 3 }}>
                        <p>{`${percentage}%`}</p>
                      </div>
                    </CircularProgressbarWithChildren>
                  );
                }}
              </VisibilitySensor>
            </div>
            <div
              className="col-md-6 "
              style={{ width: 130, height: 130, marginRight: "10px" }}
            >
              {/* -------------------------Monogodb-------------- */}
              <VisibilitySensor>
                {({ isVisible }) => {
                  const percentage = isVisible ? 65 : 0;
                  return (
                    <CircularProgressbarWithChildren
                      value={percentage}
                      styles={buildStyles({
                        pathColor: `#3ae374`,

                        trailColor: "white",
                      })}
                    >
                      <img
                        style={{ width: 40, marginTop: 15 }}
                        src={mongodb}
                        alt="doge"
                      />
                      <div style={{ fontSize: 12, marginTop: 3 }}>
                        <p>{`${percentage}%`}</p>
                      </div>
                    </CircularProgressbarWithChildren>
                  );
                }}
              </VisibilitySensor>
            </div>
            <div
              className="col-md-6 "
              style={{ width: 130, height: 130, marginRight: "10px" }}
            >
              {/*--------------------- Firebase----------------- */}
              <VisibilitySensor>
                {({ isVisible }) => {
                  const percentage = isVisible ? 70 : 0;
                  return (
                    <CircularProgressbarWithChildren
                      value={percentage}
                      styles={buildStyles({
                        pathColor: `#3ae374`,

                        trailColor: "white",
                      })}
                    >
                      <img
                        style={{ width: 40, marginTop: 15 }}
                        src={firebase}
                        alt="doge"
                      />
                      <div style={{ fontSize: 12, marginTop: 3 }}>
                        <p>{`${percentage}%`}</p>
                      </div>
                    </CircularProgressbarWithChildren>
                  );
                }}
              </VisibilitySensor>
            </div>
            <div
              className="col-md-6 "
              style={{ width: 130, height: 130, marginRight: "10px" }}
            >
              {/* --------------Express js----------------------------- */}
              <VisibilitySensor>
                {({ isVisible }) => {
                  const percentage = isVisible ? 60 : 0;
                  return (
                    <CircularProgressbarWithChildren
                      value={percentage}
                      styles={buildStyles({
                        pathColor: `#3ae374`,

                        trailColor: "white",
                      })}
                    >
                      <img
                        style={{ width: 40, marginTop: 15 }}
                        src={express}
                        alt="doge"
                      />
                      <div style={{ fontSize: 12, marginTop: 3 }}>
                        <p>{`${percentage}%`}</p>
                      </div>
                    </CircularProgressbarWithChildren>
                  );
                }}
              </VisibilitySensor>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;

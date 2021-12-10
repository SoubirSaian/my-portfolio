import React from "react";
import "./Projects.css";
import goldenwatch from "../../images/portfolio/super_bike_2.png";
import bluesky from "../../images/portfolio/bluesky.PNG";
import neurondental from "../../images/portfolio/neurondental.PNG";
import hondabike from "../../images/portfolio/hondabike.png";
import infinityit from "../../images/portfolio/coding_ninja.png";
import luxuryfashion from "../../images/portfolio/yash_raj.png";

function Projects() {
  return (
    <div className="container " id="portfolio">
      <h1 className="text-center mb-5">Recent Projects</h1>
      <div className="row gy-3">
        <div className="col-md-4">
          <div class="main_portfolio img-hover-zoom">
            <img
              src={goldenwatch}
              alt="Avatar"
              class="image"
              style={{ width: "100%" }}
            />

            <div class="middle">
              <h4>Super Bike</h4>
              <a href="https://super-bike-9aaee.web.app/" target="_blank">
                <div class="text">Live Demo</div>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div class="main_portfolio  img-hover-zoom">
            <img
              src={bluesky}
              alt="Avatar"
              class="image"
              style={{ width: "100%" }}
            />
            <div class="middle">
            <h4>Bangladesh Travel</h4>
              <a href="https://bangladesh-travel.web.app/home" target="_blank">
                <div class="text">Live Demo</div>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div class="main_portfolio  img-hover-zoom">
            <img
              src={neurondental}
              alt="Avatar"
              class="image"
              style={{ width: "100%" }}
            />
            <div class="middle">
                <h4>Apollo Health Care</h4>
              <a href="https://apollo-health-care-a3b2a.web.app/home" target={"_blank"}>
                <div class="text">Live Demo</div>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div class="main_portfolio  img-hover-zoom">
            <img
              src={infinityit}
              alt="Avatar"
              class="image"
              style={{ width: "100%" }}
            />
            <div class="middle">
                <h4>Coding Ninja</h4>
              <a
                href="https://jolly-goldstine-b68a21.netlify.app/"
                target={"_blank"}
              >
                <div class="text">Live Demo</div>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div class="main_portfolio  img-hover-zoom">
            <img
              src={luxuryfashion}
              alt="Avatar"
              class="image"
              style={{ width: "100%" }}
            />
            <div class="middle">
                <h4>Yash Raj Films</h4>
              <a href="https://elastic-murdock-52d214.netlify.app/" target={"_blank"}>
                <div class="text">Live Demo</div>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div class="main_portfolio  img-hover-zoom">
            <img
              src={hondabike}
              alt="Avatar"
              class="image"
              style={{ width: "100%" }}
            />
            <div class="middle">
                <h4>Honda CBR</h4>
              <a
                href="https://soubirsaian.github.io/my-honda-cbr/"
                target={"_blank"}
              >
                <div class="text">Live Demo</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;

import React from "react";
import "./Projects.css";
import goldenwatch from "../../images/portfolio/goldenwatch.png";
import bluesky from "../../images/portfolio/bluesky.PNG";
import neurondental from "../../images/portfolio/neurondental.PNG";
import hondabike from "../../images/portfolio/hondabike.png";
import infinityit from "../../images/portfolio/infinityit.png";
import luxuryfashion from "../../images/portfolio/luxuryfashion.png";

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
              <h4>Golden Watch</h4>
              <a href="https://golden-watch.web.app/" target="_blank">
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
            <h4>BlueSky Tour Hub</h4>
              <a href="https://bluesky-tour-hub.web.app/" target="_blank">
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
                <h4>Neuron Dental Care</h4>
              <a href="https://neuron-dental-care.web.app/" target={"_blank"}>
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
                href="https://ruhulamin96.github.io/Honda-bike-website/index.html"
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
                <h4>Luxury Fashion</h4>
              <a href="https://luxury-fashion.netlify.app/" target={"_blank"}>
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
                <h4>Infinity IT Solution</h4>
              <a
                href="https://infinity-institute.netlify.app/"
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

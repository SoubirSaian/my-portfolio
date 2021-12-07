import React from "react";
import Typical from "react-typical";
import portfolio from "../../../images/my_img.jpg";
import "./Header.css";

function Header() {
  return (
    <div className="container my-3">
      {/* <div className="text-center my_ripple my-5">
      <img
          style={{ width: "15%" }}
          className=""
          src={portfolio}
          alt=""
        />
      </div> */}
      <div className="ripple">
      <img
          // style={{ width: "15%" }}
          className="w-100"
          src={portfolio}
          alt=""
        />
      </div>
      <div>
        <div className="center fw-bold mt-5">
          <h1 className="fw-bold">Hi, I'm</h1>
          <h1 className="fw-bold"> Soubir Saian</h1>
        </div>
      </div>
      <div className="row ">
        {/* <div className="col-md-5">
          <h1 className="fs-3">I'm </h1>
        </div> */}
        <div className="type_text fs-3">
          <div>
           
            <p className="mx-3">I'm a</p>
          </div>
          <div style={{color: " #3ae374"}}>
            <Typical
              steps={[
                "Web developer",
                2000,
                "Front End Developer",
                2000,
                "MERN Stack Developer",
                2000,
              ]}
              loop={Infinity}
              wrapper="p"
            />
          </div>
        </div>
      </div>
      <div className="icon">
      <a className="github" href="https://github.com/SoubirSaian?tab=repositories" target="_blank"><i class="fab fa-github"></i></a>

      <a className="linkedin" href="https://www.linkedin.com/in/soubir-saian" target="_blank"><i class="fab fa-linkedin-in"></i></a>

      <a className="email" href="mailto:soubir2018@gmail.com" target="_blank"><i class="far fa-envelope"></i></a>

      <a className="mobile" href="tel:+8801400607742" target="_blank"><i class="fas fa-phone-alt"></i></a>
      </div>
    </div>
  );
}

export default Header;

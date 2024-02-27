import React from 'react'
import "./About.scss";
import aboutImg1 from "../../assets/images/about-image1.png";
import aboutImg2 from "../../assets/images/about-image2.png";
import aboutImg3 from "../../assets/images/about-image3.png";

function About() {
  return (
    <div className="about container">
      <div className="about-headtext">
        <h2>About Us</h2>
        <p>
          Sagittis nibh scelerisque vitae eget vulputate sem elementum sed
          <br /> neque nisi felis non ultrices massa id egestas quam velit
          pretium nu.
        </p>
      </div>
      <div className="about-cards">
        <div className="about-cards-item">
          <img className="about-cards-item-img1" src={aboutImg1} alt="" />
          <h4>1. Schedule online</h4>
          <p>
            Sagittis nibh scelerisque vitae egetolment vulputate sem elementum
            sed n.
          </p>
        </div>
        <div className="about-cards-item">
          <img className="about-cards-item-img2" src={aboutImg2} alt="" />
          <h4>2. Pay online easily</h4>
          <p>
            Vitae ut accumsan blandit ullamcorperolm suscipit dui gravida amet
            at nunc.
          </p>
        </div>
        <div className="about-cards-item">
          <img className="about-cards-item-img3" src={aboutImg3} alt="" />
          <h4>3. Get your house cleaned</h4>
          <p>
            Nunc maecenas sollicitudin metus tellus mattis sed porttitor cursus
            eleifend.
          </p>
        </div>
      </div>
      <div className="about-btns">
        <button className="about-btns-1">Get a free quote</button>
        <button className="about-btns-2">Explore services</button>
      </div>
    </div>
  );
}

export default About

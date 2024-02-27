import "./Services.scss";
import servicesImg1 from "../../assets/images/services-img1.png";
import servicesImg2 from "../../assets/images/services-img2.png";
import servicesImg3 from "../../assets/images/services-img3.png";
import servicesFooterImg from "../../assets/images/services-footer-img.png";
import serviceFoot1 from '../../assets/images/call-number.svg';
function Services() {
  return (
    <div className="services container">
      <div className="services-headtext">
        <h2>Our Services</h2>
        <button>Explore services</button>
      </div>
      <div className="services-cards">
        <div className="services-cards-item">
          <img src={servicesImg1} alt="" />
          <h4>House cleaning</h4>
          <p>
            Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
            dalaracc lacus vel facilisis volutpat est.
          </p>
        </div>
        <div className="services-cards-item-2">
          <img src={servicesImg2} alt="" />
          <h4>Office cleaning</h4>
          <p>
            Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
            dalaracc lacus vel facilisis volutpat est.
          </p>
        </div>
        <div className="services-cards-item-3">
          <img src={servicesImg3} alt="" style={{ maxWidth: 270 }} />
          <h4>Industrial cleaning</h4>
          <p>
            Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
            dalaracc lacus vel facilisis volutpat est.
          </p>
        </div>
      </div>
      <div className="services-footer">
        <div className="services-footer-left">
          <img src={servicesFooterImg} alt="" />
        </div>
        <div className="services-footer-right">
          <p className="services-footer-right-p1">Covid-19 sanitization</p>
          <h3>We follow guidelines to keep you safe from the COVID-19 virus</h3>
          <p className="services-footer-right-p2">
            Lobortis mattis odio leo eget mauris met aliquet semper molestie
            sollicitudin congue massa mauris lectus.
          </p>
          <div className="services-foot-btns">
            <button className="services-foot-btn">Get a free quote</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;

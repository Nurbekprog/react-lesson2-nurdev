import "./Footer.css";
import footerIcons from "../../assets/images/footer-icons.png";
import footerLogo from "../../assets/images/footer-logo.svg";
function Footer() {
  return (
    <div className="footer container">
      <ul className="footer-list">
        <li className="footer-list-item">
          <h4>Quality cleaning for your home</h4>
          <p>
            Lorem ipsum dolor sit amet cteturdo adipiscing elit, sed do eiusmo.
          </p>
          <img className="footerIcon" src={footerIcons} alt="" />
        </li>
        <li className="footer-list-item">
          <h5>Contact us</h5>
          <p>1827 Nickel Road, Los Angeles, CA, 90017, United States</p>
          <p>(414) 567 - 2109</p>
          <p>contact@cleaning.com</p>
        </li>
        <li className="footer-list-item">
          <h5>Hours</h5>
          <h6>Monday to Friday</h6>
          <p>6:00 AM - 9:00 PM</p>
          <h6>Saturday & Sunday</h6>
          <p>8:00 AM - 8:00 PM</p>
        </li>
        <li className="footer-list-item">
          <h5>Get a free estimate</h5>
          <p style={{ color: "#0075ff" }}>(414) 567 - 2109</p>
          <p>
            Lorem ipsum dolor sit amet ectetur adipiscing elit, sed do eiusmod.
          </p>
          <button>Request a free quote</button>
        </li>
      </ul>
      <div className="footer-bottom">
        <img src={footerLogo} alt="" />
        <p>
          Copyright © Cleaning X | Designed by BRIX Templates - Powered by
          Webflow - Licenses
        </p>
      </div>
    </div>
  );
}

export default Footer;

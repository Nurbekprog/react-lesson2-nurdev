import "./Contact.scss";
import callNum from '../../assets/images/call-number.svg';
function Contact() {
  return (
    <div className="contact-bg">
      <div className="contact container">
        <div className="contact-text">
          <div className="contact-text-head">
            <h2>Contact Us</h2>
            <p>
              In dignissim euismod pretium amet enim a eu nam ut urna accumsan
              pellentesque lacus duis pharetra eutortor.
            </p>
            <img src={callNum} alt="" /> <hr />
          </div>
          <div className="contact-text-footer">
            <h4>Not convinced yet?</h4>
            <p>
              Massa bibendum consectetur maurisid gravida purus, dolor dui amet
              morbi non nunc urna purus diam.
            </p>
            <button>Browse our packages</button>
          </div>
        </div>
        <div className="contact-form">
          <form>
            <label htmlFor="fullName">Full Name</label>
            <input className="inputtext" type="text" id="fullName" />
            <label htmlFor="phoneNum">Phone Number</label>
            <input type="text" id="phoneNum" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;

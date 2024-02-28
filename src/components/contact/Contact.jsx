import "./Contact.scss";
import callNum from "../../assets/images/call-number.svg";
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
            <img src={callNum} className="callNum" alt="" />
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
          <div>
            <form>
              <label htmlFor="fullName">Full Name</label>
              <input type="text" id="fullName" />
              <label htmlFor="address">Address</label>
              <input type="address" id="address" />
              <label htmlFor="requested">Requested service</label>
              <input type="text" id="requested" />
            </form>
            <form>
              <label htmlFor="phoneNum">Phone Number</label>
              <input type="tel" id="phoneNum" />
              <label htmlFor="email">Email</label>
              <input type="email" id="email" />
              <label htmlFor="dayOf">Day of service</label>
              <input type="text" id="dayOf" />
            </form>
          </div>
          <form>
            <label htmlFor="note">Add a note</label>
            <textarea name="note" id="note" cols={34} rows={8}></textarea>
          </form>
          <button type="submit" className="submit-btn">Submit message</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;

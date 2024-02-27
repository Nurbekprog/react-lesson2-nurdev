import "./Home.scss";
import callNum from "../../assets/images/call-number.svg";
import homeImg from "../../assets/images/home-img.png";
function Home() {
  return (
    <div className="home-bg">
      <div className="home container">
        <div className="home-left">
          <h2>Quality cleaning for your home</h2>
          <p>
            Condimentum mauris sit cursus amet id non neque pharetra nulla
            ornare sed facilisis senectus dapibus nibh ultrices eget suscipit
            aliquet et nulla magna lacus penatibus.
          </p>
          <div className="home-left-btns">
            <button className="home-btn">Get a free quote</button>
            <img className="callNum" src={callNum} alt="" />
          </div>
        </div>
        <div className="home-right">
          <img src={homeImg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;

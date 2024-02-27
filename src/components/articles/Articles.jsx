import "./Articles.scss";
import cardImg1 from "../../assets/images/articles-img1.png";
import cardImg2 from "../../assets/images/articles-img2.png";
function Articles() {
  return (
    <div className="container articles">
      <div className="articles-headtext">
        <div className="articles-headtext-h2">
          <h3>Articles & resources</h3>
        </div>
        <div className="articles-headtext-btn">
          <button className="articles-btn1">Get a free quote</button>
          <button className="articles-btn2">Browse articles</button>
        </div>
      </div>
      <div className="articles-cards">
        <div className="articles-cards-item">
          <img src={cardImg1} alt="" />
          <div className="cards-text">
            <h5>
              8 best vacuum cleaners to clean any mess for your home in 2022
            </h5>
            <p>
              Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo
              quis odio sit sit ac port titor sit males.
            </p>
            <div className="card-text-data">
              <h6>Jan 28, 2022</h6>
              <span></span>
            </div>
          </div>
        </div>
        <div className="articles-cards-item">
          <img src={cardImg2} alt="" />
          <div className="cards-text">
            <h5>
              8 best vacuum cleaners to clean any mess for your home in 2022
            </h5>
            <p>
              Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo
              quis odio sit sit ac port titor sit males.
            </p>
            <div className="card-text-data">
              <h6>Jan 28, 2022</h6>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Articles;

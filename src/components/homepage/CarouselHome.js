// import NavBar from "../Navbar";
import "../../styles/Carousel.css";
// import SimpleSlider from "./SimpleSlider";

const CarouselHome = () => {
  return (
    <div className="slider-area">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="5000">
            <img
              src="/images/auctioneer.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="/images/auctioneer1.png"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              className="imgCarousel"
              src="/images/auctioneer3.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="container">
        <div className="row feature-icon-two-wrap">
          <div className="col-md-4">
            <div className="support-wrap-6 support-shape mb-30 text-center">
              <div className="support-content-6">
                <img
                  src="https://flone.reactdemo.hasthemes.com/assets/img/icon-img/support-1.png"
                  alt=""
                />
                <h5>Trustworty Sellers</h5>
                <p className="bottomBorder marginT"></p>
                <p>
                  All the sellers are thruswothy and provide correct information
                  about their products.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="support-wrap-6 support-shape mb-30 text-center">
              <div className="support-content-6">
                <img
                  src="https://flone.reactdemo.hasthemes.com/assets/img/icon-img/support-11.png"
                  alt=""
                />
                <h5>Support 24/7</h5>
                <p className="bottomBorder marginT"></p>
                <p>
                  Customers can get help and find answers to their questions.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="support-wrap-6 support-shape mb-30 text-center">
              <div className="support-content-6">
                <img
                  src="https://flone.reactdemo.hasthemes.com/assets/img/icon-img/support-12.png"
                  alt=""
                />
                <h5>Unique Items</h5>
                <p className="bottomBorder marginT"></p>
                <p>
                  Unique items can be found on the platform, even collectable
                  items.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CarouselHome;

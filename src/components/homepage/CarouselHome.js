// import NavBar from "../Navbar";
import "../../styles/Carousel.css";
// import SimpleSlider from "./SimpleSlider";

const CarouselHome = () => {
  return (
    <div className="slider-area">
      {/* <div className="slider-active nav-style-1">
        <div className="swiper-container swiper-container-fade">
          <div className="swiper-wrapper">
            <div></div>
            <div></div>
            <div>
              <div className="container">
                <div className="row">
                  <div className="col-xl-6 col-lg-7 col-md-8 col-12">
                    <div className="slider-content-brown slider-content-2 slider-content-2--white slider-animated-1">
                      <h3 className="animated no-style">
                        Furniture
                        <br></br>Collection <span>2020</span>
                      </h3>
                      <h1 className="animated">
                        Sale up to <span>40 % off</span>
                      </h1>
                      <div className="slider-btn-brown btn-hover">
                        <a className="animated" href="/">
                          Shop Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active indicator"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              // className="indicator"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              // className="indicator"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="/images/neyney.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img src="/images/ip12.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img
                src="/images/neyney.jpg"
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
              className="carousel-control-prev-icon next"
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
              className="carousel-control-next-icon next"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden next">Next</span>
          </button>
        </div>
      </div> */}
      {/* <SimpleSlider></SimpleSlider> */}
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
            <img src="/images/neyney.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/images/bike.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/images/ip12.jpg" className="d-block w-100" alt="..." />
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                  eiusm.
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                  eiusm.
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                  eiusm.
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

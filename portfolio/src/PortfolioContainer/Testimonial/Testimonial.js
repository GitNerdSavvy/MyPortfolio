import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Testimonial.css";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import SatyamImg from "../../assets/Testimonial/satyam.png";
import AbhayImg from "../../assets/Testimonial/abhay.png";
import SaurabhImg from "../../assets/Testimonial/saurabh.png";
export default function Testimonial(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInscreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const options = {
    loop: true,
    margin: 0,
    animateIn: "bouceInRight",
    animateOut: "bounceOutRight",
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };
  return (
    <div>
      <ScreenHeading
        title={"EndorseMent"}
        subHeading={"What My Friend Say About Me"}
      />
      <section className="testimonial-section " id={props.id || ""}>
        <div className="container">
          <div className="row">
            <OwlCarousel
              className="owl-carousel"
              id="testimonial-carousel"
              {...options}
            >
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      A mastermind of Innovation and Efficiency, It is a great
                      pleasure that I endorse him as a developer of amazing
                      expertise. He exhibits dedication to solving problems and
                      expanding skills.
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star-half-alt"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img src={SaurabhImg} alt="Saurabh Agnihotri"></img>

                    <h5>Saurabh Agnihotri</h5>
                    <p>Master Trader</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      His open-mindeness and strong communication skills create
                      a better environment for growth. He has ability to listen
                      actively and contribute thoughtfully to discussions.
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star-half-alt"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img src={AbhayImg} alt="Abhay Tripathi"></img>
                    <h5>Abhay Tripathi</h5>
                    <p>Developer</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      His ability to navigate complex coding challenges and
                      deliver elegant solutions is amazing. He possesses a
                      natural inclination for pushing the boundaries of
                      technology.
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star-half-alt"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img src={SatyamImg} alt="Satyam Chauhan"></img>
                    <h5>Satyam Chauhan</h5>
                    <p>Frontend Developer</p>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
    </div>
  );
}

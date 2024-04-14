import React, { useRef } from "react";
import { Carousel, Card } from "antd";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";

const LandingPage = () => {
  const navigate = useNavigate();
  const corRef = useRef();
  const prev = () => {
    corRef.current.prev();
  };
  const next = () => {
    corRef.current.next();
  };
  return (
    <>
      <Header />
      <Carousel autoplay>
        <div className="hero-img" key={1}>
          <img
            src="https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?cs=srgb&dl=clouds-country-daylight-371633.jpg&fm=jpg"
            alt="hero-1"
          />
        </div>
        <div className="hero-img" key={2}>
          <img
            src="https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?cs=srgb&dl=clouds-country-daylight-371633.jpg&fm=jpg"
            alt="hero-2"
          />
        </div>
        <div className="hero-img" key={3}>
          <img
            src="https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?cs=srgb&dl=clouds-country-daylight-371633.jpg&fm=jpg"
            alt="hero-3"
          />
        </div>
      </Carousel>
      <div className="hero-text">
        What will you <span>choose</span> today?
      </div>
      <div className="cor-wrapper">
        <div className="prev-next-button" onClick={prev}>
          <FontAwesomeIcon size={"2xl"} icon={faChevronCircleLeft} />
        </div>
        <div style={{ width: "94%" }}>
          <Carousel dots={false} ref={corRef}>
            <div>
              <div className="car-items">
                <Card
                  className="card-item-cor"
                  title={
                    <div className="home-card-title">
                      <span>F</span>ix
                    </div>
                  }
                  onClick={() => {
                    navigate("/code-fix");
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos laboriosam debitis tempore aspernatur? Corporis
                  fugiat autem adipisci, veritatis et voluptatem.
                </Card>
                <Card
                  className="card-item-cor"
                  title={
                    <div className="home-card-title">
                      <span>F</span>ix
                    </div>
                  }
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos laboriosam debitis tempore aspernatur? Corporis
                  fugiat autem adipisci, veritatis et voluptatem.
                </Card>
                <Card
                  className="card-item-cor"
                  title={
                    <div className="home-card-title">
                      <span>F</span>ix
                    </div>
                  }
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos laboriosam debitis tempore aspernatur? Corporis
                  fugiat autem adipisci, veritatis et voluptatem.
                </Card>
                <Card
                  className="card-item-cor"
                  title={
                    <div className="home-card-title">
                      <span>F</span>ix
                    </div>
                  }
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos laboriosam debitis tempore aspernatur? Corporis
                  fugiat autem adipisci, veritatis et voluptatem.
                </Card>
                <Card
                  className="card-item-cor"
                  title={
                    <div className="home-card-title">
                      <span>F</span>ix
                    </div>
                  }
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos laboriosam debitis tempore aspernatur? Corporis
                  fugiat autem adipisci, veritatis et voluptatem.
                </Card>
              </div>
            </div>
            <div>
              <div className="car-items">
                <Card
                  className="card-item-cor"
                  title={
                    <div className="home-card-title">
                      <span>F</span>ix
                    </div>
                  }
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos laboriosam debitis tempore aspernatur? Corporis
                  fugiat autem adipisci, veritatis et voluptatem.
                </Card>
              </div>
            </div>
          </Carousel>
        </div>
        <div className="prev-next-button" onClick={next}>
          <FontAwesomeIcon size={"2xl"} icon={faChevronCircleRight} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;

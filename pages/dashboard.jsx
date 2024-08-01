import React, { useState } from "react";
import Footer from "./Footer";

const images = [
  "https://spn-sta.spinny.com/blog/20231103174129/new-Tata-Harrier-1160x653.webp?compress=true&quality=80&w=1200&dpr=2.6",
  "https://imgd.aeplcdn.com/1200x900/n/cw/ec/128472/toyota-urban-cruiser-hyryder-left-front-three-quarter0.jpeg?isig=0",
  "https://carindia.in/wp-content/uploads/2021/01/Toyota-Fortuner-2021-India.jpg",
  "https://images.hindustantimes.com/auto/img/2024/02/05/1600x900/Curvv-Front-3-4th-Angle-scaled_1707118161796_1707124287643.jpg",
  "https://static.toiimg.com/thumb/resizemode-4,msid-76212146,width-500,imgsize-400/76212146.jpg",
  "https://gaadiwaadi.com/wp-content/uploads/2022/10/Honda-Prologue-electric-SUV-Rear.jpg",
  "https://www.team-bhp.com/sites/default/files/styles/check_extra_large_for_review/public/xuv_10.jpg",
  "https://www.team-bhp.com/sites/default/files/styles/check_extra_large_for_review/public/new-car-delivery-1.jpeg",
];

const Dashboard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <>
      <div className="main">
        <header className="dashboard-header">
          <div className="header-content">
            <h1 className="header-title">Dashboard</h1>
          </div>
        </header>
        <div className="slider-container">
          <div className="slider">
            <img
              src={images[currentIndex]}
              alt="Car"
              className="slider-image"
            />
          </div>
          <div className="controls">
            <button onClick={prevSlide} className="control-button">
              Prev
            </button>
            <button onClick={nextSlide} className="control-button">
              Next
            </button>
          </div>
          <button
            className="go-home-button"
            onClick={() => (window.location.href = "/home")}
          >
            Go Home
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Dashboard;

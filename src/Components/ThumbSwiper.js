import React from 'react';
import Swiper from 'react-id-swiper';
import '../Styles/swiper.css';
import '../Styles/swiper.min.css';

class ThumbSwiper extends React.Component {
  state = {
  }

  render() {

    const params = {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
      },

    };

    return (
      <Swiper {...params}>
        <img style={{ width: "100%" }} src={require("../Media/Images/1.jpg")} alt="afficher"></img>
        <img style={{ width: "100%" }} src={require("../Media/Images/2.jpg")} alt="afficher"></img>
        <img style={{ width: "100%" }} src={require("../Media/Images/3.jpg")} alt="afficher"></img>
        <img style={{ width: "100%" }} src={require("../Media/Images/4.jpg")} alt="afficher"></img>
        <img style={{ width: "100%" }} src={require("../Media/Images/5.jpg")} alt="afficher"></img>
        <img style={{ width: "100%" }} src={require("../Media/Images/6.jpg")} alt="afficher"></img>
      </Swiper>
    )
  }
}

export default ThumbSwiper;
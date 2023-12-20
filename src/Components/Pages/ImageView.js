import React, { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './ImageView.css';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const ImageView = ({ flat }) => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      {' '}
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="mx-10" src={flat?.image1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="mx-10" src={flat?.image2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="mx-10" src={flat?.image3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="mx-10" src={flat?.image4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="mx-10" src={flat?.image5} alt="" />
        </SwiperSlide>

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
};

export default ImageView;

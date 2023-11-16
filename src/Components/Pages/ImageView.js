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

const ImageView = () => {
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
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/living-room-ideas-caroline-turner-orchardlane01-copy-1670968014.jpeg?crop=0.670xw:1.00xh;0.166xw,0&resize=640:*"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgzuFQqS9__Glsyu7OGTr43dz_CW7ne_r512wPtWRuxvHCPJ9KON-N4QRqzgQY4cGUXr8&usqp=CAU"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://st.depositphotos.com/1000347/2412/i/450/depositphotos_24120055-stock-photo-empty-room.jpg"
            alt=""
          />
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

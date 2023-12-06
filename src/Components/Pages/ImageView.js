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
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/cute-room-ideas-1677096334.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/living-room-ideas-caroline-turner-orchardlane01-copy-1670968014.jpeg?crop=1.00xw:0.751xh;0,0.171xh&resize=640:*"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/small-living-room-ideas-fatma-el-aminub9a8769-1673370515.jpg?crop=1xw:0.84375xh;center,top&resize=1200:*"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://5.imimg.com/data5/UU/NB/QJ/ANDROID-92035713/1572882152419-jpg-500x500.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.srijanrealty.com/wp-content/uploads/2022/07/2-bhk-flats-in-Kolkata.png"
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
    // <>
    //   {' '}
    //   <Swiper
    //     spaceBetween={30}
    //     centeredSlides={true}
    //     autoplay={{
    //       delay: 4500,
    //       disableOnInteraction: false,
    //     }}
    //     pagination={{
    //       clickable: true,
    //     }}
    //     navigation={true}
    //     modules={[Autoplay, Pagination, Navigation]}
    //     onAutoplayTimeLeft={onAutoplayTimeLeft}
    //     className="mySwiper"
    //   >
    //     <SwiperSlide>
    //       <img src={flat?.image1} alt="" />
    //     </SwiperSlide>
    //     <SwiperSlide>
    //       <img src={flat?.image2} alt="" />
    //     </SwiperSlide>
    //     <SwiperSlide>
    //       <img src={flat?.image3} alt="" />
    //     </SwiperSlide>
    //     <SwiperSlide>
    //       <img src={flat?.image4} alt="" />
    //     </SwiperSlide>
    //     <SwiperSlide>
    //       <img src={flat?.image5} alt="" />
    //     </SwiperSlide>

    //     <div className="autoplay-progress" slot="container-end">
    //       <svg viewBox="0 0 48 48" ref={progressCircle}>
    //         <circle cx="24" cy="24" r="20"></circle>
    //       </svg>
    //       <span ref={progressContent}></span>
    //     </div>
    //   </Swiper>
    // </>
  );
};

export default ImageView;

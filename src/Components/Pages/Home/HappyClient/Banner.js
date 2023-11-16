import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './BannerStyle.css';

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

const Banner = () => {
  return (
    <div>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://img.freepik.com/premium-photo/young-beautiful-asian-college-student-girls-holding-book_102814-1429.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699488000&semt=ais"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://media-cldnry.s-nbcnews.com/image/upload/t_social_share_1200x630_center,f_auto,q_auto:best/rockcms/2022-07/family-quotes-2x1-bn-220712-8a4afd.jpg"
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://cdn.pixabay.com/photo/2023/03/11/18/52/police-7845028_1280.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://wecanmag.com/wp-content/uploads/2021/02/AtlasJanitoral-seotool-61363-TipsForImpressing-image1.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.farmafrica.org/images/news/2020/sunflower-image---flourishing-futures.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://fearlessfemaletravels.com/wp-content/uploads/2021/03/hostel-packing-list-1024x683.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.victoria-hochschule.de/wp-content/uploads/header-ba-business-mobi.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.volunteerforever.com/wp-content/uploads/2019/08/What-is-a-hostel-1c-min.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.freepik.com/premium-photo/male-student-bachelor-robe-with-diploma-outdoors_392895-20511.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;

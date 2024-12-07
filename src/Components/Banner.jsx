import { Fade, Slide } from "react-awesome-reveal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import s1 from "/src/assets/Slide1.png";
import s2 from "/src/assets/Slide2.png";
import s3 from "/src/assets/Slide3.png";

const Banner = () => {
  return (
    <div>
      {/* Info div */}
      <div>
        <Slide>
          <h1 className="text-4xl font-bold text-center">
            Welcome to EquiSports
          </h1>
        </Slide>
        <Fade delay={1e3} cascade damping={1e-1}>
          <p className="text-base mt-4 text-center font-medium xl:max-w-[50%] mx-auto">
            Need equipment or gear for your favorite sports? You have landed on
            the right place. We here at EquiSports will provide you with the
            most amazing gear and equipments, that you will not find anywhere
            else. Quality and Spectacular is our motto!
          </p>
        </Fade>
      </div>
      {/* Info div */}

      {/* Banner Slides */}
      <div className="mt-10" data-aos="fade-up">
        <div className="w-full xl:h-[600px]">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            style={{ height: "100%" }}
          >
            <SwiperSlide>
              <div className="w-full h-full flex justify-center items-center">
                <img
                  src={s1}
                  alt="Slide 1"
                  className="object-contain rounded-xl h-full"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full flex justify-center items-center">
                <img
                  src={s2}
                  alt="Slide 2"
                  className="object-contain rounded-xl h-full"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full flex justify-center items-center">
                <img
                  src={s3}
                  alt="Slide 3"
                  className="object-contain rounded-xl h-full"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      {/* Banner Slides */}
    </div>
  );
};

export default Banner;

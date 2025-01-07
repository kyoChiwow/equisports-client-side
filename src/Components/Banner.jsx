import s1 from "/src/assets/Slide1.png";
import s2 from "/src/assets/Slide2.png";
import s3 from "/src/assets/Slide3.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  return (
    <div className="max-w-[95%] md:max-w-[90%] lg:max-w-[98%] xl:max-w-[80%] mx-auto">

      {/* Banner Slides */}
      <div>
        <div className="w-full">
          <Carousel showThumbs={false} autoPlay={true}>
            <div>
              <img className="h-[770px] object-fill" src={s1} alt="" />
            </div>
            <div>
              <img className="h-[770px] object-fill" src={s2} alt="" />
            </div>
            <div>
              <img className="h-[770px] object-fill" src={s3} alt="" />
            </div>
          </Carousel>
        </div>
      </div>
      {/* Banner Slides */}
    </div>
  );
};

export default Banner;

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import Loader from "../components/loader/Loader";
import asset8 from "../assets/asset8.jpeg";
import asset9 from "../assets/asset9.jpeg";
import asset10 from "../assets/asset10.jpeg";
import asset11 from "../assets/asset11.jpeg";
import asset12 from "../assets/asset12.gif";
import product1 from './../assets/swiperBanner/banner1.jpg';
import product2 from './../assets/swiperBanner/banner2.jpg';
import product3 from './../assets/swiperBanner/banner3.jpg';
import product4 from './../assets/swiperBanner/banner4.jpg';
import product5 from './../assets/swiperBanner/banner5.jpg';

const SwiperComponent = () => {
  const [loading, setLoading] = useState(true);

  const swiperImages = [
    asset8,
    asset9,
    asset10,
    asset11,
    asset12,
  ];

  const swiperImagesforMobileScreen = [
    product1,
    product2,
    product3,
    product4,
    product5
  ];

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div>
      {loading && <Loader />}
      {!loading && (
        <>
          {/* For mobile screens */}
          <div className="block md:hidden">
            <Swiper
              spaceBetween={0}
              slidesPerView={1}
              pagination={{ type: "fraction" }}
              loop={true}
              // navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              {swiperImagesforMobileScreen.map((image, index) => (
                <SwiperSlide className="" key={index}>
                  <img
                    src={image}
                    className="w-full h-full "
                    alt={`Image ${index + 1}`}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/* For tablets and desktop screens */}
          <div className="hidden md:block">
            <Swiper
              spaceBetween={0}
              slidesPerView={1}
              pagination={{ type: "fraction" }}
              loop={true}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              {swiperImages.map((image, index) => (
                <SwiperSlide className="h-96" key={index}>
                  <img
                    src={image}
                    className="w-full h-full object-fill"
                    alt={`Image ${index + 1}`}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </>
      )}
    </div>
  );
};

export default SwiperComponent;

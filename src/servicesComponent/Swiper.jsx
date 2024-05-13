import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import { useEffect, useState } from "react";
import Loader from "../components/loader/Loader";
import asset8 from "../assets/asset8.jpeg";
import asset9 from "../assets/asset9.jpeg";
import asset10 from "../assets/asset10.jpeg";
import asset11 from "../assets/asset11.jpeg";
import asset12 from "../assets/asset12.gif";
import adna1 from "../assets/adna1.jpg";
import adna2 from "../assets/adna2.jpg";
import adna3 from "../assets/adna3.jpg";
import adna4 from "../assets/adna4.jpg";

const SwiperComponent = () => {
  const [loading, setLoading] = useState(true); // Initially set loading to true

  const swiperImages = [
    // asset8, asset9, asset10, asset11, asset12

    adna1,
    adna2,
    adna3,
    adna4,
  ];

  // Simulating image loading with useEffect
  useEffect(() => {
    setLoading(false); // Once component is mounted, set loading to false
  }, []);

  return (
    <div>
      {loading && <Loader />} {/* Show loading indicator if loading */}
      {!loading && (
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          pagination={{
            type: "fraction",
          }}
          loop={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {swiperImages?.map((image, index) => (
            <SwiperSlide className="h-96" key={index}>
              <img
                src={image}
                className="w-full h-full object-fill"
                alt={`Image ${index + 1}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default SwiperComponent;

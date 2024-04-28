import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <>
      <div className="my-5 rounded-lg">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <div className="max-w-6xl">
            <SwiperSlide>
              <div
                className="slide slide1 rounded-lg"
                style={{
                  backgroundImage: `url('https://i.ibb.co/qmbh6fm/wallpaperflare-com-wallpaper.jpg')`,
                  backgroundSize: "100% auto",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  height: "500px",
                }}
              >
                <div
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  className="absolute inset-0 flex flex-col justify-center items-center"
                >
                  <div className="text-2xl glass text-center md:text-3xl font-bold  p-5 rounded-lg text-white">
                    <div>Welcome to DrawNook!</div>
                    <p>Where Artistry Knows No Bounds!</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="slide slide2 rounded-lg"
                style={{
                  backgroundImage: `url('https://i.ibb.co/qktY6f1/wallpaperflare-com-wallpaper-1.jpg')`,
                  backgroundSize: "100% auto",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  height: "500px",
                }}
              >
                <div
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  className="absolute inset-0 flex flex-col justify-center items-center"
                >
                  <div className="text-2xl glass text-center md:text-3xl font-bold  p-5 rounded-lg text-white">
                    <div>Welcome to DrawNook!</div>
                    <p>Where Artistry Knows No Bounds!</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="slide slide3 rounded-lg"
                style={{
                  backgroundImage: `url('https://i.ibb.co/t8jNWLP/wallpaperflare-com-wallpaper-2.jpg')`,
                  backgroundSize: "100% auto",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  height: "500px",
                }}
              >
                <div
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  className="absolute inset-0 flex flex-col justify-center items-center"
                >
                  <div className="text-2xl glass text-center md:text-3xl font-bold  p-5 rounded-lg text-white">
                    <div>Welcome to DrawNook!</div>
                    <p>Where Artistry Knows No Bounds!</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="slide slide1 rounded-lg"
                style={{
                  backgroundImage: `url(' https://i.ibb.co/3vyZKjk/9e762c05-bb5a-4651-87b6-94e7e65bca7a.jpg')`,
                  backgroundSize: "100% auto",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  height: "500px", 
                }}
              >
                <div
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  className="absolute inset-0 flex flex-col justify-center items-center"
                >
                  <div className="text-2xl glass text-center md:text-3xl font-bold  p-5 rounded-lg text-white">
                    <div>Welcome to DrawNook!</div>
                    <p>Where Artistry Knows No Bounds!</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </>
  );
};

export default Banner;

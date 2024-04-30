import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Fade } from "react-awesome-reveal";

const Banner = () => {
  return (
    <>
      <div className="my-5 rounded-lg overflow-hidden h-auto mx-5 lg:h-[500px]">
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
          <div className="max-w-6xl my-auto mx-auto">
            <SwiperSlide>
              <div
                className="slide slide1 rounded-lg bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://i.ibb.co/qmbh6fm/wallpaperflare-com-wallpaper.jpg')`,
                  height: "500px",
                }}
              >
                <div
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  className="absolute inset-0 flex flex-col justify-center items-center"
                >
                  <div className="text-2xl my-auto glass text-center md:text-3xl font-bold p-5 rounded-lg text-white">
                    <Fade cascade damping={0.1}>
                      <div>Welcome to DrawNook! <br />
                      Where Artistry Knows No Bounds!

                      </div>
                    </Fade>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="slide slide2 rounded-lg bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://i.ibb.co/qjF3d4P/squirrel-1245583-1920.jpg')`,
                  height: "500px",
                }}
              >
                <div
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  className="absolute inset-0 flex flex-col justify-center items-center"
                >
                  <div className="text-2xl glass text-center md:text-3xl font-bold p-5 rounded-lg text-white">
                    <Fade cascade damping={0.1}>
                      <div>Welcome to DrawNook!</div>
                      <p>Where Artistry Knows No Bounds!</p>
                    </Fade>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="slide slide3 rounded-lg bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://i.ibb.co/N1cGYjz/snail-83672-1280.jpg')`,
                  height: "500px",
                }}
              >
                <div
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  className="absolute inset-0 flex flex-col justify-center items-center"
                >
                  <div className="text-2xl glass text-center md:text-3xl font-bold p-5 rounded-lg text-white">
                    <Fade cascade damping={0.1}>
                      <div>Welcome to DrawNook!</div>
                      <p>Where Artistry Knows No Bounds!</p>
                    </Fade>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="slide slide1 rounded-lg bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://i.ibb.co/hfckxJq/easter-eggs-252874-1920.jpg')`,
                  height: "500px",
                }}
              >
                <div
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  className="absolute inset-0 flex flex-col justify-center items-center"
                >
                  <div className="text-2xl glass text-center md:text-3xl font-bold p-5 rounded-lg text-white">
                    <Fade cascade damping={0.1}>
                      <div>Welcome to DrawNook!</div>
                      <p>Where Artistry Knows No Bounds!</p>
                    </Fade>
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

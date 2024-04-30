import { GiJourney } from "react-icons/gi";
import { Typewriter } from "react-simple-typewriter";

const Timeline = () => {
  const handleDone = () => {
    console.log(`nonstop`);
  };
  return (
    <div>
      <div className="text-center md:text-right my-10">
        <p className="text-lg font-semibold text-pink-600 inline-block rounded py-1 px-2">
          <div className="flex items-center gap-2 text-1xl">
            <span className="bg-yellow-200 rounded-full text-pink-600 p-2">
              <GiJourney size={30} />
            </span>
            <Typewriter
                words={[" Our Journey!"]}
                loop={5}
                cursor
                cursorStyle="-"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
                onLoopDone={handleDone}
                // onType={handleType}
              />
           
          </div>
        </p>
        <p className="text-[32px] lg:text-[40px] font-semibold mb-3">
        <Typewriter
                words={["Journey at DrawNook"]}
                loop={5}
                cursor
                cursorStyle="-"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
                onLoopDone={handleDone}
                // onType={handleType}
              />
          
        </p>
      </div>
      <section className="dark:bg-gray-100 border-2 border-blue-100 dark:text-gray-800 mb-5 rounded-md">
        <h1
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="text-3xl font-bold text-center pt-5"
        ></h1>
        <div className="container max-w-5xl px-4 py-12 mx-auto">
          <div className="grid gap-4 mx-4 sm:grid-cols-12">
            <div className="col-span-12 sm:col-span-3">
              <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-violet-600">
                <h3 className="text-3xl font-semibold">Welcome to DrawNook</h3>
                <span className="text-sm font-bold tracking-wider uppercase dark:text-gray-600">
                  Your Artistic Journey Begins Here
                </span>
              </div>
            </div>
            <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
              <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-300">
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-600">
                  <h3 className="text-xl font-semibold tracking-wide">
                    Explore Your Creativity{" "}
                  </h3>
                  <time className="text-xs tracking-wide uppercase dark:text-gray-600">
                    2024
                  </time>
                  <p className="mt-3">
                    Unleash your imagination and let your brush strokes tell a
                    story. Dive into the world of colors with DrawNook.
                  </p>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-600">
                  <h3 className="text-xl font-semibold tracking-wide">
                    Learn and Grow
                  </h3>
                  <time className="text-xs tracking-wide uppercase dark:text-gray-600">
                    2024
                  </time>
                  <p className="mt-3">
                    With our curated tutorials and guides, step into the world
                    of art and design. Learn new techniques, improve your
                    skills, and grow as an artist.
                  </p>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-600">
                  <h3 className="text-xl font-semibold tracking-wide">
                    Join Our Community
                  </h3>
                  <time className="text-xs tracking-wide uppercase dark:text-gray-600">
                    2024
                  </time>
                  <p className="mt-3">
                    Become a part of DrawNook's vibrant community. Share your
                    artwork, get feedback, and draw inspiration from fellow
                    artists.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Timeline;

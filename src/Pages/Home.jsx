import { FaFireAlt } from "react-icons/fa";
import Banner from "../SubPages/Banner";
import CraftItems from "../SubPages/CraftItems";
import Reviews from "../SubPages/Reviews";
import Timeline from "../SubPages/Timeline";
import { baseURL } from "../hooks/url";
import { useEffect, useState } from "react";
import ArtCraftCategory from "../SubPages/ArtCraftCategory";
import { FaPaintbrush } from "react-icons/fa6";
import Subcategory from "../SubPages/Subcategory";
import { Typewriter } from "react-simple-typewriter";
import { DNA } from "react-loader-spinner";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [craftItems, setCraftItems] = useState([]);
  const [arts, setArts] = useState([]);
  const [subC, setSub] = useState([]);
  

  const handleDone = () => {
    console.log(`nonstop`);
  };

  useEffect(() => {
    //crafts
    fetch(`${baseURL}/crafts`)
      .then((res) => res.json())
      .then((data) => {
        setCraftItems(data);
        setLoading(false);
      });
    //arts
    fetch(`${baseURL}/arts`)
      .then((res) => res.json())
      .then((data) => setArts(data));

    //categories
    fetch(`${baseURL}/subcategories`)
      .then((res) => res.json())
      .then((data) => setSub(data));
  }, []);

  return (
    <>
      {/* banner */}
      <div>
        <Banner></Banner>
      </div>

      {/*instrument */}
      <>
        <div className="text-center md:text-right my-10">
          <p className="text-lg font-semibold text-pink-600 inline-block rounded py-1 px-2">
            <div className="flex items-center gap-2 text-1xl">
              <span className="bg-yellow-200 rounded-full text-pink-600 p-2">
                <FaFireAlt size={30} />
              </span>
              <Typewriter
                words={["Best Crafts!"]}
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
              words={["Craft items section"]}
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
        {/* grid grid-cols-5 gap-4  dark:bg-[#0F172A] */}
        <div className=" grid grid-cols-2 md:grid-cols-4 sm:grid-cols-3  xl:grid-cols-5 gap-5 mt-10 w-full mb-10">
          {loading && (
            <p className="flex justify-center items-center">
              render(
              <DNA
                visible={true}
                height="80"
                width="80"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
              />
              )
            </p>
          )}
          {craftItems?.map((craftItem) => (
            <CraftItems key={craftItem._id} craftItem={craftItem} />
          ))}
        </div>
      </>
      {/* draw and painting */}
      <>
        <div className="text-center md:text-left my-10">
          <p className="text-lg font-semibold text-pink-600 inline-block rounded py-1 px-2">
            <div className="flex items-center gap-2 text-1xl">
              <span className="bg-yellow-200 rounded-full text-pink-600 p-2">
                <FaPaintbrush size={30} />
              </span>
              <Typewriter
                words={[" Painting & Drawings!"]}
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
              words={["Art & Craft Categories Section"]}
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 lg:mx-0 mx-5 grid-cols-1 gap-5 lg:my-10">
          {arts.map((art) => (
            <ArtCraftCategory key={art._id} art={art}></ArtCraftCategory>
          ))}
        </div>
      </>

      {/* subcategories */}
      <div className="">
        {subC.map((sub, index) => (
          <Subcategory key={index} sub={sub} />
        ))}
      </div>

      {/* timeline */}
      <div>
        <Timeline></Timeline>
      </div>

      {/* review */}
      <div>
        <Reviews></Reviews>
      </div>
    </>
  );
};

export default Home;

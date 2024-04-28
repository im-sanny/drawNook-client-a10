import { FaFireAlt } from "react-icons/fa";
import Banner from "../SubPages/Banner";
import CraftItems from "../SubPages/CraftItems";
import Features from "../SubPages/Features";
import Reviews from "../SubPages/Reviews";
import Timeline from "../SubPages/Timeline";
import { baseURL } from "../hooks/url";
import { useEffect, useState } from "react";
import { DNA } from "react-loader-spinner";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [craftItems, setCraftItems] = useState([]);
  const [arts, setArts] = useState([]);

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
  }, []);

  return (
    <>
      {/* banner */}
      <div>
        <Banner></Banner>
      </div>

      {/*craft items */}
      <>
        <div className="text-center md:text-right my-10">
          <p className="text-lg font-semibold text-pink-600 inline-block rounded py-1 px-2">
            <div className="flex items-center gap-2 text-1xl">
              <span className="bg-yellow-200 rounded-full text-pink-600 p-2">
                <FaFireAlt size={30} />
              </span>
              Best Crafts!
            </div>
          </p>
          <p className="text-[32px] lg:text-[40px] font-semibold mb-3">
            Craft items section
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

      {/* feature */}
      <div>
        <Features></Features>
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

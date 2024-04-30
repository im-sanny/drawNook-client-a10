import { useState, useEffect } from "react";
import { baseURL } from "../hooks/url";
import { Typewriter } from "react-simple-typewriter";
import { FaFireAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Subcategory = () => {
  const handleDone = () => {
    console.log(`100`);
  };

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`${baseURL}/subcategory`)
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.error("Error fetching items:", error));
  }, []);
  console.log(items);

  return (
    <div>
      <div className="text-center md:text-left my-10">
        <p className="text-lg font-semibold text-pink-600 inline-block rounded py-1 px-2">
          <div className="flex items-center gap-2 text-1xl">
            <span className="bg-yellow-200 rounded-full text-pink-600 p-2">
              <FaFireAlt size={30} />
            </span>
            <Typewriter
              words={["Subcategories!"]}
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
            words={["Art & Craft Subcategory"]}
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
      <div className="my-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {items.map((item) => (
          <div key={item._id} item={item}>
            <div className="card bg-base-100 shadow-xl image-full">
              <figure>
                <img src={item.image} alt="" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.subcategory_Name}</h2>
                <p>{item.short_description}</p>
                <div className="card-actions justify-end">
                  <Link to={`cateDetails/${item._id}`}>
                  <button className="btn btn-primary text-center">
                    View Details
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Subcategory;

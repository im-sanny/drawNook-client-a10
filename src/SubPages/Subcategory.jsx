import { useState, useEffect } from "react";
import { baseURL } from "../hooks/url";
import { Typewriter } from "react-simple-typewriter";
import { FaFireAlt } from "react-icons/fa";

const Subcategory = () => {
  const handleDone = () => {
    console.log(`nonstop`);
  };

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`${baseURL}/subcategories`)
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
      <div className="my-10">
        <div className="card-container">
          {items.map((item) => (
            <div key={item._id} item={item} className="card">
              <img src={item.image} alt={item.name} />
              <div className="card-body">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>Price: ${item.price}</p>
                <p>Rating: {item.rating}</p>
                <p>Processing Time: {item.processingTime} days</p>
                <button>View Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Subcategory;

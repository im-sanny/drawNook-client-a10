/* eslint-disable react/no-unescaped-entities */
import { FaPaintbrush } from "react-icons/fa6";


const CraftItems = ({ craftItem }) => {
  const { item_name, image } = craftItem || {};
  return (
    <>
      <div className=" w-full group  cursor-pointer">
        <div className="cardShadow p-5 w-full bg-white dark:bg-base-200 rounded">
          <img
            className="w-full h-[150px] object-contain rounded-lg"
            src={image}
            alt=""
          />
          <div className=" w-full group-hover:bg-[#efa1b3] rounded h-10 mt-2 bg-[#B10DC9] flex justify-center items-center">
            <p className="text-center font-bold text-white flex items-center gap-1">
            <FaPaintbrush />
              {item_name}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CraftItems;

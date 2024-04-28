/* eslint-disable react/no-unescaped-entities */
import { GiPencilBrush } from "react-icons/gi";

const CraftItems = ({ craftItem }) => {
  const { item_name, image } = craftItem || {};
  console.log(craftItem);
  return (
    <>
      <div className=" w-full group  cursor-pointer">
        <div className="cardShadow p-5 w-full bg-white dark:bg-[#1a2641d5] rounded">
          <img
            className="w-full h-[150px] object-contain rounded-lg"
            src={image}
            alt=""
          />
          <div className="flex items-center my-1 gap-1 text-orange-300"><GiPencilBrush></GiPencilBrush>{item_name}</div>
          <div className=" w-full group-hover:bg-[#efa1b3] rounded h-10 mt-2 bg-[#B10DC9] flex justify-center items-center">
            <p className="text-center font-bold text-white">View Details</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CraftItems;

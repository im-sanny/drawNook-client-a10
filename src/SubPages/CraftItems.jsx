/* eslint-disable react/no-unescaped-entities */
import { FaPaintbrush } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const CraftItems = ({ craftItem }) => {
  const navigate = useNavigate();
  const {_id, item_name, image } = craftItem || {};

  return (
    <>
      <div className="border-yellow-50 border-2 rounded-md w-full group  cursor-pointer">
        <div className="cardShadow p-5 w-full dark:bg-gray-200 dark:text-gray-900 rounded">
          <img
            className="w-full h-[150px] object-contain rounded-lg"
            src={image}
            alt=""
          />
          <div className="flex justify-center">
            <p className="mt-2 font-bold badge badge-outline text-center flex items-center justify-center gap-1">
              <FaPaintbrush />
              {item_name}
            </p>
          </div>
          <div onClick={() => navigate(`/craftDetails/${_id}`)} className=" w-full group-hover:bg-[#f06d8b] rounded h-10 mt-2 bg-[#B10DC9] flex justify-center items-center text-white">
            View Details
          </div>
        </div>
      </div>
    </>
  );
};

export default CraftItems;

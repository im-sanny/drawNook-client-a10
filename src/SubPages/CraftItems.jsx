/* eslint-disable react/prop-types */
import { FaPaintbrush } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

const CraftItems = ({ craftItem }) => {
  const navigate = useNavigate();
  const { _id, item_name, image } = craftItem || {};

  const handleViewDetails = () => {
    navigate(`/craftDetails/${_id}`);
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <div className="relative">
        {image ? (
          <img
            src={image}
            alt={item_name}
            className="w-full h-48 object-cover"
          />
        ) : (
          <div className="w-full h-48 bg-gray-200 flex justify-center items-center">
            <FaPaintbrush className="text-gray-500 text-4xl" />
          </div>
        )}
        <div className="absolute top-0 right-0 m-2 bg-purple-600 text-white px-2 py-1 rounded-full text-sm">
          Craft Item
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 truncate">
          {item_name || 'Unnamed Craft'}
        </h3>

        <button
          onClick={handleViewDetails}
          className="w-full bg-[#B10DC9] hover:bg-[#f06d8b] text-white font-bold py-2 px-4 rounded-md transition-colors duration-300 flex items-center justify-center space-x-2"
        >
          <FaPaintbrush />
          <span>View Details</span>
        </button>
      </div>
    </div>
  );
};

export default CraftItems;

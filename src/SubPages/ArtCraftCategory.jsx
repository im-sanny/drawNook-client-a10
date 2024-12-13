/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import { Eye, Star, CheckCircle } from 'lucide-react';

const ArtCraftCategory = ({ art }) => {
  const navigate = useNavigate();
  const { _id, name, imageURL, stockStatus, rating, description } = art || {};

  return (
    <div className="group relative overflow-hidden rounded-xl dark:bg-white shadow-lg transition-all duration-300 hover:shadow-xl bg-gray-800">
      <div className="relative">
        <img
          src={imageURL}
          alt={name}
          className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-4 right-4 flex space-x-2">
          {stockStatus === 'In Stock' ? (
            <span className="flex items-center rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800">
              <CheckCircle className="mr-1 h-4 w-4" />
              {stockStatus}
            </span>
          ) : (
            <span className="flex items-center rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-800">
              Out of Stock
            </span>
          )}
          <span className="flex items-center rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-800">
            <Star className="mr-1 h-4 w-4 text-yellow-500" />
            {rating}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h2 className="mb-2 text-xl font-bold text-white dark:text-black">
          {name}
        </h2>
        <p className="mb-4 text-sm line-clamp-3">{description}</p>

        <button
          onClick={() => navigate(`/details/${_id}`)}
          className="group relative flex w-full items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 text-white transition-all duration-300 hover:bg-indigo-700"
        >
          <Eye className="mr-2 h-5 w-5 transition-transform group-hover:rotate-6" />
          View Details
        </button>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
    </div>
  );
};

export default ArtCraftCategory;

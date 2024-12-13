import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaFireAlt, FaStar, FaTags } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';
import { baseURL } from '../hooks/url';

const Subcategory = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSubcategories = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`${baseURL}/subcategory`);

        if (!response.ok) {
          throw new Error('Failed to fetch subcategories');
        }

        const data = await response.json();
        setItems(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching items:', error);
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchSubcategories();
  }, []);

  const renderHeader = () => (
    <div className="text-center md:text-left mb-10 space-y-4">
      <div className="flex items-center justify-center md:justify-start gap-3">
        <span className="bg-yellow-200 rounded-full text-pink-600 p-2">
          <FaFireAlt size={30} />
        </span>
        <p className="text-lg font-semibold text-pink-600 inline-block">
          <Typewriter
            words={['Subcategories!']}
            loop={5}
            cursor
            cursorStyle="-"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </p>
      </div>
      <h1 className="text-3xl lg:text-4xl font-bold">
        <Typewriter
          words={['Art & Craft Subcategory']}
          loop={5}
          cursor
          cursorStyle="-"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h1>
    </div>
  );

  const renderLoadingState = () => (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 animate-pulse">
      {[...Array(4)].map((_, index) => (
        <div key={index} className="bg-gray-200 rounded-lg h-96"></div>
      ))}
    </div>
  );

  const renderErrorState = () => (
    <div className="text-center py-10 bg-red-50 rounded-lg">
      <p className="text-red-600 text-xl">
        {error || 'Failed to load subcategories'}
      </p>
    </div>
  );

  const renderSubcategoryCard = (item) => (
    <div
      key={item._id}
      className="transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
    >
      <Link to={`cateDetails/${item._id}`}>
        <div className="bg-white rounded-xl overflow-hidden shadow-md relative">
          <div className="relative h-56 overflow-hidden">
            <img
              src={item.image}
              alt={item.subcategory_Name}
              className="w-full h-full object-cover absolute inset-0 transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black opacity-30"></div>
          </div>

          <div className="p-4 bg-gray-800 dark:bg-white">
            <h2 className="text-xl font-bold mb-2 truncate text-white dark:text-black">
              {item.subcategory_Name}
            </h2>

            <p className="line-clamp-2 mb-4">{item.short_description}</p>

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2 text-yellow-500">
                <FaStar />
                <span className="font-semibold">{item.rating}</span>
              </div>

              <div className="flex items-center gap-2 text-green-600">
                <FaTags />
                <span className="font-bold">${item.price}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      {renderHeader()}

      {isLoading ? (
        renderLoadingState()
      ) : error ? (
        renderErrorState()
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {items.length > 0 ? (
            items.map(renderSubcategoryCard)
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No subcategories found
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Subcategory;

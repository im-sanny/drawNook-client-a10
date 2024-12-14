/* eslint-disable react/prop-types */
import { useLoaderData, useParams } from 'react-router-dom';
import { ShoppingCart, Star, Clock, Box, Palette } from 'lucide-react';

const CraftDetails = () => {
  const craftDetails = useLoaderData();
  const { id } = useParams();
  const craft = craftDetails.find((craftDetail) => craftDetail._id === id);

  if (!craft) {
    return (
      <div className="container mx-auto p-6 text-center text-2xl">
        Craft not found
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Promotional Banner */}
      <div className="bg-violet-600 text-white rounded-lg p-6 mb-8 shadow-lg">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <h2 className="text-4xl font-bold mb-4 md:mb-0 text-center md:text-left">
            Up to <span className="text-yellow-300">50% Off</span>
          </h2>
          <div className="flex flex-col items-center">
            <p className="mb-2">Use Promo Code:</p>
            <span className="bg-white text-violet-600 px-4 py-2 rounded-md font-bold tracking-wider">
              DRAWNOOK
            </span>
          </div>
          <button className="mt-4 md:mt-0 bg-white text-violet-600 hover:bg-violet-100 px-6 py-3 rounded-md transition duration-300 flex items-center">
            <ShoppingCart className="mr-2" /> Order Now
          </button>
        </div>
      </div>

      {/* Craft Details */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Image Section */}
        <div className="relative">
          <img
            src={craft.image}
            alt={craft.item_name}
            className="w-full rounded-lg shadow-lg object-cover max-h-[500px]"
          />
        </div>

        {/* Details Section */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">
            {craft.item_name}
          </h1>

          <p className="text-gray-600 mb-6">{craft.short_description}</p>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <DetailItem
              icon={<Star className="text-yellow-500" />}
              label="Rating"
              value={craft.rating}
            />
            <DetailItem
              icon={<Box className="text-blue-500" />}
              label="Stock Status"
              value={craft.stock_status}
            />
            <DetailItem
              icon={<Clock className="text-green-500" />}
              label="Processing Time"
              value={craft.processing_time}
            />
            <DetailItem
              icon={<Palette className="text-purple-500" />}
              label="Customization"
              value={craft.customization}
            />
          </div>

          <div className="flex justify-between items-center">
            <div>
              <span className="text-2xl font-bold text-violet-600">
                {craft.price}
              </span>
              <p className="text-gray-500">
                Subcategory: {craft.subcategory_name}
              </p>
            </div>
            <button
              className="bg-violet-600 text-white hover:bg-violet-700 px-6 py-3 rounded-md transition duration-300 flex items-center"
            >
              <ShoppingCart className="mr-2" /> Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper component for detail items
const DetailItem = ({ icon, label, value }) => (
  <div className="flex items-center space-x-3 bg-gray-100 p-3 rounded-lg">
    {icon}
    <div>
      <p className="text-sm text-gray-600">{label}</p>
      <p className="font-semibold">{value}</p>
    </div>
  </div>
);

export default CraftDetails;

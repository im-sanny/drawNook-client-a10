/* eslint-disable react/prop-types */
import { BiSolidCustomize } from 'react-icons/bi';
import { FaStar } from 'react-icons/fa';
import { GrStorage } from 'react-icons/gr';
import { MdAccessTimeFilled } from 'react-icons/md';
import { TbPencilDollar } from 'react-icons/tb';
import { ShoppingCart, Heart } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';
import { useLoaderData, useParams } from 'react-router-dom';

// Detail Item Component
const DetailItem = ({ icon, label, value }) => (
  <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
    <div className="text-xl text-blue-600">{icon}</div>
    <div>
      <p className="text-sm text-gray-600">{label}</p>
      <p className="font-semibold text-gray-800">
        {typeof value === 'boolean' ? (value ? 'Yes' : 'No') : value}
      </p>
    </div>
  </div>
);

const CateDetails = () => {
  const details = useLoaderData();
  const { id } = useParams();
  const service = details.find((detail) => detail._id === id);

  const handleAddToCart = () => {
    toast.error('Cart feature not available yet', {
      duration: 4000,
      position: 'top-right',
      style: {
        background: '#ff6b6b',
        color: 'white',
      },
    });
  };

  const handleFavorite = () => {
    toast.success('Added to favorites', {
      duration: 4000,
      position: 'top-right',
      style: {
        background: '#4caf50',
        color: 'white',
      },
    });
  };

  if (!service) {
    return <div className="text-center text-2xl mt-10">Item not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <Toaster />

      <div className="max-w-6xl mx-auto bg-white dark:bg-gray-900 shadow-2xl rounded-2xl overflow-hidden">
        <div className="grid lg:grid-cols-12 gap-8 p-8">
          {/* Image Section */}
          <div className="lg:col-span-7 relative">
            <img
              src={service.image}
              alt={service.item_name}
              className="w-full h-[500px] object-cover rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105"
            />
            <button
              onClick={handleFavorite}
              className="absolute top-4 right-4 bg-white/70 p-3 rounded-full hover:bg-white/90 transition-all duration-300"
            >
              <Heart className="text-red-500" />
            </button>
          </div>

          {/* Details Section */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-300 mb-4">
                {service.item_name}
              </h2>
              <p className="text-gray-500 mb-4">
                Published on:{' '}
                {new Date().toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {service.description}
              </p>
            </div>

            {/* Service Details Grid */}
            <div className="grid md:grid-cols-2 gap-4">
              <DetailItem
                label="Price"
                value={`$${service.price}`}
                icon={<TbPencilDollar />}
              />
              <DetailItem
                label="Rating"
                value={service.rating}
                icon={<FaStar />}
              />
              <DetailItem
                label="Customization"
                value={service.customization}
                icon={<BiSolidCustomize />}
              />
              <DetailItem
                label="Processing Time"
                value={service.processingTime}
                icon={<MdAccessTimeFilled />}
              />
              <DetailItem
                label="Subcategory"
                value={service.subcategory_Name}
                icon={<GrStorage />}
              />
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4 mt-6">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center"
              >
                <ShoppingCart className="mr-2" /> Add to Cart
              </button>
              <button className="flex-1 bg-gray-100 text-gray-800 py-3 px-6 rounded-lg hover:bg-gray-200 transition-colors duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CateDetails;

/* eslint-disable react/prop-types */
import { BiSolidCustomize } from 'react-icons/bi';
import { FaStar } from 'react-icons/fa';
import { GrStorage } from 'react-icons/gr';
import { MdAccessTimeFilled } from 'react-icons/md';
import { TbPencilDollar } from 'react-icons/tb';
import { useLoaderData, useParams } from 'react-router-dom';

// Service Detail Component
const ServiceDetail = ({ label, value, icon }) => (
  <p className="flex items-center gap-2 mb-2">
    {icon}
    <span className="font-bold">{label}: </span>
    {typeof value === 'boolean' ? (value ? 'Yes' : 'No') : value}
  </p>
);

const Details = () => {
  const details = useLoaderData();
  const { id } = useParams();
  const service = details.find((detail) => detail._id === id);

  if (!service) {
    return <div className="text-center text-2xl mt-10">Service not found</div>;
  }

  return (
    <div className="container mx-auto px-4 my-10">
      <section className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-6 p-6">
          <div className="lg:order-2">
            <img
              src={service.imageURL}
              alt={service.name}
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>
          <div className="lg:order-1 space-y-4">
            <h2 className="text-4xl font-bold mb-4">{service.name}</h2>
            <p className="text-gray-600 mb-4">
              {new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
            <p className="text-xl mb-6">{service.description}</p>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <ServiceDetail
                  label="Price"
                  value={`$${service.price}`}
                  icon={<TbPencilDollar />}
                />
                <ServiceDetail
                  label="Rating"
                  value={service.rating}
                  icon={<FaStar />}
                />
                <ServiceDetail
                  label="Customization"
                  value={service.customization}
                  icon={<BiSolidCustomize />}
                />
              </div>
              <div>
                <ServiceDetail
                  label="Processing Time"
                  value={service.processingTime}
                  icon={<MdAccessTimeFilled />}
                />
                <ServiceDetail
                  label="Stock Status"
                  value={service.stockStatus}
                  icon={<GrStorage />}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Details;

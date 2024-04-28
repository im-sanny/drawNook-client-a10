import { useLoaderData, useParams } from "react-router-dom";
import { TbPencilDollar } from "react-icons/tb";
import { FaStar } from "react-icons/fa";
import { BiSolidCustomize } from "react-icons/bi";
import { MdAccessTimeFilled } from "react-icons/md";
import { GrStorage } from "react-icons/gr";

const Details = () => {
  const details = useLoaderData();
  const { id } = useParams();
  const idInt = id; // No need to parse the id
  const service = details.find((detail) => detail._id === idInt); // Compare with _id
  console.log(service);
  return (
    <div>
      <section className="dark:bg-gray-100 dark:text-gray-800 rounded-md">
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12 my-5">
          <div
            rel="noopener noreferrer"
            href="#"
            className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50 rounded-md"
          >
            <img
              src={service.imageURL}
              alt=""
              className="object-cover object-center w-full h-64 sm:h-96 lg:col-span-7 p-5  rounded-md"
            />
            <div className="p-6 space-y-2 lg:col-span-5">
              <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
                {service.name}
              </h3>
              <span className="dark:text-gray-600">
                {new Date().toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <p className="text-2xl">{service.description}</p>
              <div>
                <div className="">
                  <p className="flex items-center gap-2">
                    <TbPencilDollar></TbPencilDollar>
                    <span className="font-bold">Price:</span> ${service.price}
                  </p>
                  <p className="flex items-center gap-2">
                    <FaStar></FaStar>
                    <span className="font-bold">Rating:</span> {service.rating}{" "}
                  </p>
                </div>
                <div className="">
                  <p className="flex items-center gap-2">
                    <BiSolidCustomize />
                    <span className="font-bold">Customization: </span>
                    {service.customization ? "Yes" : "No"}
                  </p>
                  <p className="flex items-center gap-2">
                    {" "}
                    <MdAccessTimeFilled></MdAccessTimeFilled>
                    <span className="font-bold">Processing Time:</span>{" "}
                    {service.processingTime}
                  </p>
                </div>
                <div className="">
                  <p className="flex items-center gap-2">
                    <GrStorage></GrStorage>
                    <span className="font-bold">Stock Status: </span>{" "}
                    {service.stockStatus}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Details;

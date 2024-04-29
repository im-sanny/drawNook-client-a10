import { useLoaderData, useParams } from "react-router-dom";

const CraftDetails = () => {
  const craftDetails = useLoaderData();
  const { id } = useParams();
  const idInt = id;
  const craft = craftDetails.find((craftDetail) => craftDetail._id === idInt);

  return (
    <div>
      <div className="p-6 py-12 dark:bg-violet-600 border-x-2 border-violet-600 dark:text-gray-50 mt-5">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <h2 className="text-center text-6xl tracking-tighter font-bold">
              Up to
              <br className="sm:hidden" />
              50% Off
            </h2>
            <div className="space-x-2 text-center py-2 lg:py-0">
              <span>Plus free shipping! Use code:</span>
              <span className="font-bold text-lg">DRAWNOOK</span>
            </div>
            <a
              href="#"
              rel="noreferrer noopener"
              className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block dark:bg-gray-900 dark:text-gray-50 dark:border-gray-600"
            >
              Order Now
            </a>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1200"
        className="mx-auto p-5 lg:p-16 md:p-16 bg-blue-50 rounded-lg my-5"
      >
        <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded-lg">
          <img
            data-aos="zoom-in"
            data-aos-delay="1000"
            src={craft.image}
            alt=""
            className="w-full h-60 sm:h-96 dark:bg-gray-500 rounded-lg"
          />
          <div
            data-aos="zoom-in"
            data-aos-delay="1200"
            className="p-6 pb-6 m-4 mx-auto glass -mt-16 space-y-2 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md"
          >
            <div className="space-y-2">
              <a
                rel="noopener noreferrer"
                href="#"
                className="inline-block dark:text-gray-800 text-2xl font-semibold sm:text-3xl"
              >
                {craft.item_name}
              </a>
              <div className="flex dark:text-gray-800 font-bold gap-2 lg:gap-2 mt-2">
                {craft.short_description}
              </div>
            </div>

            <div className="dark:text-gray-800">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-">
                <div className="flex font-bold gap-2 lg:gap-2 mt-2">
                  Price
                  <span className=" text-blue-500 font-normal">
                    {craft.price}
                  </span>
                </div>
                <div className="flex font-bold gap-2 lg:gap-2 mt-2">
                  Rating:
                  <span className=" text-blue-500 font-normal">
                    {craft.rating}
                  </span>
                </div>
                <div className="flex font-bold gap-2 lg:gap-2 mt-2">
                  Customization:
                  <span className=" text-blue-500 font-normal">
                    {craft.customization}
                  </span>
                </div>
              </div>
              <div className="flex font-bold gap-2 lg:gap-2 mt-2">
                Subcategory Name:
                <span className=" text-blue-500 font-normal">
                  {craft.subcategory_name}
                </span>
              </div>
              <div className="flex font-bold gap-2 lg:gap-2 mt-2">
                Processing Time:
                <span className=" text-blue-500 font-normal">
                  {craft.processing_time}
                </span>
              </div>

              <p className="flex font-bold items-center gap-1 lg:gap-2">
                <span className="">Stock Status:</span>
                <span className="text-blue-500 font-normal">
                  {craft.stock_status}{" "}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CraftDetails;

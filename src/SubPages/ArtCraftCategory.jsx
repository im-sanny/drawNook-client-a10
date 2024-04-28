/* eslint-disable react/no-unknown-property */
import { Card, CardHeader, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const ArtCraftCategory = ({ art }) => {
  const {
    _id,
    name,
    imageURL,
    price,
    stockStatus,
    rating,
    description,
  } = art || {};
  return (
    <>
      <div>
        <div>
          <Card
            data-aos="fade-up"
            data-aos-duration="1000"
            className="px-4 pb-4 bg-base-300 rounded-lg h-full"
          >
            <CardHeader
              shadow={false}
              floated={false}
              className="h-56 rounded-lg"
            >
              <img
                src={imageURL}
                alt="card-image"
                className="h-full w-full object-cover"
              />
            </CardHeader>
            <div className="px-4">
              <div className="card-actions justify mt-2">
                <div className="badge badge-outline">
                  <span className="font-bold mr-1"> Stock status:</span>
                  {stockStatus}
                </div>
                <div className="badge badge-outline">
                  <span className="font-bold mr-1">Rating:</span>
                  {rating}
                </div>
              </div>
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <Typography
                    color="text-green-600"
                    className="font-medium text-green-500"
                  >
                    {name}
                  </Typography>
                  <Typography color="blue-gray" className="font-medium">
                    ${price} per piece
                  </Typography>
                </div>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal opacity-75 lg:h-20 items-stretch"
                >
                  {description}
                </Typography>
              </div>
              <div className=" flex justify-center ">
                <Link to={`/cardDetails/${_id}`}>
                  <a
                    href="#_"
                    className="relative inline-flex items-center px-12 py-1 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-200 rounded-lg hover:text-white group hover:bg-gray-50"
                  >
                    <span className="absolute left-0 block w-full h-0 transition-all bg-purple-400 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                    <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </span>
                    <span className="relative flex justify-center gap-1 items-center">
                      {/* <MdOutlinePageview
                    size={20}
                    className="flex justify-center items-center"
                  ></MdOutlinePageview> */}
                      View Details
                    </span>
                  </a>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default ArtCraftCategory;

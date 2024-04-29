import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";

const MyArtAndCraftList = () => {
  const { user } = useAuth() || {};
  const [items, setItems] = useState([]);
  const [filterValue, setFilterValue] = useState("all"); // Default value for filter

  useEffect(() => {
    fetch(`http://localhost:5000/myCraft/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, [user]);


  const handleFilterChange = (e) => {
    setFilterValue(e.target.value);
  };

  const filteredItems =
    filterValue === "all"
      ? items
      : items.filter((item) => {
          if (filterValue === "yes") {
            return item.customization === true;
          } else if (filterValue === "no") {
            return item.customization === false;
          } else {
            return true;
          }
        });

  return (
    <>
      {/* Filter dropdown */}
      <div className="mb-4 flex justify-center my-4">
        <div className="bg-base-200 p-4 rounded-lg">
          <label htmlFor="filter" className="mr-2 text-gray-700">
            Filter by Customization:
          </label>
          <select
            id="filter"
            value={filterValue}
            onChange={handleFilterChange}
            className="border border-gray-300 rounded-md px-4 py-1 focus:outline-none focus:border-blue-500"
          >
            <option value="all">All</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
      </div>

      {/* List of items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <div key={item._id} className="bg-white shadow-md rounded-lg p-4">
              <img
                src={item.imageURL}
                alt={item.name}
                className="w-full h-56 object-cover mb-4 rounded-md"
              />
              <h1 className="text-xl font-semibold">{item.itemName}</h1>
              <div className="flex justify-between">
                <p className="text-gray-600 mb-2">Price: ${item.price}</p>
                <p className="text-gray-600 mb-2">Rating: {item.rating}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-600 mb-2">
                  Customization: {item.customization === "yes" ? "Yes" : "No"}
                </p>
                <p className="text-gray-600 mb-2">
                  Stock Status: {item.status}
                </p>
              </div>
              <div className="space-y-2">
                <Link to={`/updateCraft/${item._id}`}>
                  <button className="btn w-full">Update</button>
                </Link>
                <button className="btn w-full">Delete</button>
              </div>
            </div>
          ))
        ) : (
          <p>No items found</p>
        )}
      </div>
    </>
  );
};

export default MyArtAndCraftList;

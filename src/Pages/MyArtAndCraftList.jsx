import { useState, useEffect } from "react";
// import { getMyArtAndCrafts } from "./api"; // You need to implement an API function to fetch the user's arts & crafts data

const MyArtAndCraftList = () => {
  const [artsAndCrafts, setArtsAndCrafts] = useState([]);
  const [filterCustomization, setFilterCustomization] = useState("all"); // State for filtering based on customization

//   useEffect(() => {
//     // Fetch the user's arts & crafts data
//     const fetchData = async () => {
//       const data = await getMyArtAndCrafts(); // Implement this function to fetch data from the backend
//       setArtsAndCrafts(data);
//     };

//     fetchData();
//   }, []);

  // Function to handle filter change
  const handleFilterChange = (e) => {
    setFilterCustomization(e.target.value);
  };

  // Filter the arts & crafts based on the selected customization option
  const filteredArtsAndCrafts = artsAndCrafts.filter((item) => {
    if (filterCustomization === "all") {
      return true;
    } else {
      return item.customization === filterCustomization;
    }
  });

  return (
    <div>
      {/* Dropdown for filtering */}
      <div className="my-4 flex justify-center">
        <label htmlFor="customizationFilter">Filter by Customization:</label>
        <select
          id="customizationFilter"
          value={filterCustomization}
          onChange={handleFilterChange}
          className="ml-2 p-2 border rounded-md focus:outline-[#FF497C]"
        >
          <option value="all">All</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>

      {/* Display art & craft cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredArtsAndCrafts.map((item) => (
          <div key={item.id} className="border p-4">
            {/* Display card information */}
            <img src={item.image} alt={item.item_name} className="mb-2" />
            <p>
              <strong>Item Name:</strong> {item.item_name}
            </p>
            <p>
              <strong>Price:</strong> {item.price}
            </p>
            <p>
              <strong>Rating:</strong> {item.rating}
            </p>
            <p>
              <strong>Customization:</strong> {item.customization}
            </p>
            <p>
              <strong>Stock Status:</strong> {item.stockStatus}
            </p>
            {/* Update and Delete buttons */}
            <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
              Update
            </button>
            <button className="bg-red-500 text-white px-4 py-2 rounded">
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyArtAndCraftList;

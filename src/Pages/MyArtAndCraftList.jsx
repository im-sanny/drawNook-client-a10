import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyArtAndCraftList = () => {
  const { user } = useAuth() || {};
  const [items, setItems] = useState([]);
  const [control, setControl] = useState(false);
  const [filterValue, setFilterValue] = useState("all"); // Default value for filter

  useEffect(() => {
    fetch(`baseURL/myCraft/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, [user, control]);

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this item!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`baseURL/delete/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              setControl(!control);
            }
          });
        Swal.fire(
          'Deleted!',
          'Your item has been deleted.',
          'success'
        );
      }
    });
  };

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
        className="border border-gray-300 rounded-md px-4 py-1 focus:outline-none focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300"
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
        <div
          key={item._id}
          className="bg-white shadow-md rounded-lg p-4 dark:bg-gray-400 dark:text-white"
        >
          <img
            src={item.imageURL}
            alt={item.name}
            className="w-full h-56 object-cover mb-4 rounded-md"
          />
          <h1 className="text-xl font-semibold text-gray-400 dark:text-white">
            {item.itemName}
          </h1>
          <div className="flex justify-between">
            <p className="text-gray-700 mb-2">Price: ${item.price}</p>
            <p className="text-gray-700 mb-2">Rating: {item.rating}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-700 mb-2">
              Customization:{" "}
              {item.customization === "yes" ? "Yes" : "No"}
            </p>
            <p className="text-gray-700 mb-2">Stock Status: {item.status}</p>
          </div>
          <div className="space-y-2">
            <Link to={`/updateCraft/${item._id}`}>
              <button className="btn w-full">Update</button>
            </Link>
            <button
              onClick={() => handleDelete(item._id)}
              className="btn w-full"
            >
              Delete
            </button>
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

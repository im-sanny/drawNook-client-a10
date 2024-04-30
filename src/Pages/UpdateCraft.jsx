import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCraft = () => {
  const { id } = useParams();
  console.log(id);
  const [art, setArt] = useState({});

  useEffect(() => {
    fetch(`https://b9-a10-server-nu.vercel.app/singleArt/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setArt(data);
        console.log(data);
      });
  }, [id]);

  const handleUpdate = (event) => {
    event.preventDefault();

    const itemName = event.target.itemName.value;
    const price = event.target.price.value;
    const subcategory = event.target.subcategory.value;
    const imageURL = event.target.imageURL.value;
    const customization = event.target.customization.value;
    const status = event.target.status.value;
    const processingTime = event.target.processingTime.value;
    const rating = event.target.rating.value;
    const description = event.target.description.value;

    const info = {
      itemName,
      price,
      subcategory,
      imageURL,
      customization,
      status,
      processingTime,
      rating,
      description,
    };

    fetch(`https://b9-a10-server-nu.vercel.app/updateArt/${id}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(info),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to update item");
        }
        return res.json();
      })
      .then((data) => {
        Swal.fire({
          icon: "success",
          title: "Update Successful",
          text: "Your item has been successfully updated.",
        });
        console.log(data);
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Update Failed",
          text: "Failed to update item. Please try again later.",
        });
        console.error("Error:", error);
      });
  };

  return (
    <div className="gadgetContainer pt-10">
      <div className="shadow-lg p-5 border rounded-md mb-10 dark:bg-[#1a2641d5]">
        {/* Heading */}
        <div className="mt-5 mb-8">
          <p className="text-center text-3xl font-semibold">
            <span className="mr-3 text-[#FF497C]">
              <i className="bx bxs-alarm-add"></i>
            </span>
            <span className="dark:text-white">Add Your Crafts & Drawing</span>
          </p>
        </div>
        {/* form */}
        <form onSubmit={handleUpdate}>
          <div className="flex gap-8">
            <div className="flex-1">
              <label
                className="block mt-4 mb-2 dark:text-white"
                htmlFor="subcategory"
              >
                Subcategory Name
              </label>
              <select
                name="subcategory"
                id="subcategory"
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
              >
                <option value="" disabled selected hidden>
                  Select a Category
                </option>
                <option value="Landscape Painting">Landscape Painting</option>
                <option value="Pencil Sketch Portrait">
                  Pencil Sketch Portrait
                </option>
                <option value="Watercolor Portrait">Watercolor Portrait</option>
                <option value="Oil Painting">Oil Painting</option>
                <option value="Charcoal Sketching">Charcoal Sketching</option>
                <option value="Cartoon Drawing">Cartoon Drawing</option>
              </select>

              <label
                className="block mt-4 mb-2 dark:text-white"
                htmlFor="customization"
              >
                Customization
              </label>
              <select
                name="customization"
                id="customization"
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
              >
                <option value="" disabled selected hidden>
                  Select an option
                </option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>

              <label
                className="block mt-4 mb-2 dark:text-white"
                htmlFor="status"
              >
                Stock Status
              </label>
              <select
                name="status"
                id="status"
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
              >
                <option value="" disabled selected hidden>
                  Select an option
                </option>
                <option value="In stock">In stock</option>
                <option value="Made to Order">Made to Order</option>
              </select>

              <label
                className="block mt-4 mb-2 dark:text-white"
                htmlFor="itemName"
              >
                Item Name
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Item Name"
                id="itemName"
                name="itemName"
              />
            </div>
            {/* Right side */}
            <div className="flex-1">
              <label
                className="block mt-4 mb-2 dark:text-white"
                htmlFor="image"
              >
                Image
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Enter Image URL"
                id="image"
                name="imageURL"
              />

              <label
                className="block mb-2 mt-4 dark:text-white"
                htmlFor="price"
              >
                Price
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Enter Price"
                id="price"
                name="price"
              />

              <label className="block mb-2 mt-4 dark:text-white" htmlFor="time">
                Processing Time
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Enter time"
                id="time"
                name="processingTime"
              />

              <label
                className="block mt-4 mb-2 dark:text-white"
                htmlFor="rating"
              >
                Rating
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                maxLength={5}
                max={5}
                min={0}
                type="number"
                placeholder="Enter Rating"
                id="rating"
                name="rating"
              />
            </div>
          </div>
          <div>
            <label
              className="block mt-4 mb-2 dark:text-white"
              htmlFor="description"
            >
              Description
            </label>
            <input
              className="w-full p-4 border rounded-md focus:outline-[#FF497C]"
              type="text"
              placeholder="Enter Description"
              id="description"
              name="description"
            />
          </div>

          <input
            className="px-4 w-full py-2 mt-4 rounded hover:bg-blue-400 bg-blue-600 duration-200 text-white cursor-pointer font-semibold"
            type="submit"
            value="Update"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateCraft;

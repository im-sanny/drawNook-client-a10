import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateCraft = () => {
  const { id } = useParams();
  console.log(id);
  const [art, setArt] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/singleArt/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setArt(data);
        console.log(data);
      });
  }, [id]);

  const handleUpdate = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const itemName = event.target.itemName.value;
    const price = event.target.price.value;
    const info = { name, itemName, price };
    fetch(`http://localhost:5000/updateArt/${id}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl text-center font-bold mb-4">
        Update Art & Craft Item
      </h2>
      <form onSubmit={handleUpdate}>
        {/* Input fields for each data point */}
        {/* Example: */}
        <label className="block mb-2 dark:text-white" htmlFor="name">
          User Name
        </label>
        <input
          className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
          type="text"
          placeholder="User Name"
          id="name"
          name="name"
          defaultValue={art.name}
        />

        <label className="block mt-4 mb-2 dark:text-white" htmlFor="itemName">
          Item Name
        </label>
        <input
          className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
          type="text"
          placeholder="Item Name"
          id="itemName"
          name="itemName"
          defaultValue={art.itemName}
        />

        <label className="block mb-2 mt-4 dark:text-white" htmlFor="price">
          Price
        </label>
        <input
          className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
          type="text"
          placeholder="Enter Price"
          id="price"
          name="price"
          defaultValue={art.price}
        />

        {/* Add more input fields for other data points */}

        <input
          className="px-4 w-full py-2 mt-4 rounded hover:bg-blue-400 bg-blue-600 duration-200 text-white cursor-pointer font-semibold"
          type="submit"
          value="Update Art"
        />
      </form>
    </div>
  );
};

export default UpdateCraft;

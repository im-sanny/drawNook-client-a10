import useAuth from "../hooks/useAuth";

const AddCraft = () => {
  const { user } = useAuth()
  const handleAddArt = (event) => {
    event.preventDefault();
    const email = user.email;
    const form = event.target;
    const name = form.name.value;
    const itemName = form.itemName.value;
    const subcategory = form.subcategory.value;
    const customization = form.customization.value === "yes" ? true : false;
    const description = form.description.value;
    // const email = form.email.value;
    const imageURL = form.image.value;
    const price = parseFloat(form.price.value);
    const status = form.status.value;
    const processingTime = form.time.value;
    const rating = parseFloat(form.rating.value);

    const allForm = {
      name,
      email,
      subcategory,
      imageURL,
      customization,
      price,
      status,
      itemName,
      processingTime,
      rating,
      description,
    };
    fetch("http://localhost:5000/addCraft", {
      method:"POST",
      headers:{"Content-type" : "application/json" },
      body: JSON.stringify(allForm)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })
    console.log(allForm);
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
        <form onSubmit={handleAddArt}>
          <div className="flex gap-8">
            <div className="flex-1">
              <label className="block mb-2 dark:text-white" htmlFor="name">
                User Name
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="User Name"
                id="name"
                name="name"
              />

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
              <label className="block mb-2 dark:text-white" htmlFor="email">
                Email
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="email"
                placeholder="Email"
                id="email"
                name="email"
              />

              <label className="block mt-4 mb-2 dark:text-white" htmlFor="image">
                Image
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Enter Image URL"
                id="image"
                name="image"
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
                name="time"
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
            value="Add"
          />
        </form>
      </div>
    </div>
  );
};

export default AddCraft;

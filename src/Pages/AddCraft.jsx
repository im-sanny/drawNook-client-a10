const AddCraft = () => {
    const handleAddProduct = (event) => {
      event.preventDefault();
      // Logic for handling form submission
    };
  
    return (
      <div>
        <div className="gadgetContainer pt-10">
          <div className="shadow-lg p-5 border rounded-md mb-10 dark:bg-[#1a2641d5]">
            {/* Heading */}
            <div className="mt-5 mb-8">
              <p className="text-center text-3xl font-semibold">
                <span className="mr-3 text-[#FF497C]">
                  <i className="bx bxs-alarm-add"></i>
                </span>
                <span className="dark:text-white">
                  <span className="text-[#3bbcea]">
                    {/* {update ? "Update " : "Add "} */}
                  </span>
                  Your Painting and Drawing
                </span>
              </p>
            </div>
            {/* form */}
            <form onSubmit={handleAddProduct}>
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
                    className="block mb-2 dark:text-white"
                    htmlFor="item_name"
                  >
                    Item Name
                  </label>
                  <input
                    className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                    type="text"
                    placeholder="Item Name"
                    id="item_name"
                    name="item_name"
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
                    <option value="Test">Test</option>
                    <option value="Test2">Test2</option>
                    <option value="Test3">Test3</option>
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
                    htmlFor="description"
                  >
                    Description
                  </label>
                  <input
                    className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                    type="text"
                    placeholder="Enter Description"
                    id="description"
                    name="description"
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
  
                  <label className="block mb-2 dark:text-white" htmlFor="image">
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
  
                  <label
                    className="block mb-2 mt-4 dark:text-white"
                    htmlFor="time"
                  >
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
  
              <input
                className="px-4 w-full py-2 mt-4 rounded hover:bg-blue-400 bg-blue-600 duration-200 text-white cursor-pointer font-semibold"
                type="submit"
                value="Add"
              />
            </form>
          </div>
        </div>
      </div>
    );
  };
  
  export default AddCraft;
  
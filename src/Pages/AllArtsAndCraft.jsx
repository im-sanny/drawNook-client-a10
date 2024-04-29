import { useLoaderData } from "react-router-dom";

const AllArtsAndCraft = () => {
  const loadedUser = useLoaderData();
  return (
    <div>
      <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
        <h2 className="mb-4 text-2xl font-semibold text-purple-600 leading-tight">
          Arts & Craft List
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs">
            <colgroup>
              <col />
              <col />
              <col />
              <col />
              <col />
              <col className="w-24" />
            </colgroup>
            <thead className="dark:bg-gray-300">
              <tr className="text-left">
                <th className="p-3">UserId #</th>
                <th className="p-3">Name</th>
                <th className="p-3">Item Name</th>
                <th className="p-3">Category Name</th>
                <th className="p-3 text-right">Price</th>
                <th className="p-3">Crafts & Arts</th>
              </tr>
            </thead>
            <tbody>
              {loadedUser.map((user) => (
                <tr key={user._id} className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                  <td className="p-3">
                    <p>{user._id}</p>
                  </td>
                  <td className="p-3">
                    <p>{user.name}</p>
                  </td>
                  <td className="p-3">
                    <p>14 Jan 2022</p>
                    <p className="dark:text-gray-600">Friday</p>
                  </td>
                  <td className="p-3">
                    <p>01 Feb 2022</p>
                    <p className="dark:text-gray-600">Tuesday</p>
                  </td>
                  <td className="p-3 text-right">
                    <p>$15,792</p>
                  </td>
                  <td className="p-3 text-right">
                    <span className="px-3 btn btn-sm py-1 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">
                      <span>View Details</span>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllArtsAndCraft;

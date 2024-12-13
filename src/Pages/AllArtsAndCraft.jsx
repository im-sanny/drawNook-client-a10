import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { Eye, Filter, Search } from 'lucide-react';

const AllArtsAndCraft = () => {
  const loadedArts = useLoaderData();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('');

  // Get unique categories for filtering
  const categories = [...new Set(loadedArts.map((art) => art.subcategory))];

  // Filter and search logic
  const filteredArts = loadedArts.filter(
    (art) =>
      (filterCategory ? art.subcategory === filterCategory : true) &&
      (searchTerm
        ? art.itemName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          art.name.toLowerCase().includes(searchTerm.toLowerCase())
        : true)
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-purple-600">
          Arts & Craft Gallery
        </h2>

        <div className="flex items-center space-x-4">
          {/* Search Input */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-300 w-64"
            />
            <Search className="absolute left-3 top-3 text-gray-400" />
          </div>

          {/* Category Filter */}
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-300"
          >
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArts.map((art) => (
          <div
            key={art._id}
            className="bg-white shadow-lg rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-800">
                  {art.itemName}
                </h3>
                <span className="text-purple-600 font-semibold">
                  ${art.price}
                </span>
              </div>

              <div className="mb-4">
                <p className="text-gray-600">
                  <span className="font-medium text-gray-800">Artist:</span>{' '}
                  {art.name}
                </p>
                <p className="text-gray-600">
                  <span className="font-medium text-gray-800">Category:</span>{' '}
                  {art.subcategory}
                </p>
              </div>

              <Link
                to={`/viewAllDetails/${art._id}`}
                className="flex items-center justify-center w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600 transition-colors"
              >
                <Eye className="mr-2" /> View Details
              </Link>
            </div>
          </div>
        ))}
      </div>

      {filteredArts.length === 0 && (
        <div className="text-center py-12 bg-gray-100 rounded-lg">
          <p className="text-xl text-gray-600">
            No arts or crafts found matching your search.
          </p>
        </div>
      )}
    </div>
  );
};

export default AllArtsAndCraft;

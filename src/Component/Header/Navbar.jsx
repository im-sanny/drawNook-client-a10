import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaHome,
  FaPalette,
  FaPlus,
  FaList,
  FaUser,
  FaSignOutAlt,
  FaBars,
  FaTimes,
} from 'react-icons/fa';
import useAuth from '../../hooks/useAuth';
import ThemeController from '../ThemeControler';

const Navbar = () => {
  const { logout, user } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const NavItems = [
    {
      icon: <FaHome />,
      label: 'Home',
      path: '/',
    },
    {
      icon: <FaPalette />,
      label: 'All Art & Craft Items',
      path: '/allArt',
    },
    {
      icon: <FaPlus />,
      label: 'Add Craft Item',
      path: '/addCraft',
    },
    {
      icon: <FaList />,
      label: 'My Art & Craft List',
      path: '/myArt',
    },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const renderNavLinks = (isMobile = false) => (
    <ul
      className={`
      ${
        isMobile
          ? 'flex flex-col space-y-4 p-4 absolute top-full left-0 w-full bg-white dark:bg-gray-800 shadow-lg'
          : 'flex space-x-4 items-center'
      }
    `}
    >
      {NavItems.map((item, index) => (
        <li
          key={index}
          className={`
            ${isMobile ? 'w-full' : ''}
          `}
        >
          <NavLink
            to={item.path}
            className={({ isActive }) => `
              flex items-center gap-2 px-3 py-2 rounded-md transition-all duration-300
              ${
                isActive
                  ? 'bg-purple-500 text-white'
                  : 'hover:bg-purple-100 dark:hover:bg-gray-700'
              }
            `}
          >
            {item.icon}
            <span>{item.label}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  );

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center relative">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="https://i.ibb.co/HhfsNgg/letter-d.png"
            alt="DrawNook Logo"
            className="h-8 w-8"
          />
          <span className="text-xl font-bold text-purple-600">DrawNook</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:block">{renderNavLinks()}</div>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-4">
          {/* Theme Controller */}
          <ThemeController />

          {/* User Authentication */}
          {!user ? (
            <div className="flex items-center space-x-2">
              <NavLink to="/login" className="btn btn-outline btn-primary">
                Login
              </NavLink>
              <NavLink to="/register" className="btn btn-primary">
                Register
              </NavLink>
            </div>
          ) : (
            <div className="relative">
              <div
                className="flex items-center space-x-2 cursor-pointer"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <img
                  src={user.photoURL}
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full border-2 border-purple-500"
                />
              </div>

              {isMobileMenuOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2">
                  <p className="hidden md:block text-center">
                    {user.displayName}
                  </p>
                  <button
                    onClick={logout}
                    className="w-full flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <FaSignOutAlt className="mr-2" /> Logout
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden">{renderNavLinks(true)}</div>
      )}
    </nav>
  );
};

export default Navbar;

import { Link, useNavigate } from "react-router-dom";
import { useApp } from "../context/AppContext";
import { Lightbulb, LogOut } from "lucide-react";
import React from "react";
import { Menu } from "lucide-react";

const Navbar = () => {
  const { currentUser, setCurrentUser } = useApp();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = React.useState(false);

  const handleLogout = () => {
    setCurrentUser(null);
    navigate("/");
    setMenuOpen(false);
  };

  const getDashboardLink = () => {
    if (!currentUser) return "/";
    switch (currentUser.role) {
      case "creator":
        return "/creator-dashboard";
      case "developer":
        return "/developer-dashboard";
      case "investor":
        return "/investor-dashboard";
      default:
        return "/";
    }
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Lightbulb className="w-8 h-8 text-[#1A73E8]" />
            <span className="text-xl font-bold text-[#0F3D73]">
              GAA Innovate Hub
            </span>
          </Link>

          {/* Hamburger for mobile & md, menu for lg & xl */}
          <div className="lg:flex xl:flex hidden items-center space-x-6">
            <Link
              to="/"
              className="text-gray-700 hover:text-[#1A73E8] transition"
            >
              Home
            </Link>
            <Link
              to="/marketplace"
              className="text-gray-700 hover:text-[#1A73E8] transition"
            >
              Marketplace
            </Link>
            {currentUser ? (
              <>
                <Link
                  to={getDashboardLink()}
                  className="text-gray-700 hover:text-[#1A73E8] transition"
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-1 text-gray-700 hover:text-[#1A73E8] transition"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-gray-700 hover:text-[#1A73E8] transition"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="bg-[#1A73E8] text-white px-4 py-2 rounded-lg hover:bg-[#0F3D73] transition"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Hamburger menu for mobile & md */}
          <button
            className="lg:hidden xl:hidden flex items-center p-2 text-gray-700 hover:text-[#1A73E8]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Open menu"
          >
            <Menu className="w-7 h-7" />
          </button>
        </div>

        {/* Dropdown menu for mobile & md */}
        {menuOpen && (
          <div className="lg:hidden xl:hidden mt-2 bg-white rounded shadow-md py-2 px-4 flex flex-col space-y-2 animate-fade-in">
            <Link
              to="/"
              className="text-gray-700 hover:text-[#1A73E8] transition"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/marketplace"
              className="text-gray-700 hover:text-[#1A73E8] transition"
              onClick={() => setMenuOpen(false)}
            >
              Marketplace
            </Link>
            {currentUser ? (
              <>
                <Link
                  to={getDashboardLink()}
                  className="text-gray-700 hover:text-[#1A73E8] transition"
                  onClick={() => setMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-1 text-gray-700 hover:text-[#1A73E8] transition"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-gray-700 hover:text-[#1A73E8] transition"
                  onClick={() => setMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="bg-[#1A73E8] text-white px-4 py-2 rounded-lg hover:bg-[#0F3D73] transition"
                  onClick={() => setMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

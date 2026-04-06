import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import axios from "axios";
import { useAuthStore } from "../store/authStore";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  

const { user, role, isAuthenticated, login, logout, loadUser } = useAuthStore();

  useEffect(() => {
    loadUser(); // load from localStorage on refresh
  }, []);

  const navItems = [
    { name: "Home", path: "/home" },
    { name: "About", path: "/about" },
    { name: "Tracker", path: "/tracker" },
  ];

  // 🔐 Auth handler (API + fallback)
  const handleLogin = (type) => {
  if (type === "admin") {
    login({ name: "Admin" }, "admin");
  } else {
    login({ name: "User" }, "user");
  }
};

  return (
    <nav className="w-full shadow-md px-4 md:px-8 py-4 flex items-center justify-between sticky top-0 z-50 backdrop-blur bg-white/80">

      {/* MOBILE LEFT ICON */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* LOGO (CENTER MOBILE) */}
      <div className="flex-1 md:flex-none text-center md:text-left">
  <span className="text-2xl font-bold text-red-500 cursor-pointer">
    BalanceME
  </span>
</div>

      {/* DESKTOP NAV */}
      <div className="hidden md:flex gap-8 text-gray-700 font-medium">
        {role === "admin" && (
  <Link to="/admin">Admin Panel</Link>
)}
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={item.name}
              to={item.path}
              className={`relative pb-1 transition ${
                isActive ? "text-red-500" : "hover:text-red-400"
              }`}
            >
              {item.name}

              <span
                className={`absolute left-0 bottom-0 h-[2px] bg-red-500 rounded transition-all duration-300 ${
                  isActive ? "w-full" : "w-0"
                }`}
              />
            </Link>
            
          );
          
        })}
      </div>

      {/* DESKTOP AUTH */}
      <div className="hidden md:flex gap-4 items-center">
  {isAuthenticated ? (
    <>
      <span className="text-red-500 font-medium">
        {user?.name} ({role})
      </span>
      <button
        onClick={logout}
        className="px-4 py-2 border border-gray-400 rounded-lg"
      >
        Logout
      </button>
    </>
  ) : (
    <>
      <button
        onClick={() => handleLogin("user")}
        className="px-4 py-2 border border-red-500 text-red-500 rounded-lg hover:bg-red-50 transition"
      >
        Login as User
      </button>
      <button
        onClick={() => handleLogin("admin")}
        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
      >
        Login as Admin
      </button>
    </>
  )}
</div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center gap-6 py-6 md:hidden">

          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`text-lg ${
                location.pathname === item.path
                  ? "text-red-500 font-semibold"
                  : "text-gray-700"
              }`}
            >
              {item.name}
            </Link>
          ))}

          {isAuthenticated ? (
  <>
    <span className="text-red-500 font-medium">
      {user?.name} ({role})
    </span>
    <button
      onClick={logout}
      className="px-4 py-2 border border-gray-400 rounded-lg"
    >
      Logout
    </button>
  </>
) : (
  <div className="flex gap-4">
    <button
      onClick={() => handleLogin("user")}
      className="px-4 py-2 border border-red-500 text-red-500 rounded-lg"
    >
      User
    </button>
    <button
      onClick={() => handleLogin("admin")}
      className="px-4 py-2 bg-red-500 text-white rounded-lg"
    >
      Admin
    </button>
  </div>
)}
        </div>
      )}
    </nav>
  );
}
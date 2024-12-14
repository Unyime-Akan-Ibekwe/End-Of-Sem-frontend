import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../UserContext";
import axios from "axios";
import { toast } from "react-toastify";

export default function Header() {
  const { user, setUser } = useContext(UserContext);

  const isAdmin = user?.role === "admin";

  const handleLogout = async () => {
    try {
      await axios.post("/logout");
      setUser(null); 
      toast.success("Logged out successfully!");
    } catch (error) {
      toast.error("Logout failed. Please try again.");
    }
  };

  return (
    <header className="bg-red-800 text-white py-4 px-8 shadow-lg">
      <nav className="flex justify-between items-center">

        <Link to="/" className="text-2xl font-extrabold text-blue-600 hover:text-blue-800 hover:underline"> 
          EVENTS ON CAMPUS
        </Link>


        <div className="flex items-center gap-6">
          <Link to="/" className="hover:underline">
            HOME
          </Link>

          <Link to="/calendar" className="hover:underline">
            CALENDAR
          </Link>

          <Link to="/events" className="hover:underline">
            EVENTS
          </Link>

          {user ? (
            <>
              <Link to="/useraccount" className="hover:underline">
                MY Account
              </Link>
              {isAdmin && (
                <Link to="/createEvent" className="hover:underline">
                  CREATE EVENT
                </Link>
              )}
              <button
                onClick={handleLogout}
                className="hover:underline bg-red-500 px-4 py-2 rounded text-white font-bold"
              >
                LOG OUT
              </button>
            </>
          ) : (
            <Link to="/login" className="hover:underline">
              LOG IN
            </Link>
          )}
        </div>

      </nav>

    </header>
  );
}

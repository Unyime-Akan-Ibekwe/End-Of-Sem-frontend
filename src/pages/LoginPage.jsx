import { useContext, useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { UserContext } from "../UserContext";
import "react-toastify/dist/ReactToastify.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const { setUser } = useContext(UserContext);

  // Fetch remembered email and password from localStorage on component mount
  useEffect(() => {
    const storedEmail = localStorage.getItem("rememberedEmail");
    const storedPassword = localStorage.getItem("rememberedPassword");
    if (storedEmail) {
      setEmail(storedEmail);
      setPassword(storedPassword);
    }
  }, []);

  async function loginUser(ev) {
    ev.preventDefault();

    try {
      const { data } = await axios.post("/login", { email, password });

      // Set user in context and show success notification
      setUser(data);
      toast.success("Login successful!");

      // Handle "Remember Me" functionality
      if (rememberMe) {
        localStorage.setItem("rememberedEmail", email);
        localStorage.setItem("rememberedPassword", password);
      } else {
        localStorage.removeItem("rememberedEmail");
        localStorage.removeItem("rememberedPassword");
      }

      setRedirect(true);
    } catch (e) {
      if (e.response && e.response.data.error) {
        toast.error(e.response.data.error); 
      } else {
        toast.error("An unexpected error occurred. Please try again.");
      }
    }
  }

  if (redirect) {
    return <Navigate to="/" />;
  }

  return (
    <div className="flex w-full h-full lg:ml-24 px-10 py-10 justify-between place-items-center mt-20">
      <div className="bg-white w-full sm:w-full md:w-1/2 lg:w-1/3 px-7 py-7 rounded-xl justify-center align-middle">
        <form className="flex flex-col w-auto items-center" onSubmit={loginUser}>
          <h1 className="px-3 font-extrabold mb-5 text-primarydark text-2xl">Sign In</h1>

          <div className="input">
            <input
              type="email"
              placeholder="Email"
              className="input-et"
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
            />
          </div>


          <div className="input relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="input-et"
              value={password}
              onChange={(ev) => setPassword(ev.target.value)}
            />

            <button
              type="button"
              className="absolute right-2 top-1/2 transform -translate-y-1/2"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? "HIDE" : "SHOW"}
            </button>
          </div>

          
          <div className="flex w-full h-full mt-4 justify-between px-1">
            <div className="flex gap-2">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe((prev) => !prev)}
              />
              Remember Password
            </div>
            <div>
              <Link to="/forgotpassword">Forgot Your Password?</Link>
            </div>
          </div>

          <div className="w-full py-4">
            <button type="submit" className="primary w-full">
              SIGN IN
            </button>
          </div>


          <div className="container2">
            <div className="w-full h-full p-1">
              <Link to="/register">
                <button className="cursor-pointer rounded w-full h-full bg-primary font-bold">
                  SIGN UP
                </button>
              </Link>
            </div>

            
          </div>
        </form>
      </div>


      <div className="hidden lg:flex flex-col right-box">
        <div className="flex flex-col -ml-96 gap-3">
          <div className="text-3xl font-black">Welcome to the <p>Login Page</p></div>
          <div>
            <img src="../src/assets/Admin-icon.png" alt="" className="w-48" />
          </div>
        </div>
      
      </div>
    </div>
  );
}

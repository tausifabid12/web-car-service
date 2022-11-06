import React from "react";
import { Link } from "react-router-dom";
import loginImg from "../../assets/images/login/login.svg";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../constexts/AuthProvider/AuthProvider";
import { useState } from "react";
import { GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  const [error, setError] = useState("");
  const googleProvider = new GoogleAuthProvider();
  const { login, SocialLogin } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const from = e.target;
    const email = from.email.value;
    const password = from.password.value;
    login(email, password)
      .then((result) => {
        console.log(result.user);
        setError("");
      })
      .catch((err) => setError(err.message));
  };

  const handleGoogleSignIn = () => {
    SocialLogin(googleProvider)
      .then((result) => {
        console.log(result.user);
        setError("");
      })
      .catch((err) => setError(err.message));
  };
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content w-3/4 gird md:grid-cols-2 sm:grid-cols-1  ">
        <div className="h-full w-full ">
          <img src={loginImg} className="h-full w-full" alt="" />
        </div>
        <div className="card  w-full shadow-2xl  py-3">
          <h1 className="text-5xl font-bold text-center">Login now!</h1>

          <form onSubmit={handleSubmit} className="card-body">
            <p className="text-red-500 text-center py-2 font-bold">{error}</p>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                name="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                name="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="/" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn bg-[#fd3811] border-none">
                Login
              </button>
            </div>
          </form>
          <p className="text-center">
            don't have an account?{" "}
            <Link to="/signUp" className="text-[#fd3811]">
              SignUP
            </Link>
          </p>
          <div className="divider px-4">Log in with Social</div>
          <div className="mx-auto my-5 flex">
            <span
              onClick={handleGoogleSignIn}
              className="text-2xl mr-3 hover:text-[#fd3811]"
            >
              <FaGoogle />
            </span>
            <span className="text-2xl hover:text-[#fd3811]">
              <FaFacebook />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

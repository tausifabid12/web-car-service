import React from "react";
import { useContext } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import loginImg from "../../assets/images/login/login.svg";
import { AuthContext } from "../../constexts/AuthProvider/AuthProvider";

const SignUp = () => {
  const { createUser, SocialLogin } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const from = e.target;
    const name = from.name.value;
    const email = from.email.value;
    const password = from.password.value;
    createUser(email, password)
      .then((result) => console.log(result.user))
      .catch((err) => console.log(err));
  };
  return (
    <div className="hero min-h-screen py-8 ">
      <div className="hero-content w-3/4 gird md:grid-cols-2 sm:grid-cols-1  ">
        <div className="h-full w-full ">
          <img src={loginImg} className="h-full w-full" alt="" />
        </div>
        <div className="card  w-full shadow-2xl  py-3">
          <h1 className="text-5xl font-bold text-center">SignUp now!</h1>
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Your name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
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
                Sign Up
              </button>
            </div>
          </form>
          <p className="text-center">
            don't have an account?{" "}
            <Link to="/login" className="text-[#fd3811]">
              Log in
            </Link>
          </p>
          <div className="divider px-4">Sign up with Social</div>
          <div className="mx-auto my-5 flex">
            <span className="text-2xl mr-3 hover:text-[#fd3811]">
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

export default SignUp;

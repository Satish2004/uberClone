import React from "react";
import { Link } from "react-router-dom";

const UserLogin = () => {
  return (
    <div className="p-7 justify-between h-screen text-left flex flex-col">
      <div>
        <img
          className="w-16 mb-8"
          src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png"
          alt="uber_logo"
        />
        <form action="">
          <h3 className="text-xl mb-2 ">What's your email</h3>
          <input
            type="email"
            required
            placeholder="example@gmail.com "
            className="bg-[#eeee]  rounded px-4 py-2 border  w-full mb-4 text-lg placeholder:text-sm text-black-200"
          />
          <h3 className="text-xl mb-2 ">Enter your password</h3>
          <input
            type="password"
            required
            placeholder="eg- @#17883_!1234$"
            className=" bg-[#eeee] rounded px-4 py-2 border w-full mb-4 text-sm placeholder:text-sm"
          />
          <button className="bg-black font-semibold hover:bg-slate-800 text-white p-2 mt-2 w-full rounded-full text-xl">
            Login
          </button>
          <Link to={"/signup"} className="mb-3 text-blue">
            <span className=" text-center text-blue-700  hover:text-blue-500">
              {" "}
              <span className="text-black">New here? </span>Create new Account
              as User
            </span>
          </Link>
        </form>
      </div>

      {/* Bottom of the login userLogin page*/}

      <div>
        <button className="bg-[#ebc727] font-semibold hover:bg-slate-500 text-black p-2 mt-2 w-full rounded-full text-xl">
          Sign as Captain
        </button>
      </div>
    </div>
  );
};

export default UserLogin;

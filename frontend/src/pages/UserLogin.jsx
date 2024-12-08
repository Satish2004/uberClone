import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [userData, setUserData] = useState("");

  // submit handler form for login
  const submitHandler = (e) => {
    e.preventDefault();
    const data = { email: email, password: password };
    setUserData(data); //set the email and password to userData
    setEmail("");
    setpassword("");
  };

  return (
    <div className="p-7 justify-between h-screen text-left flex flex-col">
      <div>
        <img
          className="w-16 mb-8"
          src="https://pngimg.com/d/uber_PNG24.png"
          alt="uber_logo"
        />
        <form
          action=""
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="text-xl mb-2 ">What's your email as User</h3>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="example@gmail.com "
            className="bg-[#eeee]  rounded px-4 py-2 border  w-full mb-4 text-lg placeholder:text-sm text-black-200"
          />
          <h3 className="text-xl mb-2 ">Enter your password as a User</h3>
          <input
            type="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            required
            placeholder="eg- @#17883_!1234$"
            className=" bg-[#eeee] rounded px-4 py-2 border w-full mb-4 text-sm placeholder:text-sm"
          />
          <button className="bg-black font-semibold hover:bg-slate-800 text-white p-2 mt-2 w-full rounded-full text-xl">
            Login as user
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
        <Link
          to={"/captain-login"}
          className=" flex text-center justify-center bg-[#ebc727] font-semibold hover:bg-slate-500 text-black p-2 mt-2 w-full rounded-full text-xl"
        >
          Sign as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;

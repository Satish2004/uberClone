import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";

const Captainlogin = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const navigate = useNavigate();
  const { captain, setCaptain } = React.useContext(CaptainDataContext);

  // submit handler form for login
  const submitHandler = async (e) => {
    e.preventDefault();

    const captain = {
      email,
      password,
    };
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captains/login`,
      captain
    );

    if (response.status === 201) {
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem("token", data.token);
      navigate("/captain-home");
    }

    setEmail("");
    setpassword("");
  };

  return (
    <div className="p-7 justify-between h-screen text-left flex flex-col">
      <div>
        <img
          className="w-16 mb-8"
          src="https://www.svgrepo.com/show/505031/uber-driver.svg"
          alt="uber_logo"
        />
        <form
          action=""
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="text-xl mb-2 ">What's your email as Captain</h3>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="example@gmail.com "
            className="bg-[#eeee]  rounded px-4 py-2 border  w-full mb-4 text-lg placeholder:text-sm text-black-200"
          />
          <h3 className="text-xl mb-2 ">Enter your password as a Captain</h3>
          <input
            type="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            required
            placeholder="eg- @#17883_!1234$"
            className=" bg-[#eeee] rounded px-4 py-2 border w-full mb-4 text-sm placeholder:text-sm"
          />
          <button className="bg-black font-semibold hover:bg-slate-800 text-white p-2 mt-2 w-full rounded-full text-xl">
            Login as Captain
          </button>
          <Link to={"/captain-signup"} className="mb-3 text-blue">
            <span className=" text-center text-blue-700  hover:text-blue-500">
              {" "}
              <span className="text-black">Want to ? </span>
              Register as Captain
            </span>
          </Link>
        </form>
      </div>

      {/* Bottom of the login userLogin page*/}

      <div>
        <Link
          to={"/login"}
          className=" flex text-center justify-center bg-[#0DA34E] font-semibold hover:bg-slate-500 text-black p-2 mt-2 w-full rounded-full text-xl"
        >
          Sign as User
        </Link>
      </div>
    </div>
  );
};

export default Captainlogin;

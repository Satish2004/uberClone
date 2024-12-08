import React, { useState } from "react";
import { Link } from "react-router-dom";

const CaptainSignup = () => {
  const [email, setEmail] = useState("");
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [password, setpassword] = useState("");
  const [userData, setUserData] = useState("");
  // submit handler form for login

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log("User Signup form submitted");
    const data = {
      fullName: {
        firstname: firstname,
        lastname: lastname,
      },
      email: email,
      password: password,
    };
    setUserData(data); //set the email and password to userData
    setEmail("");
    setpassword("");
    setfirstname("");
    setlastname("");
  };

  return (
    <div>
      {" "}
      <div>
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
              <h3 className="text-xl mb-2 ">Captain name</h3>
              <div className="flex gap-3">
                <input
                  type="text"
                  value={firstname}
                  required
                  placeholder="First name"
                  onChange={(e) => setfirstname(e.target.value)}
                  className="bg-[#eeee]  rounded px-4 py-2 border w-1/2  mb-4 text-lg placeholder:text-sm text-black-200"
                />

                <input
                  type="text"
                  required
                  placeholder="Last name"
                  onChange={(e) => setlastname(e.target.value)}
                  value={lastname}
                  className="bg-[#eeee]  rounded px-4 py-2 border w-1/2 mb-4 text-lg placeholder:text-sm text-black-200"
                />
              </div>

              {/* This is signup 2nd input box */}
              <h3 className="text-xl mb-2 ">Captain email</h3>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
                placeholder="example@gmail.com "
                className="bg-[#eeee]  rounded px-4 py-2 border  w-full mb-4 text-lg placeholder:text-sm text-black-200"
              />
              <h3 className="text-xl mb-2 ">Enter your password </h3>
              <input
                type="password"
                onChange={(e) => setpassword(e.target.value)}
                value={password}
                required
                placeholder="eg- @#17883_!1234$"
                className=" bg-[#eeee] rounded px-4 py-2 border w-full mb-4 text-sm placeholder:text-sm"
              />
              <button className="bg-black font-semibold hover:bg-slate-800 text-white p-2 mt-2 w-full rounded-full text-xl">
                sign up as Captain
              </button>
              <Link to={"/captain-login"} className="mb-3 text-blue">
                <span className=" text-center text-blue-700  hover:text-blue-500">
                  {" "}
                  <span className="text-black">
                    {" "}
                    Already have an account ?{" "}
                  </span>
                  Login as Captain
                </span>
              </Link>
            </form>
          </div>

          {/* Bottom of the login userLogin page*/}

          <div>
            <p className="justify-center items-center m-2 text-xs p-3 leading-tight">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta
              nisi non ullam libero labore, ad voluptate reiciendis nobis velit
              <span className="text-blue-600 underline cursor-pointer ">
                {" "}
                privacy
              </span>{" "}
              &{" "}
              <span className="text-blue-500 underline cursor-pointer">
                {" "}
                poilcy
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaptainSignup;

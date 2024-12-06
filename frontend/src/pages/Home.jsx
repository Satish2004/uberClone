import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <div className="h-screen pt-8 bg-center w-full flex justify-between flex-col bg-red-500 bg-[url(https://images.unsplash.com/photo-1554672408-17395951edc0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dWJlcnxlbnwwfHwwfHx8MA%3D%3D)] bg-cover">
        <img
          className="w-16 ml-8"
          src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png"
          alt="uber_logo"
        />
        <div className="bg-white pb-7 py-10 px-4 rounded-t-2xl border-black ">
          <h2 className="text-2xl font-bold p-3">Get Started with Uber</h2>
          <Link
            to={"/login"}
            className="w-full gap-4 flex align-center font-semibold items-center justify-center text-xl bg-black text-white rounded-full hover:bg-slate-900 p-3 text-center align-middle"
          >
            Continue <i class="fa-solid fa-arrow-right gap-28"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

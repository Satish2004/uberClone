import React from "react";

const CaptainDetail = () => {
  return (
    <div>
      <div className=" flex items-center  justify-between">
        <div className=" flex gap-3 items-center justify-start">
          <img
            className="h-10 w-10 rounded-full object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRit7QeUQfV85R1Z_bHfia5GiGV0rZusDKkuQ&s"
            alt="captainAvtaar"
          />
          <h4 className="text-lg font-medium ">Satish</h4>
        </div>
        <div className="flex gap-1">
          <h4 className="text-xl  font-semibold">₹295.02</h4>
          <p className="text-sm text-gray-400 p-1 text-center rounded-lg">
            Earned
          </p>
        </div>
      </div>

      <div className="flex justify-center gap-6 items-start p-5 bg-gray-100 mt-3 rounded-md">
        <div className="text-center  ">
          <i className="ri-time-line font-thin text-4xl text-gray-600  "></i>
          <h5 className="font-semibold text-xl text-gray  ">10.2+</h5>
          <p className="text-sm text-gray-400 ">Hours Online</p>
        </div>
        <div className="text-center">
          <i className="ri-speed-up-line text-4xl text-gray-600  "></i>
          <h5 className=" font-semibold text-xl text-gray  ">10KM</h5>
          <p className="text-sm text-gray-400 ">Distance</p>
        </div>
        <div className="text-center">
          <i className="ri-booklet-line text-4xl text-gray-600 "></i>
          <h5 className=" font-semibold text-xl text-gray  ">100</h5>
          <p className="text-sm text-gray-400 ">Rupee's</p>
        </div>
      </div>
    </div>
  );
};

export default CaptainDetail;

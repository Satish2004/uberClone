import React from "react";
import { Link } from "react-router-dom";

const ConfirmRidePopUp = (props) => {
  return (
    <div className="">
      <h3 className="text-2xl font-semibold mb-5">Do you want to confirm ?</h3>

      {/* addresses destination */}

      <div className="flex gap-2 justify-between flex-col items-center">
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">pickup point</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">destination point</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3">
            <i className="ri-currency-line"></i>
            <div>
              <h3 className="text-lg font-medium">₹100 price</h3>
              <p className="text-sm -mt-1 text-gray-600">Cash Cash</p>
            </div>
          </div>
          <div className="flex justify-center gap-10 items-start p-5  mt-3 rounded-md">
            <div className="text-center  ">
              <i className="ri-phone-fill font-thin text-4xl text-gray-900 bg-gray-200 p-2 rounded-full text-center  "></i>
            </div>
            <div className="text-center">
              <i className="ri-speed-up-line text-4xl text-gray-900 bg-gray-300 p-2 rounded-full text-center "></i>
            </div>
            <div className="text-center">
              <i className="ri-booklet-line text-4xl text-gray-900 bg-gray-300 p-2 rounded-full text-center "></i>
            </div>
          </div>
        </div>
      </div>

      <div className="flex  gap-2 justify-between flex-col items-center">
        <Link
          to={"/captain-riding"}
          onClick={() => {}}
          className="w-full mt-5 bg-green-700 text-white font-semibold p-2 rounded-lg flex justify-center"
        >
          Confirm Ride
        </Link>

        <button
          onClick={() => {
            props.setConfirmRidePopUppanel(false);
            props.setridePopUppanel(false);
          }}
          className="w-full  text-black bg-gray-300 font-semibold p-2 rounded-lg"
        >
          Cancel Ride
        </button>
      </div>
    </div>
  );
};

export default ConfirmRidePopUp;

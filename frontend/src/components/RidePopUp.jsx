import React from "react";

const RidePopUp = (props) => {
  return (
    <div>
      <h5
        className="p-1 text-center w-[93%] absolute top-0"
        onClick={() => {
          props.setridePopUppanel(false);
        }}
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">New Ride For You?</h3>
      <div className="flex items-center justify-between bg-yellow-400 p-3 rounded-lg">
        <div className="flex  items-center gap-3 ">
          <img
            className="object-cover rounded-full h-12 w-12 "
            src="https://lh4.googleusercontent.com/proxy/5vocIEuxxuJjEnP1r0lbkHC4VoKO4LgHBUU2p2hITjOPDunDn08HZI6ABBPt-naJbhT8p7nmHQ6cpZR6oLwQEIPVRJ1OCp0CfZjX85WrjNhlreY"
            alt="CaptainPic"
          />
          <div>
            <h2 className="font-medium text-xl">Satish</h2>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <h5 className="text-2xl text-gray-900 font-semibold ">2.5KM</h5>
          <i className="ri-speed-up-line text-3xl text-gray-500"></i>
        </div>
      </div>

      {/* addresses destination */}
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
      </div>

      <div className="flex gap-2 justify-between flex-col items-center">
        <button
          onClick={() => {
            props.setConfirmRidePopUppanel(true);
          }}
          className="w-full mt-5 bg-green-700 text-white font-semibold p-2 rounded-lg"
        >
          Accept
        </button>

        <button
          onClick={() => {
            props.setridePopUppanel(false);
          }}
          className="w-full  text-gray-800 bg-gray-200 font-semibold p-2 rounded-lg"
        >
          Ignore
        </button>
      </div>
    </div>
  );
};

export default RidePopUp;

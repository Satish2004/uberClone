import React from "react";

const WaitingForDriver = (props) => {
  return (
    // this pannel will be shown when the user is waiting for the driver to accept the ride and your live ;location will be shown to the driver
    <div>
      <div>
        <h5
          className="p-1 text-center w-[93%] absolute top-0"
          onClick={() => {
            props.setWaitingForDriver(false);
            // console.log("clicked");
          }}
        >
          <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
        </h5>
        <h3 className="text-2xl font-semibold mb-5">
          confirmed this is your ride partner..
          waiting for driver...
        </h3>

        <div className="flex gap-2 justify-between flex-col items-center">
          {/* <img className="h-20" src="" alt="driverPic" /> */}
          <div className="w-full mt-5">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaitingForDriver;

import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPannel from "../components/LocationSearchPannel";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  //0- up & 1- bottom
  const [pannelOpen, setPannelOpen] = useState(false);
  const PannelRef = useRef(null);
  const pannelCloseRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(
    function () {
      gsap.to(PannelRef.current, {
        height: pannelOpen ? "70%" : "0%",
        duration: 0.5,
      });
      gsap.to(pannelCloseRef.current, {
        rotate: pannelOpen ? 0 : 180,
        duration: 0.5,
      });
    },
    [pannelOpen]
  );
  return (
    <div className="h-screen relative">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQy-OIkA6In0fTvVwZADPmFFibjmszu2A0g&s"
        className="w-15 top-5 left-5 absolute"
        alt="uber_home_logo"
      />

      <div className="h-screen w-screen ">
        {/* image for temporaary use  */}
        <img
          className="h-full w-full object-cover"
          src="https://images.squarespace-cdn.com/content/v1/54ff63f0e4b0bafce6932642/1613584820445-6MHFT7HI6MHUED46VYU4/Two+Maps+-+Color.png"
          alt=""
        />
      </div>
      <div className=" h-screen absolute top-0  flex flex-col justify-end w-full ">
        <div className="h-[30%] p-5 bg-white ">
          <h5
            ref={pannelCloseRef}
            onClick={(e) => {
              setPannelOpen(false);
            }}
            className="absolute top-6 right-6  text-2xl"
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-2xl font-semibold ">Find a Trip</h4>
          <form
            className=""
            onClick={() => {
              setPannelOpen(true);
            }}
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <input
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5"
              type="text"
              onClick={() => {
                setPannelOpen(true);
              }}
              value={pickup}
              placeholder="Add a Pickup Location"
              onChange={(e) => {
                setPickup(e.target.value);
              }}
            />
            <input
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3"
              type="text"
              placeholder="Add a Destination Point"
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value);
              }}
            />
          </form>
        </div>
      </div>
      <div ref={PannelRef} className="h-0 bg-red-500">
        {/* componenets of loaction SearchPanell */}
        <LocationSearchPannel />
      </div>
    </div>
  );
};

export default Home;

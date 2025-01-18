import React from "react";
import { Link } from "react-router-dom";
import CaptainDetails from "../components/CaptainDetails";
import RidePopUp from "../components/RidePopUp";
import ConfirmRidePopUp from "../components/ConfirmRidePopUp";
import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const CaptainHome = () => {
  const [ridePopUpPanel, setridePopUppanel] = useState(true);
  const [confirmRidePopUppanel, setConfirmRidePopUppanel] = useState(false);

  const ridePopUpPanelRef = useRef(null);
  const confirmRidePopUppanelRef = useRef(null);

  // popUp ride
  useGSAP(
    function () {
      if (ridePopUpPanel) {
        gsap.to(ridePopUpPanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(ridePopUpPanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [ridePopUpPanel]
  );

  // consfirm ride pop up
  useGSAP(
    function () {
      if (confirmRidePopUppanel) {
        gsap.to(confirmRidePopUppanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(confirmRidePopUppanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [confirmRidePopUppanel]
  );

  return (
    <div className="h-screen">
      <div className="fixed top-0 p-4 flex items-center justify-between w-full">
        <img
          className="w-16 "
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <Link
          to={"/captain-login"}
          className="  h-10 w-10 items-center justify-center flex rounded-full bg-white  "
        >
          <i className="text-center text-black font-semibold text-2xl ri-logout-box-r-line"></i>
        </Link>
      </div>

      <div className="h-3/5 ">
        <img
          className="w-full h-full object-cover"
          src="https://camo.githubusercontent.com/e0debd25d05c84be78d89bf7a2858c65e3cfecd72e95bd22ec50e85fa1f84cfb/68747470733a2f2f322e62702e626c6f6773706f742e636f6d2f2d574f70483738393364526b2f5733527372626f476678492f41414141414141414356552f767a6b39683975526262415777485633366a5455644b4f555552795946322d6167434c63424741732f73313630302f73637265656e73686f74362e706e67"
          alt="map"
        />
      </div>
      {/* <img
        className="h-20 m-1"
        src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg"
        alt=""
      /> */}

      <div className="h-2/5 p-4 ">
        {/* addresses ko hataya  */}
        <CaptainDetails></CaptainDetails>
      </div>
      {/* pop ups */}
      <div
        ref={ridePopUpPanelRef}
        className="fixed w-full z-10 bottom-0 bg-white px-3  py-10 pt-12"
      >
        <RidePopUp
          setridePopUppanel={setridePopUppanel}
          setConfirmRidePopUppanel={setConfirmRidePopUppanel}
        />
      </div>
      {/* confirm ride pickup */}
      <div
        ref={confirmRidePopUppanelRef}
        className="fixed w-full h-screen z-10 bottom-0 bg-white px-3  py-10 pt-12"
      >
        
        <ConfirmRidePopUp
          setConfirmRidePopUppanel={setConfirmRidePopUppanel}
          setridePopUppanel={setridePopUppanel}
        />
      </div>
    </div>
  );
};

export default CaptainHome;

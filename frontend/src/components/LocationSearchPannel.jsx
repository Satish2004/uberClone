import React from "react";

const LocationSearchPannel = ({ setVehiclePanel, setPanelOpen }) => {
  // sample array of locations
  const locations = [
    "23, Shanti nagar Bhilai CG",
    "25, vaishaali nagar Bhilai CG",
    "1, Gada Chauk Bhilai CG",
    "2B, kailash nagar Bhilai CG",
  ];

  return (
    <div>
      {/* This is a sample data of location search panel */}
      {locations.map((elem, idx) => (
        <div
          key={idx}
          onClick={() => {
            setVehiclePanel(true);
            setPanelOpen(false);
          }}
          className="flex items-center justify-start gap-5 my-3 border-2 p-3 border-gray-50 active:border-black rounded-xl"
        >
          <h2 className="bg-[#eeee] h-18  w-12  flex items-center justify-center rounded-full">
            <i className="ri-map-pin-fill"></i>
          </h2>
          <h4 className="text-lg">{elem}</h4>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPannel;

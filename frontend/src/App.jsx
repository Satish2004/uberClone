import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
// user
import Start from "./pages/Start";
import UserLogin from "./pages/UserLogin";
import UserSignup from "./pages/UserSignup";
import Captainlogin from "./pages/Captainlogin";
import Captainsignup from "./pages/CaptainSignup";
import Home from "./pages/Home";
import UserProtectWrapper from "./pages/UserProtectWrapper";
import UserLogout from "./pages/UserLogout";
// Captain
import CaptainHome from "./pages/CaptainHome";
//import { CaptainDataContext } from "./context/CaptainContext";
//import CaptainProtectWrapper from "./pages/CaptainProtectWrapper";
import Riding from "./pages/Riding";
import CaptainRiding from "./pages/CaptainRiding";

const App = () => {
  return (
    <div>
      <Routes>
        {/* USER ROUTES -> REGISTER , LOGIN , LOGOUT  FROM THE FRONTEND AND SEND THEIR VALUE IN SERVER USING AXIOS */}
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/riding" element={<Riding />} />
        <Route path="/captain-riding" element={<CaptainRiding />} />

        <Route path="/signup" element={<UserSignup />} />
        <Route path="/captain-login" element={<Captainlogin />} />
        <Route path="/captain-signup" element={<Captainsignup />} />
        <Route
          path="/home"
          element={
            <UserProtectWrapper>
              <Home />
            </UserProtectWrapper>
          }
        />
        <Route
          path="/user/logout"
          element={
            <UserProtectWrapper>
              <UserLogout />
            </UserProtectWrapper>
          }
        />

        {/* FOR CAPTAIN ROUTES -> REGISTER , LOGIN , LOGOUT  */}
        <Route
          path="/captain-home"
          element={
            // <CaptainProtectWrapper>
            <CaptainHome></CaptainHome>
            // </CaptainProtectWrapper>
          }
        />
      </Routes>
    </div>
  );
};

export default App;

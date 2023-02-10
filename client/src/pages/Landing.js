import React from "react";
import { Logo } from "../components/";
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Landing() {
  const { setupUser, clearAlert } = useAppContext();
  const navigate = useNavigate();
  const guestLogin = async () => {
    const guestData = await axios.get("/api/v1/auth/guestAccount");
    const currentUser = {
      email: guestData.data.user,
      password: guestData.data.pwd,
    };

    await setupUser({
      currentUser,
      endPoint: "login",
      alertText: "Login Successful! Redirecting...",
    });
    navigate("/");
    clearAlert();
  };
  return (
    <Wrapper>
      <nav>
        <Logo width="25%" />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking app</span>
          </h1>
          <p>An app help you track your job applications.</p>
          <button onClick={guestLogin} to="/" className="btn btn-hero">
            Guest Login
          </button>
          <p></p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img"></img>
      </div>
    </Wrapper>
  );
}

export default Landing;

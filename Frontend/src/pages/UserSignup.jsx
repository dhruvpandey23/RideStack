import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UserDataContext } from "../../contexts/UserContext";

const UserSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [userData, setUserData] = useState({});
  const { user, setUser } = useContext(UserDataContext);

  const navigate = useNavigate();
  console.log(import.meta.env.VITE_BASE_URL);

  const submitHandler = async (e) => {
    e.preventDefault();

    const newUserData = {
      email: email,
      password: password,
      fullName: {
        firstName: firstName,
        lastName: lastName,
      },
    };

    const res = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/api/v1/user/register`,
      newUserData
    );

    if (res.status === 201) {
      const data = res.data;
      setUser(data.user);
      localStorage.setItem("token", data.token);
      navigate("/home");
    }

    console.log(userData);
    setEmail("");
    setPassword("");
    setFirstname("");
    setLastname("");
  };
  return (
    <div className="flex items-center  flex-col justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex  flex-col items-center justify-center p-4 w-full max-w-2xl mx-auto"
      >
        <h3 className="text-lg font-medium mb-2">What's your name</h3>
        <div className="flex gap-4 mb-7">
          <input
            className="bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full lg:w-1/2 text-lg placeholder:text-base"
            required
            value={firstName}
            onChange={(e) => {
              setFirstname(e.target.value);
            }}
            type="name"
            placeholder="First Name"
          />
          <input
            className="bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full lg:w-1/2 text-lg placeholder:text-base"
            required
            value={lastName}
            onChange={(e) => {
              setLastname(e.target.value);
            }}
            type="name"
            placeholder="Last Name"
          />
        </div>
        <h3 className="text-lg font-medium mb-2">What's your email</h3>
        <input
          className="bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full lg:w-1/2 text-lg placeholder:text-base"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="email"
          placeholder="email@example.com"
        />
        <h3 className="text-lg font-medium mb-2">Enter Password</h3>
        <input
          className="bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full lg:w-1/2 text-lg placeholder:text-base"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          required
          type="password"
          placeholder="Password"
        />

        <button className="bg-[#111]  text-white font-semibold mb-3 py-2 px-4 rounded-lg w-full lg:w-1/2 text-lg  transition duration-300 placeholder:text-base">
          Create Account
        </button>
      </form>
      <p className="text-center">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-600">
          Login here
        </Link>
      </p>
      <div className="w-full max-w-xl ">
        <Link
          to="/captain-signup"
          className="bg-[#10b461] flex items-center justify-center text-white font-semibold mb-5 mt-5 rounded-lg py-2 px-4 w-full text-lg placeholder:text-base"
        >
          Sign up as Captain
        </Link>
      </div>
      <div>
        <p className="text-[10px] leading-tight">
          This site is protected by reCAPTCHA and the{" "}
          <span className="underline">Google Privacy Policy</span> and{" "}
          <span className="underline">Terms of Service apply</span>.
        </p>
      </div>
    </div>
  );
};

export default UserSignup;

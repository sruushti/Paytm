import { useState } from "react"
import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import axios from "axios";
import { useNavigate } from "react-router-dom"
import SignupFlow from "../components/SignUpFlow"

export const Signup = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userName, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    return (
    /*<div className="bg-gradient-to-r from-blue-400 to-blue-600 h-screen flex justify-center items-center">
    <div className="flex flex-col justify-center items-center w-full max-w-md px-6">
      <div className="bg-white shadow-xl rounded-lg w-full text-center p-">
        <Heading label={"Sign up"} />

        <SubHeading label={"Enter your infromation to create an account"} />

        <InputBox onChange={e => {setFirstName(e.target.value);}} placeholder="John" label={"First Name"} />

        <InputBox onChange={(e) => {setLastName(e.target.value);}} placeholder="Doe" label={"Last Name"} />

        <InputBox onChange={e => {setUsername(e.target.value);}} placeholder="johndoe@gmail.com" label={"Email"} />

        <InputBox onChange={(e) => {setPassword(e.target.value)}} placeholder="123456" label={"Password"} />

        <div className="pt-4">
          <Button onClick={async () => {
            try {
                console.log({
                    userName,
                    firstName,
                    lastName,
                    password,
                  });

                const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
                  userName,
                  firstName,
                  lastName,
                  password
                });
                localStorage.setItem("token", response.data.token);
                navigate("/dashboard");
              } catch (error) {
                console.error("Signup failed:", error);
              
                // Display or log the server's error message
                if (error.response && error.response.data && error.response.data.message) {
                  console.error("Server error message:", error.response.data.message);
                }
              }
          }} label={"Sign up"} />
        </div>
        <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
      </div>
    </div>
  </div>

  */
  <div className="min-h-screen flex">
  {/* Left Side - Form */}
  <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-white p-8">
    <h1 className="text-4xl font-bold text-black-700 mb-8">Get Started Now</h1>

    <div className="w-full max-w-sm space-y-3">
      <div>
        <label htmlFor="firstName" className="block text-black-700 text-mg-4 font-semibold">First Name</label>
        <input
          type="text"
          id="firstName"
          className="w-full p-3 border border-blue-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="lastName" className="block text-black-700 text-mg-4 font-semibold">Last Name</label>
        <input
          type="text"
          id="lastName"
          className="w-full p-3 border border-blue-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="userName" className="block text-black-700 text-mg-4 font-semibold">Email address</label>
        <input
          type="email"
          id="userName"
          className="w-full p-3 border border-blue-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your email"
          value={userName}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-black-700 text-mg-4 font-semibold">Password</label>
        <input
          type="password"
          id="password"
          className="w-full p-3 border border-blue-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button
  onClick={async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/v1/user/signup', {
        userName,
        firstName,
        lastName,
        password,
      });
      localStorage.setItem('token', response.data.token);
      navigate('/dashboard');
    } catch (error) {
      console.error('Signup failed:', error);
      if (error.response && error.response.data && error.response.data.message) {
        console.error('Server error message:', error.response.data.message);
      }
    }
  }}
  className="w-full bg-blue-700 text-white py-3 rounded-lg font-medium hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 mt-4"
>
  Signup
</button>
    </div>

    <div className="text-sm text-black-700 text-mg-4 font-semibold text-center mt-4">
      Already have an account?{' '}
      <span
        className="text-blue-800 font-medium cursor-pointer hover:underline"
        onClick={() => navigate('/signin')}
      >
        Sign In
      </span>
    </div>
  </div>

  {/* Right Side - Placeholder for React Flow */}
  <div className="hidden md:flex w-1/2 bg-blue-50 justify-center items-center">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-4">Welcome to EasyPay</h2>
        <p className="text-lg text-blue-600">Manage your payments with ease and security.</p>
        {/* Placeholder for React Flow */}
        <div className="mt-6 w-full h-96 bg-blue-200 rounded-lg flex justify-center items-center">
          <SignupFlow />
        </div>
      </div>
    </div>
</div>
);
}
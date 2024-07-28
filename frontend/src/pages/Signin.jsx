import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Heading = ({label}) => {
  return (<div className="font-bold text-3xl text-gray-900">
      {label}
  </div>)
}

const BottomWarning = ({label, buttonText, to}) => {
  return (<div className="text-sm text-gray-500 pt-6">
    <div>{label}</div>
    <Link className="text-blue-500 cursor-pointer hover:underline" to={to}>{buttonText}</Link>
  </div>)
}

const Button = ({label, onClick}) => {
  return <button onClick={onClick} type="button" className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200">{label}</button>
}

const InputBox = ({ onChange, label, placeholder, type = 'text' }) => {
  return (<div className="w-full mb-4">
    <label className="block text-left text-sm font-medium text-gray-700 mb-2">{label}</label>
    <input
      type={type}
      className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      onChange={onChange}
      placeholder={placeholder}
    />
  </div>)
}

const SubHeading = ({label}) => {
  return (<div className="text-gray-500 text-md pt-1 pb-6">
    {label}
  </div>)
}

export const Signin = () => {
    const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

     const handleSignIn = async () => {
        console.log("Error in 1")
    try {
      const response = await axios.post("http://localhost:3000/api/v1/user/signin", {
        userName,
        password
      });
      console.log("error checking")
      localStorage.setItem("token", response.data.token);
      navigate("/Dashboard");
    } catch (error) {
      console.error("Sign-in error:", error.response.data.msg);
      // Handle error, e.g., display error message to the user
    }
  };

    return <div className="bg-slate-200 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-240 text-center p-4 h-max px-6">
        <Heading label={"Sign in"} />
        <SubHeading label={"Enter your credentials to access your account"} />
        <InputBox onChange={(e) => setUserName(e.target.value)}
            placeholder="John@gmail.com"
            label={"Email"} />
        <InputBox onChange={(e) => setPassword(e.target.value)}
            placeholder="123456"
            label={"Password"}
            type="password" />
        <div className="pt-4">
          <Button  onClick={handleSignIn} label={"Sign in"} />
        </div>
        <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
      </div>
    </div>
  </div>
}
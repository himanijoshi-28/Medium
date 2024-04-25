import { Link, useNavigate } from "react-router-dom";
import InputBox from "./InputBox";
import { useState } from "react";
import { SignupInput } from "@coderella/medium-common";

import axios from "axios";
import { BACKEND_URL } from "../config";
const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const [postInputs, setPostInputs] = useState<SignupInput>({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  async function sendRequest() {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`,
        {
          ...postInputs,
        }
      );
      const jwt = response.data;
      console.log(jwt);
      localStorage.setItem("token", jwt);
      navigate("/posts");
    } catch (error) {
      console.log(error);
      alert("error");
    }
  }
  return (
    <div className="h-screen flex items-center justify-center flex-col ">
      <div className="flex justify-center i flex-col items-center leading-[2]">
        <div className=" font-bold text-4xl text-center ">
          Create an Account
        </div>
        <div className="font-extralight ">
          {type === "signin"
            ? "Don't have an account ?"
            : " Already have an account ?"}

          <Link
            className="underline "
            to={type === "signin" ? "/signup" : "/signin"}
          >
            {type === "signin" ? "signup" : "signin"}
          </Link>
        </div>
        <div className="max-w-lg flex items-center justify-center flex-col gap-4  ">
          {type === "signup" && (
            <InputBox
              label="Name"
              placeholder="Enter your Name"
              onChange={(e) => {
                setPostInputs({
                  ...postInputs,
                  name: e.target.value,
                });
              }}
            />
          )}
          <InputBox
            label="Username"
            placeholder="Enter your username"
            onChange={(e) => {
              setPostInputs({
                ...postInputs,
                email: e.target.value,
              });
            }}
          />
          <InputBox
            type="password"
            label="Password"
            placeholder="Enter your Password"
            onChange={(e) => {
              setPostInputs({
                ...postInputs,
                password: e.target.value,
              });
            }}
          />
          <button
            onClick={sendRequest}
            type="button"
            className=" w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            {type === "signup" ? "Signup" : "Signin"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;

import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import InputText from "../../components/InputText";
import SubmitButton from "../../components/SubmitButton";
import { useMutation } from "@tanstack/react-query";
import { auth } from "../../api/apiClient";
import toast from "react-hot-toast";
function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const loginMutation = useMutation({
    mutationFn: auth,
    onSuccess: (res) => {
      if (res && res.token) {
        const token = res.token;
        console.log("Token received", token);
        localStorage.setItem("token", token);
      } else {
        console.error("Token not found in response:", res);
      }
      setLoading(false);
      toast.success("Logged in!!! Welcome to SewIT");
      // navigate("/");
    },
    onError: (error) => {
      console.log(error);
      setLoading(false);
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setErrorMsg(error.response?.data?.message || "An error occurred");
      }
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");
    try {
      await loginMutation.mutateAsync({
        email,
        password,
      });
    } catch (error) {
      // Error handling is already done in the onError callback
    }
  };
  return (
    <div className="w-screen h-screen">
      <div className="w-full flex md:flex-row flex-col">
        <div className="md:w-2/4 w-full h-screen hidden md:flex">
          <img
            src="/banner3.jpg"
            alt="backgroundimg"
            width={700}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:w-2/4 w-full h-screen flex flex-col items-center justify-center bg-slate-900">
          <h2 className="font-medium text-2xl text-white">Login</h2>
          <form
            className="md:w-2/4 w-full px-4 md:px-0"
            onSubmit={handleSubmit}
          >
            <InputText
              type="email"
              placeholder="Enter your email"
              name="email"
              className="w-full px-2 py-2 rounded-md shadow-sm my-2"
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputText
              type="password"
              placeholder="Enter your password"
              name="password"
              className="w-full px-2 py-2 rounded-md shadow-sm my-2"
              onChange={(e) => setPassword(e.target.value)}
            />
            {errorMsg && (
              <div className="text-red-400 w-full text-center text-xs">
                {errorMsg}
              </div>
            )}
            <SubmitButton
              className="w-full bg-yellow-400 text-white text-base rounded-md cursor-pointer flex items-center justify-center px-2 py-2 mt-2 hover:bg-black hover:text-slate-100 transition duration-1000 ease-in-out"
              title="Login"
              isLoading={loading}
            />
          </form>
          <div className="md:w-2/4 w-full flex flex-col mt-3">
            <div className="text-white w-full text-sm text-center">
              Forgot your password?{" "}
              <span className="mx-1 text-xs font-semibold text-yellow-300 cursor-pointer">
                Recover password
              </span>
            </div>
            <div className="text-white w-full text-sm text-center">
              You have not registered?{" "}
              <span
                className="mx-1 text-xs font-semibold text-yellow-300 cursor-pointer"
                onClick={() => navigate("/register")}
              >
                Register
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import InputText from "../../components/InputText";
import SubmitButton from "../../components/SubmitButton";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { registerUser } from "../../api/apiClient";
import toast from "react-hot-toast";
function Register() {
  const navigate = useNavigate();
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);
  const queryClient = useQueryClient();
  // GET
  // const { isLoading, data, isError } = useQuery({
  //   queryKey: ["USER"],
  //   queryFn: testApi,
  // });
  // if (isError) {
  //   return <h1>Error occured</h1>;
  // }
  // POST.
  // Mutations
  const registerMutation = useMutation({
    mutationFn: registerUser,
    onSuccess: () => {
      queryClient.invalidateQueries("USER");
      setLoading(false);
      toast.success("Registered well!!!");
      navigate("/login");
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
      await registerMutation.mutateAsync({
        email,
        password,
        fullname,
      });
    } catch (error) {
      // Error handling is already done in the onError callback
    }
  };
  // console.log(data)
  return (
    <div className="w-screen h-screen">
      <div className="w-full flex md:flex-row flex-col">
        <div className="md:w-2/4 w-full h-screen hidden md:flex">
          <img
            src="/banner2.jpg"
            alt="backgroundimg"
            width={700}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:w-2/4 w-full h-screen flex flex-col items-center justify-center bg-slate-900">
          <h2 className="font-medium text-2xl text-white">Register</h2>
          <form
            className="md:w-2/4 w-full px-4 md:px-0"
            onSubmit={handleSubmit}
          >
            <InputText
              type="text"
              placeholder="Enter your Fullname"
              name="fullname"
              className="w-full px-2 py-2 rounded-md shadow-sm my-2"
              onChange={(e) => setFullname(e.target.value)}
            />
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
              title="Register"
              isLoading={loading}
            />
          </form>
          <div className="md:w-2/4 w-full flex flex-col mt-3">
            {/* <div className="text-white w-full text-sm text-center">
              Forgot your password?{" "}
              <span className="mx-1 text-xs font-semibold text-yellow-300 cursor-pointer">
                Recover password
              </span>
            </div> */}
            <div className="text-white w-full text-sm text-center">
              You Already have an account?{" "}
              <span
                className="mx-1 text-xs font-semibold text-yellow-300 cursor-pointer"
                onClick={() => navigate("/login")}
              >
                Login
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;

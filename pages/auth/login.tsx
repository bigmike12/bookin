/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import React from "react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import Booking from "../booking";
import { ImSpinner2 } from "react-icons/im";

interface FormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [form, setForm] = useState<FormData>({
    email: "",
    password: "",
  });
  const [status, setStatus] = useState<number>();
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (form.email === "" || form.password === "") {
      return toast.error("Please fill all fields");
    }
    setLoading(true);
    try {
      const res = await axios.post(`/api/auth/login`, form);
      setStatus(res.status);
      setUsername(res.data.user.username);
      toast.success(res.data.massage);
      setLoading(false);
    } catch (error: any) {
      toast.error(error.response.data.message);
      console.log(error);
    }
  };

  return (
    <div>
      {status !== 200 ? (
        <div className="flex flex-col justify-center items-center h-screen w-screen">
          <div>
            <h1 className="font-bold text-base sm:text-lg mb-2 text-center">
              Bookin.com
            </h1>
            <h2 className="font-medium sm:text-2xl sm:font-bold mb-4">
              Sign In to your account
            </h2>
          </div>
          <div className="w-3/4 sm:max-w-md flex-row sm:w-full bg-white p-5 rounded">
            <div className="mb-2">
              <label className="block text-sm">Email Address</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="border-2 rounded border-gray-200 p-1 my-2 w-full"
              />
            </div>
            <div className="mb-2">
              <label className="block text-sm">Password</label>
              <input
                type="password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                className="border-2 rounded border-gray-200 p-1 my-2 w-full"
              />
            </div>
            <button
              className="border-3 rounded w-full bg-gray-900 text-white p-2 my-2 flex justify-center items-center"
              onClick={() => handleSubmit()}
            >
              {loading ? (
                <ImSpinner2 className="animate-spin h-5 w-5 mr-3" />
              ) : (
                "Sign In"
              )}
            </button>
          </div>
          <p className="text-xs mt-4 text-gray-600 cursor-default">
            Don't have an account?{" "}
            <Link href="/" passHref>
              <span className="text-sm text-gray-900">Create an account</span>
            </Link>
          </p>
          <Toaster position="top-center" />
        </div>
      ) : username !== "" ? (
        <Booking user={username} />
      ) : null}
    </div>
  );
};

export default Login;

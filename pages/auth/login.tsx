/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import React from "react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import Booking from "../booking";
import Icon from "../../assets/Icon";

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
      toast.success(res.data.message);
      setStatus(res.status);
      setUsername(res.data.user.username);
      setLoading(false);
    } catch (error: any) {
      toast.error(error.response.data.message);
      setForm({ email: "", password: "" });
      setLoading(false);
    }
  };

  return (
    <div>
      <Toaster position="top-center" />
      {status !== 200 ? (
        <div className="flex flex-col items-center justify-center w-screen h-screen sm:h-screen">
          <div>
            <h1 className="mb-2 text-base font-bold text-center sm:text-lg">
              Bookin.com
            </h1>
            <h2 className="mb-4 font-medium sm:text-2xl sm:font-bold">
              Sign In to your account
            </h2>
          </div>
          <div className="flex-row w-3/4 p-5 bg-white rounded sm:max-w-md sm:w-full">
            <div className="mb-2">
              <label className="block text-sm">Email Address</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full p-1 my-2 border-2 border-gray-200 rounded"
              />
            </div>
            <div className="mb-2">
              <label className="block text-sm">Password</label>
              <input
                type="password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                className="w-full p-1 my-2 border-2 border-gray-200 rounded"
              />
            </div>
            <button
              className="flex items-center justify-center w-full p-2 my-2 text-white bg-gray-900 rounded border-3"
              onClick={() => handleSubmit()}
            >
              {loading ? (
                <Icon name="spinner" className="w-6 h-6 animate-spin" />
              ) : (
                "Sign In"
              )}
            </button>
          </div>
          <p className="mt-4 text-xs text-gray-600 cursor-default">
            Don't have an account?{" "}
            <Link href="/" passHref>
              <span className="text-sm font-bold text-gray-900">
                Create an account
              </span>
            </Link>
          </p>
        </div>
      ) : username !== "" ? (
        <Booking user={username} />
      ) : null}
    </div>
  );
};

export default Login;

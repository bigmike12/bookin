/* eslint-disable react/no-unescaped-entities */
import axios from "axios";
import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Icon from "../assets/Icon";

interface FormData {
  username: string;
  email: string;
  password: string;
}

const Home: NextPage = () => {
  const initialState = { username: "", email: "", password: "" };
  const [form, setForm] = useState<FormData>({
    username: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    if (form.username === "" || form.email === "" || form.password === "") {
      return toast.error("Please fill all fields");
    }
    setLoading(true);

    e.preventDefault();
    try {
      const res = await axios.post(`/api/auth/register`, form);
      toast.success(res.data.data.massage);
      console.log(res.data.data);
      setLoading(false);
      router.push("/auth/login");
    } catch (error: any) {
      toast.error(error?.response?.data?.message);
      setForm(initialState);
      setLoading(false);
    }
  };

  return (
    <div className="h-screen p-12 mt-3 sm:flex sm:justify-center sm:items-center">
      <Toaster position="top-center" />
      <div className="mb-5 sm:px-10 sm:max-w-screen-sm">
        <h1 className="mb-3 text-lg font-bold">Bookin.com</h1>
        <h2 className="w-8/12 mb-2 font-bold text-medium sm:text-4xl">
          You're one step away from simpler scheduling.
        </h2>
        <p className="text-xs font-light sm:py-6 sm:w-10/12">
          "I love being able to use a tool that just works, and that is open
          source. As a developer, I love being empowered to contribute to a tool
          that I use regularly."
        </p>
      </div>
      <div className="mt-4 sm:pr-10 sm:max-w-screen-sm">
        <form
          className="p-4 text-xs bg-white border-2 border-gray-200 rounded"
          onSubmit={(e) => handleSubmit(e)}
        >
          <p className="py-2 text-lg font-bold">Start your 14-day free trial</p>
          <input
            type="text"
            placeholder="Username"
            value={form.username}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
            className="w-full p-2 my-2 border-2 border-gray-200 rounded focus:invalid:border-pink-500"
          />
          <input
            type="email"
            placeholder="Email Address"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full p-2 my-2 border-2 border-gray-200 rounded focus:invalid:border-pink-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="w-full p-2 my-2 border-2 border-gray-200 rounded focus:invalid:border-pink-500"
          />
          <button className="flex justify-center w-full p-3 my-2 text-white bg-gray-900 rounded border-3">
            {loading ? (
              <Icon name="spinner" className="w-6 h-6 animate-spin" />
            ) : (
              <h2 className="text-base">Sign Up For Free</h2>
            )}
          </button>
          <div className="py-2">
            <p className="cursor-default hover:">
              Already have registered?{" "}
              <Link href="/auth/login" passHref>
                <span className="text-sm font-bold text-red-500 underline decoration-1">
                  Log In
                </span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;

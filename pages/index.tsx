/* eslint-disable react/no-unescaped-entities */
import axios from "axios";
import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { ImSpinner2 } from "react-icons/im";

interface FormData {
  username: string;
  email: string;
  password: string;
}

const Home: NextPage = () => {
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
      toast(res.data.massage);
      setLoading(false);
      router.push("/auth/login");
    } catch (error: any) {
      // toast.error(error.response.data.message);
      console.log(error);
    }
  };

  return (
    <div className="mt-3 sm:flex sm:justify-center sm:items-center h-screen p-12">
      <Toaster position="top-center" />
      <div className="sm:px-10 sm:max-w-screen-sm mb-5">
        <h1 className="font-bold mb-3 text-lg">Bookin.com</h1>
        <h2 className="text-medium mb-2 sm:text-4xl w-8/12 font-bold">
          You're one step away from simpler scheduling.
        </h2>
        <p className="text-xs sm:py-6 sm:w-10/12 font-light">
          "I love being able to use a tool that just works, and that is open
          source. As a developer, I love being empowered to contribute to a tool
          that I use regularly."
        </p>
      </div>
      <div className="mt-4 sm:pr-10 sm:max-w-screen-sm">
        <form
          className="border-2 rounded border-gray-200 p-4 text-xs bg-white"
          onSubmit={(e) => handleSubmit(e)}
        >
          <p className="font-bold py-2 text-lg">Start your 14-day free trial</p>
          <input
            type="text"
            placeholder="Username"
            value={form.username}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
            className="border-2 rounded border-gray-200 p-2 w-full my-2 focus:invalid:border-pink-500"
          />
          <input
            type="email"
            placeholder="Email Address"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="border-2 rounded border-gray-200 p-2 w-full my-2 focus:invalid:border-pink-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="border-2 rounded border-gray-200 p-2 w-full my-2 focus:invalid:border-pink-500"
          />
          <button className="border-3 rounded w-full bg-gray-900 text-white p-3 my-2">
            {loading ? (
              <ImSpinner2 className="animate-spin h-5 w-5 mr-3" />
            ) : (
              "Sign up for free"
            )}
          </button>
          <div className="py-2">
            <p className="hover: cursor-default">
              Already have registered?{" "}
              <Link href="/auth/login" passHref>
                <span className="text-sm font-bold underline decoration-1 text-red-500">
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

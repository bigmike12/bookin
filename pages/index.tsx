/* eslint-disable react/no-unescaped-entities */
import axios from "axios";
import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

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
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    const host = window.location.host;

    e.preventDefault();
    try {
      const res = await axios.post(`http://${host}/api/auth/register`, form);
      toast(res.data.massage);
      router.push("/auth/login");
    } catch (error: any) {
      // toast.error(error.response.data.message);
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen p-12">
      <Toaster />
      <div className="px-10 max-w-screen-sm">
        <h1 className="font-bold mb-3 text-lg">Bookin.com</h1>
        <h2 className="text-4xl w-8/12 font-bold">
          You're one step away from simpler scheduling.
        </h2>
        <p className="py-6 w-10/12 text-sm font-light">
          "I love being able to use a tool that just works, and that is open
          source. As a developer, I love being empowered to contribute to a tool
          that I use regularly."
        </p>
      </div>
      <div className="pr-10 max-w-screen-sm">
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
            Sign up for free
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

import axios from "axios";
import dayjs from "dayjs";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { AiFillClockCircle } from "react-icons/ai";
import { BsFillCalendarFill } from "react-icons/bs";
import Success from "./Success";
import { NextPage } from "next";

interface FormData {
  userId: number;
  title: string;
  startTime: string;
  endTime: string;
  attendeName: string;
  attendeEmail: string;
  description: string;
}

interface Props {
  name: any;
  date: any;
  userId: any;
}

const ConfirmBooking: NextPage<Props> = ({ name, date, userId }) => {
  const future = dayjs(date).add(15, "minute").toString();

  const title = "15 Minutes Meeting";
  const [status, setStatus] = useState<number>();
  const [form, setForm] = useState<FormData>({
    userId: userId,
    title: title,
    startTime: date,
    endTime: future,
    attendeName: "",
    attendeEmail: "",
    description: "",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const res = await axios.post(`/api/books/submitbook`, form);
      setStatus(res.status);
      console.log(res);
    } catch (error: any) {
      toast.error(error.response.data.message);
      console.log(error);
    }
  };

  return (
    <div>
      {status !== 200 ? (
        <div className="bg-[#111111] h-screen pt-40">
          <div className="flex justify-center bg-[#292929] mx-auto w-[60%] h-[55%]">
            <div className="mr-auto w-6/12 border-r border-gray-300 p-6 text-gray-200">
              <p className="text-xs font-semibold">{name}</p>
              <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
              <div className="flex items-center mb-1">
                <AiFillClockCircle className="mr-1 text-[#888888] text-sm" />
                <h3 className="text-[12px] font-bold text-[#888888]">
                  15 Minutes
                </h3>
              </div>
              <div className="flex items-center">
                <BsFillCalendarFill className="mr-1 text-[#888888] text-sm" />
                <p className="font-semibold text-[16px] text-green-400">
                  {`${dayjs(date).format("h:mm A")}`}
                </p>
              </div>
            </div>
            <div className="w-6/12 p-4 text-white">
              <form
                onSubmit={(e) => {
                  handleSubmit(e);
                }}
              >
                <div className="mb-2">
                  <label className="block text-sm">Your Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    value={form.attendeName}
                    onChange={(e) =>
                      setForm({ ...form, attendeName: e.target.value })
                    }
                    className="rounded border-gray-200 p-[10px] w-full text-sm bg-[#111111]"
                  />
                </div>
                <div className="mb-2">
                  <label className="block text-sm">Email Address</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={form.attendeEmail}
                    onChange={(e) =>
                      setForm({ ...form, attendeEmail: e.target.value })
                    }
                    className="rounded border-gray-200 p-[10px] w-full text-sm bg-[#111111]"
                  />
                </div>
                <div className="mb-2">
                  <label className="block text-sm">Additional Note</label>
                  <textarea
                    placeholder="Please share anything that will help prepare for our meeting."
                    rows={4}
                    value={form.description}
                    onChange={(e) =>
                      setForm({ ...form, description: e.target.value })
                    }
                    className="rounded border-gray-200 p-[10px] w-full text-sm bg-[#111111] resize-none"
                  />
                </div>
                <div>
                  <button className="text-sm bg-white text-black p-2 mr-2">
                    Confirm
                  </button>
                  <button className="text-sm border-[.5px] border-white text-white p-2">
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <Success />
      )}
    </div>
  );
};

export default ConfirmBooking;

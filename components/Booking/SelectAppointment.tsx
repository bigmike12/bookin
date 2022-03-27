import React from "react";
import { NextPage } from "next";

const SelectAppointment: NextPage<any> = ({ nextStep, setDate, date }) => {
  const lenght = date.length > 0 ? false : true;
  return (
    <div className="bg-[#111111] h-screen text-white">
      <div className="flex justify-center items-center h-screen flex-col">
        <h2 className="font-bold text-xl">Welcome to Bookin.com</h2>
        <div className="flex flex-col" onSubmit={(e) => e.preventDefault}>
          <label htmlFor="meeting-time" className="mb-4">
            Choose a time for your appointment:
          </label>
          <input
            type="datetime-local"
            id="meeting-time"
            name="meeting-time"
            min="now"
            max="lastDay"
            className="p-5 text-gray-700"
            onChange={(e) => setDate(e.target.value)}
          />
          <button
            className="mt-4 p-2 bg-gray-600 rounded-lg text-black hover:bg-gray-200"
            disabled={lenght}
            onClick={() => nextStep()}
          >
            Next {">"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectAppointment;

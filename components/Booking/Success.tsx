import React from "react";
import { GrStatusGood } from "react-icons/gr";

const Success = () => {
  return (
    <div className="bg-[#111111] h-screen pt-40">
      <div className="flex justify-center bg-[#292929] mx-auto w-[60%] h-[55%]">
        <div className="flex justify-center items-center flex-row">
          <div className="mr-3">
            <GrStatusGood
              className="text-green-700 bg-green-700 text-[50px]"
              stroke="color-green"
              fill="color-green"
            />
          </div>
          <div>
            <h1 className="text-white text-[30px]">
              Successful Scheduled The Meeting...
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;

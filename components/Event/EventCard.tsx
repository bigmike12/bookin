import React from "react";
import { BiTimeFive } from "react-icons/bi";
import { IoIosPeople } from "react-icons/io";

const EventCard = ({ types }) => {
  return (
    <div>
      {types.map((type) => (
        <div
          key={type.id}
          className="flex flex-col bg-gray-100 border rounded-md p-1"
        >
          <div className="flex flex-row ml-2">
            <p className="mr-4 font-medium">{type.name}</p>
            <span className="font-medium text-gray-400 text-sm ml-5">{`/testing/${type.name}`}</span>
          </div>
          <div className="w-1/4 flex space-x-4 my-2 ml-2">
            <div className="flex items-center">
              <BiTimeFive />
              <p className="ml-1">{type.time}</p>
            </div>
            <div className="flex items-center">
              <IoIosPeople />
              <p className="ml-1">{type.person}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventCard;

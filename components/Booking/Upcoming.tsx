import React from "react";
import { GrFormClose } from "react-icons/gr";
import { AiOutlineClockCircle } from "react-icons/ai";
import dayjs from "dayjs";

const Upcoming = ({ books }: any) => {
  return (
    <div>
      {books !== [] ? (
        books?.map((book: any) => (
          <div
            key={book.id}
            className="flex mt-4 bg-white border rounded-md p-3"
          >
            <div className="mr-10 text-xs">
              <p className="font-medium">{`${dayjs(book.startTime).format(
                "MMM D, YYYY"
              )}`}</p>
              <p className="text-gray-400">{`${dayjs(book.startTime).get(
                "hour"
              )}${`:`}${dayjs(book.startTime).get("minutes")} ${`-`} ${dayjs(
                book.endTime
              ).get("hour")}${`:`}${dayjs(book.endTime).get("minutes")}`}</p>
            </div>

            <div className="text-xs">
              <p className="font-medium p-[1px]">{book.title}</p>
              <p className="text-gray-400 p-[1px]">{`"${book.description}"`}</p>
              <p className="p-[1px]">{book.attendeEmail}</p>
            </div>

            <div className="flex items-start ml-auto">
              <div className="flex items-center px-2 py-2 rounded-md border mr-2 hover:bg-gray-200">
                <GrFormClose className="mr-1" />
                <p className="text-xs">Cancel</p>
              </div>
              <div className="flex items-center px-2 py-2 rounded-md border hover:bg-gray-200">
                <AiOutlineClockCircle className="mr-1" />
                <p className="text-xs">Reschedule</p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div>
          <h1>Sorry You Have No Booking At This Time</h1>
        </div>
      )}
    </div>
  );
};

export default Upcoming;

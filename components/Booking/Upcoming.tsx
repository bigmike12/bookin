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
            className="flex mt-4 bg-white border rounded-md p-3 sm:p-3 h-[150px] sm:h-[85px]"
          >
            <div className="mr-10 sm:mr-[80px] text-[10px] sm:text-xs w-[20px] sm:w-[80px]">
              <p className="font-medium">{`${dayjs(book.startTime).format(
                "MMM D, YYYY"
              )}`}</p>
              <p className="text-gray-400">{`${dayjs(book.startTime).get(
                "hour"
              )}${`:`}${dayjs(book.startTime).get("minutes")} ${`-`} ${dayjs(
                book.endTime
              ).get("hour")}${`:`}${dayjs(book.endTime).get("minutes")}`}</p>
            </div>

            <div className="sm:text-xs text-xs w-[100px] sm:w-[400px] sm:ml-9">
              <p className="font-medium p-[1px] text-[10px] sm:text-[12px]">
                {book.title}
              </p>
              <p className="text-gray-400 p-[1px] text-[10px] sm:text-[12px]">{`"${book.description}"`}</p>
              <p className="p-[1px] text-[10px] sm:text-[12px]">
                {book.attendeEmail}
              </p>
            </div>

            <div className="sm:flex sm:flex-row sm:items-start sm:ml-auto ml-auto">
              <div className="flex items-center justify-center py-2 rounded-md border mr-2 hover:bg-gray-200 w-[80px] sm:w-[100px] mb-3">
                <GrFormClose className="mr-1 sm:text-xs text-[10px]" />
                <p className="sm:text-xs text-[10px]">Cancel</p>
              </div>
              <div className="flex items-center justify-center py-2 rounded-md border hover:bg-gray-200 w-[80px] sm:w-[100px]">
                <AiOutlineClockCircle className="mr-1 sm:text-xs text-[10px]" />
                <p className="sm:text-xs text-[10px]">Reschedule</p>
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

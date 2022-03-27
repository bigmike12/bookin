import axios from "axios";
import React, { useEffect, useState } from "react";
import Upcoming from "../../components/Booking/Upcoming";

const Booking = ({ user }: any) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const host = window.location.host;

    const testing = async () => {
      try {
        const res = await axios.post(`https://${host}/api/auth/userid`, {
          username: user,
        });
        setBooks(res.data.books.bookings);
      } catch (error: any) {
        console.log(error);
      }
    };
    testing();
  }, [user]);

  const [pointer, setPointer] = useState(0);
  const [active, setActive] = useState(true);

  return (
    <div className="mt-20 p-10">
      <div>
        <h1 className="text-lg font-semibold">Bookings</h1>
        <p className="text-gray-400">
          See upcoming and past events booked through your event type links
        </p>
      </div>
      <div>
        <div className="flex mt-12 text-sm space-x-6">
          <div
            className={`${
              0 === pointer &&
              active &&
              "text-black cursor-default pb-5 border-b-2 border-black"
            } text-gray-400 cursor-default`}
            onClick={() => {
              setPointer(0), setActive(true);
            }}
            key={0}
          >
            Upcoming
          </div>
          <div
            className={`${
              1 === pointer &&
              active &&
              "text-black cursor-default pb-5 border-b-2 border-black"
            } text-gray-400 cursor-default`}
            onClick={() => {
              setPointer(1), setActive(true);
            }}
            key={1}
          >
            Past
          </div>
          <div
            className={`${
              2 === pointer &&
              active &&
              "text-black cursor-default pb-5 border-b-2 border-black"
            } text-gray-400 cursor-default`}
            onClick={() => {
              setPointer(2), setActive(true);
            }}
            key={2}
          >
            Cancelled
          </div>
        </div>
        <div className="border-t-2">
          <Upcoming books={books} />
        </div>
      </div>
    </div>
  );
};

export default Booking;

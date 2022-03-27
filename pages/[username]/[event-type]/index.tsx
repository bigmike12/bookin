import axios from "axios";
import React, { useEffect, useState } from "react";
import NotFoundPage from "../../404";
import TimeBooking from "../../../components/Booking/TimeBooking";

let username: string;
const AppointmentPage = () => {
  const [url, setUrl] = useState("");
  const [user, setUser] = useState(null);

  const fetchUser = async (path: string) => {
    const urlElements = url.split("/");
    username = urlElements[urlElements.length - 2];
    try {
      const res = await axios.get(
        `http://localhost:3000/api/booking/${username}/15min`
      );
      setUser(res.data.user);
      console.log("ibyg", res.data.user);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const location = window.location.href;
    setUrl(location);
    if (url !== "") {
      fetchUser(location);
    }
    //eslint-disable-next-line
  }, [url]);

  return (
    <div>{user === null ? <NotFoundPage /> : <TimeBooking user={user} />}</div>
  );
};

export default AppointmentPage;

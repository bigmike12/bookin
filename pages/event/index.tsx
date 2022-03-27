import React from "react";
import EventCard from "../../components/Event/EventCard";

const defaultBookings = [
  {
    id: 1,
    name: "Secret Meeting",
    time: "30m",
    person: "1-on-1",
  },
  {
    id: 2,
    name: "15 Min Meeting",
    time: "15m",
    person: "1-on-1",
  },
  {
    id: 3,
    name: "30 Min Meeting",
    time: "30m",
    person: "1-on-1",
  },
];
const EventType = () => {
  return (
    <div className="p-10">
      <div>
        <h2 className="font-bold text-lg">Event Types</h2>
        <p className="text-gray-400 text-sm">
          See upcoming and past events booking through your event type links.
        </p>
      </div>

      <div className="max-w-full mt-5">
        <EventCard types={defaultBookings} />
      </div>
    </div>
  );
};

export default EventType;

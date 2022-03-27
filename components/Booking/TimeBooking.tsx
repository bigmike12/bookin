import React, { useState } from "react";
import ConfirmBooking from "./ConfirmBooking";
import SelectAppointment from "./SelectAppointment";

const TimeBooking = ({ user }: any) => {
  const [step, setStep] = useState(1);
  const { username, id } = user;
  const [date, setDate] = useState("");

  const nextStep = () => {
    setStep(step + 1);
  };

  return (
    <div>
      {(() => {
        switch (step) {
          case 1:
            return (
              <SelectAppointment
                nextStep={nextStep}
                setDate={setDate}
                date={date}
              />
            );
          case 2:
            return <ConfirmBooking date={date} name={username} userId={id} />;
        }
      })()}
    </div>
  );
};

export default TimeBooking;

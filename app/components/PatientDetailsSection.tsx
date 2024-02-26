import clsx from "clsx";
import { getPatientColor } from "../utils/getPatientColor";
import { SetStateAction, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

type PatientDetailsSectionProps = {
  firstName: string;
  lastName: string;
  sex: string;
  age: string;
  color: string;
  isVaccinated: boolean;
};

export const PatientDetailsSection = ({
  firstName,
  lastName,
  sex,
  age,
  color,
  isVaccinated,
}: PatientDetailsSectionProps) => {
  const [startDate, setStartDate] = useState(new Date());
  const patientColor = getPatientColor(color);
  const patientName = `${firstName} ${lastName}`;
  return (
    <section className="py-6 flex flex-col md:flex-row gap-lg">
      <img src="../img/default-user.png" alt="default user logo" />
      <div className="p-8">
        <p>Patient Name: {patientName};</p>
        <p> Patient Age: {age} years;</p>
        <p>Patient Sex: {sex};</p>
        <div className="flex gap-sm">
          <p>Patient Status:</p>
          <p className={clsx("rounded-full p-3 w-1.5", patientColor)}></p>
        </div>
        {!isVaccinated ? (
          <div className="flex">
            <p className="self-end">Choose time for next vaccination:</p>
            <DatePicker
              selected={startDate}
              onChange={(date: SetStateAction<any>) => setStartDate(date)}
            />
          </div>
        ) : null}
      </div>
    </section>
  );
};

//We need create form for submit choosen vaccination date, POST for send the data to a database
//Without database we can save in local storage or create PatientContext and PatientContextProvider with createContext() hook and save date.

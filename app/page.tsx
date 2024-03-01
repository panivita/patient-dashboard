"use client";
import { useEffect, useState } from "react";
import PatientsFetch from "./services/patientsfetch";
import { Patient } from "./components/Patient";

interface IPatient {
  firstName: string;
  lastName: string;
  sex: string;
  age: string;
  color: string;
  id: string | number;
  bookedDate: string;
}

export default function Page() {
  const [patientsList, setPatientsList] = useState<IPatient[]>([]);

  useEffect(() => {
    (async () => {
      const result = await PatientsFetch();
      setPatientsList(result.patients);
    })();
  }, []);

  return (
    <>
      <h1 className="text-center text-4xl">Dashboard</h1>
      <div className="grid grid-cols-1 mx-xxs md:grid-cols-4 gap-sm mx-0 md:gap-lg">
        {patientsList &&
          patientsList.map((patient) => (
            <Patient key={patient.id} {...patient} />
          ))}
      </div>
    </>
  );
}

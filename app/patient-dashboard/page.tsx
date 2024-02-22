"use client";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { getPatientColor } from "../utils/getPatientColor";
import { useEffect, useState } from "react";
import PatientsFetch from "../services/patientsfetch";

export default function Page() {
  const router = useRouter();
  const [patientsList, setPatientsList] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await PatientsFetch();
      setPatientsList(result.patients);
    })();
  }, []);

  const goToPatientDetailsPage = (id: string | number) => {
    router.push("/patient-dashboard/" + id);
  };

  return (
    <main className="w-full md:w-2/3 p-16 overflow-hidden m-auto bg-white">
      <h2 className="text-center text-4xl">Patients Dashboard</h2>
      <div className="grid grid-cols-1 mx-xxs md:grid-cols-4 gap-sm mx-0 md:gap-lg">
        {patientsList &&
          patientsList.map(
            ({ firstName, lastName, sex, age, color, id }) => {
              const patientColor = getPatientColor(color);
              const patientName = `${firstName} ${lastName}`;
              return (
                <div
                  key={id}
                  className={clsx(
                    "rounded-xl p-8 cursor-pointer",
                    patientColor
                  )}
                  onClick={() => goToPatientDetailsPage(id)}
                >
                  <big>{patientName}</big>
                  <p>
                    {age}, {sex}
                  </p>
                </div>
              );
            }
          )}
      </div>
    </main>
  );
}

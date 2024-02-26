"use client";
import { useState, useEffect } from "react";
import PatientsFetch from "../../services/patientsfetch";
import { getPatientColor } from "@/app/utils/getPatientColor";
import clsx from "clsx";
import { PatientDetailsSection } from "@/app/components/PatientDetailsSection";

interface IPatient {
  firstName: string;
  lastName: string;
  sex: string;
  age: string;
  color: string;
  isVaccinated: boolean;
}

export default function Page({ params }: { params: { slug: string } }) {
  const [patient, setPatient] = useState<IPatient>();

  useEffect(() => {
    (async () => {
      const result = await PatientsFetch();
      const patientById = result.patients.find(
        (patients: { id: string | number }) =>
          patients.id === Number(params.slug)
      );
      setPatient(patientById);
    })();
  }, [params.slug]);

  return (
    <main className="w-full md:w-2/3 p-16 overflow-hidden m-auto bg-white">
      {patient && <PatientDetailsSection {...patient} />}
    </main>
  );
}

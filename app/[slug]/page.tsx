"use client";
import { useState, useEffect } from "react";
import PatientsFetch from "../services/patientsfetch";
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
    <>
      {patient && <PatientDetailsSection {...patient} />}
    </>
  );
}

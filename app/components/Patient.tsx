import clsx from "clsx";
import { getPatientColor } from "../utils/getPatientColor";
import Link from "next/link";

type PatientProps = {
  firstName: string;
  lastName: string;
  sex: string;
  age: string;
  color: string;
  id: string | number;
  bookedDate: string;
};

export const Patient = ({
  firstName,
  lastName,
  sex,
  age,
  color,
  id,
  bookedDate
}: PatientProps) => {
  const patientColor = getPatientColor(color);
  const patientName = `${firstName} ${lastName}`;
  const booked = new Date(bookedDate).toLocaleDateString('en-GB');
  return (
    <Link
      key={id}
      className={clsx("rounded-xl p-8 cursor-pointer", patientColor)}
      href={`/${id}`}
    >
      <big>{patientName}</big>
      <p>
        {age}, {sex}
      </p>
      {bookedDate && <p>Next appoinment: {booked}</p>}
    </Link>
  );
};

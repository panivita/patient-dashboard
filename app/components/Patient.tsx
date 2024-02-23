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
};

export const Patient = ({
  firstName,
  lastName,
  sex,
  age,
  color,
  id,
}: PatientProps) => {
  const patientColor = getPatientColor(color);
  const patientName = `${firstName} ${lastName}`;
  return (
    <Link
      key={id}
      className={clsx("rounded-xl p-8 cursor-pointer", patientColor)}
      href={`/patient-dashboard/${id}`}
    >
      <big>{patientName}</big>
      <p>
        {age}, {sex}
      </p>
    </Link>
  );
};

//if patient have booked  date for vaccination (fetch database or check localstorage or using PatientContext), we will also display it here

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
      href={`/${id}`}
    >
      <big>{patientName}</big>
      <p>
        {age}, {sex}
      </p>
    </Link>
  );
};

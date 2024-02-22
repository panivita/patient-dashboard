import clsx from "clsx";
import { patientsData } from "../data/patients";
import { getAge, getVactinationAge } from "../utils/getAge";
import { getPatientColor } from "../utils/getPatientColor";

export default function Page() {
  const patients = patientsData.filter(({ birthDate }) => {
    const age = getAge(birthDate);
    return age < 16; // Only patients below 16 years of age should be displayed, I think 16 years patients  not should be displayed, but if I understand not correct we will need change condition to  age <= 16
  });

  const patientsWithAge = patients.map((patients) => {
    let color = "";
    const age = getAge(patients.birthDate);
    const vactAge =
      patients.vaccinationDate !== null
        ? getVactinationAge(patients.birthDate, patients.vaccinationDate)
        : null;
    if (vactAge !== null && patients.isVaccinated) {
      if (
        (patients.sex === "male" && vactAge <= 13 && vactAge >= 11) ||
        (patients.sex === "female" && vactAge <= 9 && vactAge >= 7)
      ) {
        color = "blue";
      } else {
        color = "red";
      }
    } else {
      if (
        (patients.sex === "male" && age <= 13 && age >= 11) ||
        (patients.sex === "female" && age <= 9 && age >= 7)
      ) {
        color = "yellow";
      }
    }

    return { ...patients, age: age, color: color };
  });

  return (
    <main className="w-full md:w-2/3 p-16 overflow-hidden m-auto bg-white">
		<h2 className="text-center text-4xl">Patients Dashboard</h2>
      <div className="grid grid-cols-1 mx-xxs md:grid-cols-4 gap-sm mx-0 md:gap-lg">
        {patientsWithAge.map(
          ({ firstName, lastName, sex, age, color }, index) => {
            const patientColor = getPatientColor(color);
            return (
              <div key={index} className={clsx("rounded-xl p-8", patientColor)}>
                <big>
                  {firstName} {lastName}
                </big>
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

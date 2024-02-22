import { PatientsData } from "../data/patients";
import { getAge, getVactinationAge } from "../utils/getAge";

const PatientsFetch = () => {
  const data = PatientsData();

  const patientsPromise: Promise<any> = new Promise((resolve) => {
    setTimeout(() => {
      const patients = data.filter(({ birthDate }) => {
        const age = getAge(birthDate);
        return age < 16; // Only patients below 16 years of age should be displayed, I think 16 years patients  not should be displayed, but if I understand not correct we will need change condition to  age <= 16
      });
      const patientsWithAge = patients.map((patients, index) => {
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

        return { ...patients, age: age, color: color, id: index + 1 };
      });
      resolve({ patients: patientsWithAge });
    }, 500);
  });
  return patientsPromise;
};

export default PatientsFetch;

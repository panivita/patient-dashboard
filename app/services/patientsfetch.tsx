import { PatientsData } from '../data/patients';
import { getAge } from '../utils/getAge';

const PatientsFetch = () => {
  const data = PatientsData();

  const patientsPromise: Promise<any> = new Promise((resolve) => {
    setTimeout(() => {
      const dateNow = Date.now();
      const patients = data.filter(({ birthDate }) => {
        const age = getAge(birthDate, dateNow);
        return age < 16;
      });
      const patientsWithAge = patients.map((patients, index) => {
        let color = '';
        const age = getAge(patients.birthDate, dateNow);
        const vacDate = patients.vaccinationDate !== null && new Date(patients.vaccinationDate).getTime()
        const vactAge =
          patients.vaccinationDate !== null ? getAge(patients.birthDate, vacDate) : null;
        if (vactAge !== null && patients.isVaccinated) {
          if (
            (patients.sex === 'male' && vactAge <= 13 && vactAge >= 11) ||
            (patients.sex === 'female' && vactAge <= 9 && vactAge >= 7)
          ) {
            color = 'blue';
          } else {
            color = 'red';
          }
        } else {
          if (
            (patients.sex === 'male' && age <= 13 && age >= 11) ||
            (patients.sex === 'female' && age <= 9 && age >= 7)
          ) {
            color = 'yellow';
          }
        }
        const saved = localStorage.getItem('bookedDate');
        const savedDate = saved !== null && JSON.parse(saved);
        const bookedDateList = savedDate.find((datesList: { id: string | number }) => Number(datesList.id) === index);
        const bookedDate = bookedDateList ? bookedDateList.startDate : '';
        return { ...patients, age: age, color: color, id: index, bookedDate: bookedDate };
      });
      resolve({ patients: patientsWithAge });
    }, 500);
  });
  return patientsPromise;
};

export default PatientsFetch;

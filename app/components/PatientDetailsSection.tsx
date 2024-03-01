/* eslint-disable @next/next/no-img-element */
import clsx from 'clsx';
import { getPatientColor } from '../utils/getPatientColor';
import { SetStateAction, useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import { usePathname, useSearchParams } from 'next/navigation';

type PatientDetailsSectionProps = {
  firstName: string;
  lastName: string;
  sex: string;
  age: string;
  color: string;
  isVaccinated: boolean;
};

export const PatientDetailsSection = ({
  firstName,
  lastName,
  sex,
  age,
  color,
  isVaccinated,
}: PatientDetailsSectionProps) => {
  const [startDate, setStartDate] = useState(new Date());
  const patientColor = getPatientColor(color);
  const patientName = `${firstName} ${lastName}`;
  const pathname = usePathname();
  const id = pathname.replace(/([/])/g,"");
  
  useEffect(() => {
    localStorage.setItem("bookedDate", JSON.stringify({startDate, id}));
  }, [id, startDate]);

  return (
    <section className='py-6 flex flex-col md:flex-row gap-lg'>
      <img src='../img/default-user.png' alt='default user logo' />
      <div className='p-8'>
        <p>Name: {patientName};</p>
        <p>Age: {age} years;</p>
        <p>Sex: {sex};</p>
        <div className='flex gap-sm'>
          <p>Status:</p>
          <p className={clsx('rounded-full p-3 w-1.5', patientColor)}></p>
        </div>
        {!isVaccinated ? (
          <div className='flex gap-4'>
            <p className='self-center mt-4'>Choose time for next booking:</p>
            <DatePicker selected={startDate} onChange={(date: SetStateAction<any>) => setStartDate(date)} />
          </div>
        ) : null}
      </div>
    </section>
  );
};

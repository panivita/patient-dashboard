export const getAge = (birthDate: string | number | Date) => {
	const monthDiff = Date.now() - new Date(birthDate).getTime();
	const ageDateFormat = new Date(monthDiff);
	const age = Math.abs(ageDateFormat.getUTCFullYear() - 1970);
	return age;
}

export const getVactinationAge = (birthDate: string | number | Date, vaccinationDate: string | number | Date) => {
	const monthDiff = new Date(vaccinationDate).getTime() - new Date(birthDate).getTime();
	const ageDateFormat = new Date(monthDiff);
	const age = Math.abs(ageDateFormat.getUTCFullYear() - 1970);
	return age;
}

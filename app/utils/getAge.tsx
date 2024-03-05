export const getAge = (birthDate: string | number | Date, date: any) => {
	const monthDiff = date - new Date(birthDate).getTime();
	const ageDateFormat = new Date(monthDiff);
	const age = Math.abs(ageDateFormat.getUTCFullYear() - 1970);
	return age;
}

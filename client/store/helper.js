export const newId = (obj) =>  {
	let keys = Object.keys(obj).filter( key => Number.isInteger(Number(key)));
	return (Math.max(...keys) + 1).toString();
}

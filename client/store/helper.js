export const newId = (obj) =>  {
	let keys = Object.keys(obj).filter( key => Number.isInteger(Number(key)));
	return (Math.max(...keys) + 1).toString();
}

function nameCompare(obj1, obj2) {
  if(obj1.name > obj2.name) return 1
  if(obj2.name > obj1.name) return -1
  return 0
}

export const updateListingOrder = (objs) => {
	return Object.keys(objs)
		.map(key => objs[key])
    .sort(nameCompare)
    .map((obj,ind) => {
    	obj.listId = ind+1;
    	return obj
    })
}
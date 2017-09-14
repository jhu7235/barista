export function byListId(obj1, obj2) {
  if(obj1.listId > obj2.listId) return 1;
  if(obj2.listId > obj1.listId) return -1;
  return 0;
}

export function listIdToId(listId, objs) {
	for(let key in objs) {
		if(objs[key].listId.toString() === listId.toString()) return key
	}
}
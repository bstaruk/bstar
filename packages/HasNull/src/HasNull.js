// checks if any value in an object is null
const HasNull = (obj) => {
  const objKeys = Object.keys(obj);

  let i;
  for (i = 0; i < objKeys.length; i += 1) {
    if (obj[objKeys[i]] == null) { return true; }
  }

  return false;
};

export default HasNull;

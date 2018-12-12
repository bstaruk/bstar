// checks if any value in an object is null
const HasNull = (obj) => {
  const objKeys = Object.keys(obj);
  for (let i = 0; i < objKeys.length; i++) {
    if (obj[objKeys[i]] == null) { return true; }
  }

  return false;
};

export default HasNull;

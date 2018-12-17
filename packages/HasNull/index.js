// checks if any value in an object is null
function HasNull (obj) {
  var objKeys = Object.keys(obj);
  for (var i = 0; i < objKeys.length; i++) {
    if (obj[objKeys[i]] == null) { return true; }
  }

  return false;
}

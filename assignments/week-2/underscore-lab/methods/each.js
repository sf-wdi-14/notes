var each = function(array, callback) {
  for (var i = 0, length = array.length ; i < length; i++) {
    callback(array[i], i, array);
  }

  return array;	
}

// do not modify anything below this line. 
module.exports = each;
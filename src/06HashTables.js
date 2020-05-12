/* Hash Table */

var hash = (string, max) => {
  var hash = 0;
  for (var i = 0; i < string.length; i++) {
    hash += string.charCodeAt(i); // adding  the character codes for each character int the string and putting into the hash
    //each string character has a numerical value associated with it 
  }
  return hash % max; // divide by the number of buckets
};

let HashTable = function() {

  let storage = []; /// array 
  const storageLimit = 14;   // limit in array 
  
  this.print = function() {
    console.log(storage)  // show storage 
  }

  this.add = function(key, value) {
    var index = hash(key, storageLimit);
    if (storage[index] === undefined) {// if is empty position in array
      storage[index] = [     // set storage with index data on this position in array 
        [key, value]
      ];
    } else { // if is no empty 
      var inserted = false; //set insert is false 
      for (var i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) { // if key equals  
          storage[index][i][1] = value;     // set new value
          inserted = true;
        }
      }
      if (inserted === false) {    //  false 
        storage[index].push([key, value]);  // if do not exist just simply push into array  with data key and value 
      }
    }
  };

  this.remove = function(key) {
    var index = hash(key, storageLimit);
    if (storage[index].length === 1 && storage[index][0][0] === key) {
      delete storage[index];
    } else {
      for (var i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          delete storage[index][i];
        }
      }
    }
  };

  this.lookup = function(key) {
    var index = hash(key, storageLimit);
    if (storage[index] === undefined) {
      return undefined;
    } else {
      for (var i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          return storage[index][i][1];
        }
      }
    }
  };

};


console.log(hash('quincy', 10))

let ht = new HashTable();
ht.add('beau', 'person');
ht.add('fido', 'dog');
ht.add('rex', 'dinosour');
ht.add('tux', 'penguin')
console.log(ht.lookup('tux'))
ht.print();
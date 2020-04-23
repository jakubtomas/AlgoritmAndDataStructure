/* Queues */
//  Rad (queue alebo aj fronta) funguje presne ako rad v supermarkete pri pokladni.

// tlaciaren dokaže tlacit len 1 dokument ale možeme jej pridat do radu dalšie
// a potom vie čo ma robit dalej

//pridať prvok (na koniec),
//odobrať prvok (zo začiatku),
//pozrieť sa na prvý prvok.

function Queue() {
  let collection = [];
  this.print = function() {
    console.log(collection);
  };

  // push the first item into
  this.enqueue = function(element) {
    collection.push(element);
  };

  // remove first element
  this.dequeue = function() {
    return collection.shift();
  };

  // return the first item
  this.front = function() {
    return collection[0];
  };

  //length
  this.size = function() {
    return collection.length;
  };

  // check is empty
  this.isEmpty = function() {
    return collection.length === 0;
  };
}

var q = new Queue();
q.enqueue("a");
q.enqueue("b");
q.enqueue("c");
q.print();
q.dequeue();
console.log(q.front());
q.print();

console.log("=============PriorityQueue===============================");
// value with priority save data according to priority into quer
function PriorityQueue() {
  var collection = [];
  this.printCollection = function() {
    console.log(collection); // print
  };
  this.enqueue = function(element) {
    if (this.isEmpty()) {
      collection.push(element);
    } else {
      var added = false;
      for (var i = 0; i < collection.length; i++) {
        if (element[1] < collection[i][1]) {
          //checking priorities
          collection.splice(i, 0, element);
          added = true;
          break;
        }
      }
      if (!added) {
        collection.push(element);
      }
    }
  };
  this.dequeue = function() {
    var value = collection.shift();
    return value[0];
  };
  this.front = function() {
    return collection[0];
  };
  this.size = function() {
    return collection.length;
  };
  this.isEmpty = function() {
    return collection.length === 0;
  };
}

var pq = new PriorityQueue();
pq.enqueue(["Beau Carnes", 2]);
pq.enqueue(["Quincy Larson", 3]);
pq.enqueue(["Ewa Mitulska-Wójcik", 1]);
pq.enqueue(["Briana Swift", 2]);
pq.printCollection();
pq.dequeue();
console.log(pq.front());
pq.printCollection();

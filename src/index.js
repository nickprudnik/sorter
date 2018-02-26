class Sorter {

constructor() {
this.srr = [];
this.setComparator((a, b) => a - b);
}

add(element) {
this.srr.push(element);
this.length = this.srr.length;
}

at(index) {
return this.srr[index];
}

toArray() {
var z = [];
for (var i = 0; i < this.length; i++){
z[i] = this.srr[i];
}
return z;
}

sort(indices) {
var sortirus = [];
indices.sort();

for (var i = 0; i < indices.length; i++) {
sortirus.push(this.srr[indices[i]]);
}

sortirus.sort(this.compareFunction);

for (var i = 0; i < indices.length; i++) {
this.srr[indices[i]] = sortirus[i];
}

}

setComparator(compareFunction) {
this.compareFunction = compareFunction;
}

}

module.exports = Sorter;

var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(arr, element) {
  var newArr = [element, ...arr];
  return newArr;
}

function destructivelyAddElementToBeginningOfArray(arr, element){
  return arr.unshift(element);
}

function addElementToEndOfArray(arr, element){
  var newArr = [...arr, element];
  return newArr;
}

function destructivelyAddElementToEndOfArray(arr, element){
  arr = arr.push(element);
  return arr;
}

function accessElementInArray(arr, index){
  return arr.indexOf(index);
}

function destructivelyRemoveElementFromBeginningOfArray(arr){
  return arr.shift();
}

function removeElementFromBeginningOfArray(arr){
  var newArr = arr.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(arr){
  return arr.pop();
}

function removeElementFromEndOfArray(arr){
  var newArr = arr.slice(0, arr.length-1);
}
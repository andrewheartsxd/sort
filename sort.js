startArray = [1, 5, 3, 4, 2, 6, 7, 4, 9, 1, 3];
counter = 1;

function mergeSort(arr, depth) {

  if(arr.length < 2)
    return arr;

  var middle = parseInt(arr.length / 2);
  var left = arr.slice(0, middle);
  var right = arr.slice(middle, arr.length);

  console.log("left [" + left + "]");
  console.log("right [" + right  + "]");
  console.log(depth);

  $('#tr' + depth).append('<td>' + '[' + left + ']' + '</td><td>' + '[' + right + ']' + '</td>');

  merged = merge(mergeSort(left, depth + 1 ), mergeSort(right, depth + 1 ), noOfRows - depth + 1);

  return merged;
}

function merge(left, right, rowNumber) {


  var result = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
      console.log("Right is Bigger, push Left " + result);
    }
    else {
      result.push(right.shift());
      console.log("Left is Bigger, push Right " + result);
    }
  }

  while(left.length) {
    result.push(left.shift());
  }

  while(right.length) {
    result.push(right.shift());
  }


  $('#tr' + rowNumber).append('<td>' + '[' + result + ']' + '</td>');

  return result;
}





$('#table1').append('<tr><th colspan="8">' + '[' + startArray + ']' + '</th></tr>');

noOfRows = Math.ceil(Math.log(startArray.length)/Math.log(2))*2;
midRow = noOfRows / 2;

for(i = 1; i < (noOfRows+1); i++) {
  $('#table1').append('<tr id=tr' + i + '></tr>')
}


mergeSort(startArray, 1);
// 0 or 1

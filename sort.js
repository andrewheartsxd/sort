startArray = [1, 5, 3, 4, 2, 6, 7];
counter = 1;

function mergeSort(arr, depth) {

  if(arr.length < 2)
    return arr;

  var middle = parseInt(arr.length / 2);
  var left = arr.slice(0, middle);
  var right = arr.slice(middle, arr.length);

  console.log("left [" + left + "]");
  console.log("right [" + right  + "]");

  // if(left.length > 1 && right.length > 1) {

  //   $('#tr' + counter).append('<td>' + '[' + left + ']' + '</td>');
  //   $('#tr' + counter).append('<td>' + '[' + right + ']' + '</td>');
  // }
  // else if(left.length === 1 && right.length >1) {

  //   $('#tr' + counter).append('<td>' + '[' + left + ']' + '</td>');
  //   $('#tr' + counter).append('<td>' + '[' + right + ']' + '</td>');
  // }
  // else if(left.length === 1 && right.length === 1) {
  //   $('#tr' + counter).append('<td>' + '[' + left + ']' + '</td>');
  //   $('#tr' + counter).append('<td>' + '[' + right + ']' + '</td>');
  // }


  $('#tr' + depth).append('<td>' + '[' + left + ']' + '</td><td>' + '[' + right + ']' + '</td>');

  // $('tbody:last-child').append('<td>' '[' + left + ']' + '</td>')

  // $('tbody:last-child').append('<tr><td>' + '[' + left + ']' + '</td></tr>');
  // $('tbody:last-child').append('<tr><td>' + '[' + right + ']' + '</td></tr>');

  // if(left.length === 1 && right.length ===1) {
  //   counter = counter + 1
  //   $('tbody:last-child').append('<tr><td>' + '[' + left + ']' + '</td><td>' + '[' + right + ']' + '</td></tr>');
  // }
  // else {
  //  $('tbody:last-child').append('<tr><td>' + '[' + left + ']' + '</td><td>' + '[' + right + ']' + '</td></tr>');
  // }

  merged = merge(mergeSort(left, depth + 1 ), mergeSort(right, depth + 1 ), depth - midRow);

  return merged;
}

function merge(left, right, depth) {

  var result = [];

  while (left.length && right.length) {
    console.log("left [" + left + "]");
    console.log("right [" + right + "]");
    if (left[0] < right[0]) {
      result.push(left.shift());
      console.log("Right is Bigger, push Left " + result);
      // $('#table1:last-child').append('<tr>'+ "Right is Bigger, push Left [" + result + "]" + '</tr>');
    }
    else {
      result.push(right.shift());
      console.log("Left is Bigger, push Right " + result);
      // $('#table1:last-child').append('<tr>'+ "Left is Bigger, push Right [" + result + "]" + '</tr>');
    }
  }

  while(left.length)
    result.push(left.shift());

  while(right.length)
    result.push(right.shift());

  console.log("merge " + result);
  $('#tr' + depth).append('<td>' + '[' + left + ']' + '</td><td>' + '[' + right + ']' + '</td>');

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


// var $group1 = [];
// groupNo = 1;
// nextGroup = 1

// $('.numberlist').each(function(){
//   $group1.push(parseInt($(this).text()))
// })

startArray = [1, 5, 3, 4, 2, 6, 7]

function mergeSort(arr) {


  if(arr.length < 2)
    return arr;

  var middle = parseInt(arr.length / 2);
  var left = arr.slice(0, middle);
  var right = arr.slice(middle, arr.length);

  console.log("left [" + left + "]");
  $('div').append('<p>'+ "left [" + left + "]" + '</p>');
  // document.write(left + " ")

  console.log("right [" + right + "]");
  $('div').append('<p>'+ "right [" + right + "]" + '</p>');
  // document.write(right + " ")

  merged = merge(mergeSort(left), mergeSort(right));
  // console.log("mergeSort(left) " + mergeSort(left));
  // console.log("mergeSort(right)" + mergeSort(right));
  console.log("mergeSort " + merged);
  return merged;
}

function merge(left, right) {

  var result = [];

  while (left.length && right.length) {
    console.log("left [" + left + "]");
    console.log("right [" + right + "]");
    if (left[0] < right[0]) {
      result.push(left.shift());
      console.log("Right is Bigger, push Left " + result)
    }
    else {
      result.push(right.shift());
      console.log("Left is Bigger, push Right " + result)
    }
  }

  while(left.length)
    result.push(left.shift());

  while(right.length)
    result.push(right.shift());

  console.log("merge " + result)
  return result;
}

$('div').append('<div>' + startArray + '</div>')
mergeSort(startArray)

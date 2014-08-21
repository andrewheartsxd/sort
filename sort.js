
// var $group1 = [];
// groupNo = 1;
// nextGroup = 1

// $('.numberlist').each(function(){
//   $group1.push(parseInt($(this).text()))
// })

startArray = [1, 5, 3, 4, 2, 6, 7];
counter = 0;

function mergeSort(arr) {


  if(arr.length < 2)
    return arr;

  var middle = parseInt(arr.length / 2);
  var left = arr.slice(0, middle);
  var right = arr.slice(middle, arr.length);

  console.log("left [" + left + "]");
  $('.start:last-child').append('<div class="inline' + counter + '">'+ "left [" + left + "]" + '</div>');
  // $('<div class="inline' + counter + '">'+ "left [" + left + "]" + '</div>').insertAfter('.start');

  console.log("right [" + right + "]");
  $('.start:last-child').append('<div class="inline' + counter + '">' + "right [" + right + "]" + '</div>');
  // $('<div class="inline' + counter + '">' + "right [" + right + "]" + '</div>').after(".start")

  counter = counter + 1;

  merged = merge(mergeSort(left), mergeSort(right));
  console.log("mergeSort " + merged);
  $('.start:last-child').append('<div>'+ "mergeSort " + merged + '</div>');


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
      $('.start:last-child').append('<div>'+ "Right is Bigger, push Left [" + result + "]" + '</div>');
    }
    else {
      result.push(right.shift());
      console.log("Left is Bigger, push Right " + result)
      $('.start:last-child').append('<div>'+ "Left is Bigger, push Right [" + result + "]" + '</div>');
    }
  }

  while(left.length)
    result.push(left.shift());

  while(right.length)
    result.push(right.shift());

  console.log("merge " + result)
  $('.start:last-child').append('<div>' + "merge " + result + '</div')
  return result;
}

$('div').append('<div class="start">' + startArray + '</div>')
mergeSort(startArray)

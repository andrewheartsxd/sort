startArray = [1, 5, 3, 4, 2, 6, 7];
counter = 0;

noOfRows = Math.ceil(startArray.length * Math.log(startArray.length))

for(i = 1; i < (noOfRows+1); i++) {
  $('#table1').append('<tr></tr>')
}

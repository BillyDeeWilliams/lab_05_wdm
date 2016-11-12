'use strict';
/////////////////////////////////////
/* Problem 1 (this is your demo that we'll solve in class)
Write a function called sum() that takes in two numbers as arguments and then returns an array where the first element is the sum of those numbers, and the second element is a concatenated string that EXACTLY follows this example and uses the values that were input into the function:
"The sum of 4 and 7 is 11."
Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSum() function below and check the console to see if the test passes.*/

// Write your code here
function sum(a,b){ //eslint-disable-line
  var sum = [];
  var s = a + b;
  sum[0] = s;
  sum[1] = 'The sum of ' + a + ' and ' + b + ' is ' + s + '.';
  return(sum);
}

// Here is the test for sum(); uncomment it to run it
testSum(4, 7);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 2
Write a function called multiply() that takes in two numbers as arguments and returns an array where the first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:
"The product of 5 and 9 is 45."
Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiply() function and see if the test passes.*/

// Write your code here
function multiply(a,b){ //eslint-disable-line
  var prod = [];
  var p = a * b;
  prod[0] = p;
  prod[1] = 'The product of ' + a + ' and ' + b + ' is ' + p + '.';
  return(prod);
}


// Here is the test for multiply(); uncomment it to run it
testMultiply(5,9);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 3
Write a function called sumAndMultiply() that takes in three numbers as separate arguments and returns an array where the first element is the sum of those three numbers, the second element is the product of those three numbers,  and the third and fourth elements are strings that EXACTLY follow this example and use the values that were input into the function:
Third element: "4 and 7 and 5 sum to 16."
Fourth element: "The product of 4 and 7 and 5 is 140."
IMPORTANT DETAIL: You may not use the arithmetic operators + and * in this function. To do addition, use your sum() function, and to do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this.
Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumAndMultiply() function and see if the test passes.*/

// Write your code here
function sumAndMultiply(a,b,c){ //eslint-disable-line
  var s2a = 0;
  var s2b = 0;
  var p2a = 0;
  var p2b = 0;
  s2a = sum (a,b); //returns an array whoes firs element is the sum and stores for next calc
  s2b = sum(s2a[0],c);//calc sum of c and the first element of the array resturned from summing a & b, store in var
  p2a = multiply(a,b); //returns an array whoes firs element is the prod and stores for next calc
  p2b = multiply(p2a[0],c);//calc product of c and the first element of the array resturned from calling multiply on a & b, store in var
  var sam = []; // init empty answer array
//populate array: [s, p 'sthird element sum string', 'fourth element prodct string']
  sam[0] = s2b;
  sam[1] = p2b;
  sam[2] = a + ' and ' + b + ' and ' + c + ' sum to ' + s2b[0] + '.' ;
  sam[3] = 'The product of ' + a + ' and ' + b + ' and ' + c + ' is ' + p2b[0] + '.';
  console.log(sam);
  return(sam);
}

// Here is the test for sumAndMultiply(); uncomment it to run it
testSumAndMultiply(4,7,5);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 4
Write a function called sumArray() that takes in an array of numbers as its single argument and then returns an array where the first element is the sum of the numbers in the array, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:
"2,3,4 was passed in as an array of numbers, and 9 is their sum."
IMPORTANT DETAIL: You may not use the arithmetic operator + in this function. To do addition, use your sum() function that you've already created. You're going to have to be resourceful to figure out how to do this.
Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumArray() function and see if the test passes.*/

// Write your code here
var testArray = [2,3,4]; //eslint-disable-line

function sumArray(testArray){ //eslint-disable-line
  var solution = [];
  var sumTotal = 0;
  for (var i = 0 ; i < testArray.length; i++){
    sumTotal = sum(sumTotal , testArray[i])[0]; //use sum *thanks goto meghan for seing that I was not
  }
  solution[0] = sumTotal; // pupulate first element of array to be returned with sum of input array
  console.log(sumTotal + ' is the sum ' + solution[0] + ' should contain sum'); //console check

  var whatsInIt = '';
  for(var j = 0 ; j < testArray.length; j++) {
    whatsInIt += testArray[j] + ',';// we want a comma after ever elment EXCEPT the last, I dunno how to do that so im gonna slice it off. (just in case, since we did not go over this in class, I googled it) CITE~~> John R Humphry's posts to the discussion on this page: https://css-tricks.com/snippets/javascript/trim-firstlast-characters-in-string/ <~~
  }
  console.log(whatsInIt);//console check
  whatsInIt = whatsInIt.slice(0,-1); // take off last char in string , in this casem the last comma so that it matches the test conditions
  var solutionString = whatsInIt + ' was passed in as an array of numbers, and ' + sumTotal + ' is their sum.';
  solution[1] = solutionString;

  return(solution);

}

// Here is the test for sumArray(); uncomment it to run it

testSumArray(testArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 5
Write a function called multiplyArray() that takes an array of numbers as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:
"The numbers 2,3,4 have a product of 24."
IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this.
Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyArray() function and see if the test passes.*/

// Write your code here
function multiplyArray(testArray){ //eslint-disable-line
  var multiplyArraySolution = [];
  var productTotal = 1;//initializ start to 1
  for (var i = 0 ; i < testArray.length; i++){
    productTotal = multiply(productTotal, testArray[i])[0];
  }
  multiplyArraySolution[0] = productTotal; // pupulate first element of array to be returned with sum of input array
  console.log(productTotal + ' is the product ' + multiplyArraySolution[0] + ' should contain product total'); //console check

  var whatsInIt = '';
  for(var j = 0 ; j < testArray.length; j++) {
    whatsInIt += testArray[j] + ',';// we want a comma after ever elment EXCEPT the last, I dunno how to do that so im gonna slice it off. (just in case, since we did not go over this in class, I googled it) CITE~~> John R Humphry's posts to the discussion on this page: https://css-tricks.com/snippets/javascript/trim-firstlast-characters-in-string/ <~~
  }
  console.log(whatsInIt);//console check
  whatsInIt = whatsInIt.slice(0,-1); // take off last char in string , in this casem the last comma so that it matches the test conditions :"The numbers 2,3,4 have a product of 24."
  var solutionString = 'The numbers ' + whatsInIt + ' have a product of ' + productTotal + '.';
  multiplyArraySolution[1] = solutionString;
  console.log(solutionString);
  console.log(multiplyArraySolution[1]);
  return(multiplyArraySolution);

}

// Here is the test for multiplyArray(); uncomment it to run it
testMultiplyArray(2,3,4);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. You're done! Submit the link to the repo following the instructions in Canvas.

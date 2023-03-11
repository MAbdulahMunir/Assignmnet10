// 2- What will be the result for these expressions?

5 > 4 // True
"apple" > "pineapple" // False
"2" > "12"  // True
undefined == null // True
undefined === null // False
null == "\n0\n" // False
null === +"\n0\n" // False

// 3-What are the final values of all variables a, b, c and d after the code below?
let a = 1,
  b = 1;
let c = ++a;
let d = b++;
console.log(a, b, c, d);
// a=2,b=2,c=2,d=1

// 4-What are the values of a and x after the code below?
let a1 = 2;
let x = 1 + (a1 *= 2);
console.log("x is equal = " + x);
// x is equal = 5

// 5-Here’s a code that asks the user for two numbers and shows their sum.
// It works incorrectly. The output in the example below is 12 (for default prompt values).
// Why? Fix it. The result should be 3.

// Because promt takes input from user in String

let a5 = Number.parseInt(prompt("First number?", 1));
let b5 = Number.parseInt(prompt("Second number?", 2));
/*let a5 = prompt("First number?", 1);
let b5 = prompt("Second number?", 2);*/
alert(a5 + b5); // 12

// 6- Rewrite this if using the conditional operator '?':
/*let result;

if (a5 + b5 < 4) {
  result = 'Below';
} else {
  result = 'Over';
}
console.log(result);*/

let result = a5 + b5;
result > 4 ? console.log("Over") : console.log("Below");

/*  7- Rewrite 'if..else' into '?'
Rewrite if..else using multiple ternary operators '?'.
For readability, it’s recommended to split the code into multiple lines.
let message;*/
let login = prompt("Enter your status");

/* if (login == "Employee" || login == "employee") {
  message = "Hello";
} else if (login == "Director" || login == "director") {
  message = "Greetings";
} else if (login == "") {
  message = "No login";
} else {
  message = "Please try again later.";
}
alert(message);*/

login == "Employee" || login == "employee"
  ? (message = "Hello")
  : login == "Director" || login == "director"
  ? (message = "Greetings")
  : login == ""
  ? (message = "No login")
  : (message = "Please try again later.");
alert(message);

//   8-What is the code below going to output?

alert(null || 2 || undefined); // 2

// 9-What will the code below output?

alert(alert(1) || 2 || alert(3)); //1,2

// 10-What is this code going to show?

alert(1 && null && 2); // null.

// 11-What will this code show?

alert(alert(1) && alert(2)); // 1 & undefined.

// 12-What will the result be?

alert(null || (2 && 3) || 4); // 3

/* 13-Write an if condition to check that age is NOT between 14 and 90 inclusively.
Create two variants: the first one using NOT !, the second one – without it.*/

let age = Number.parseInt(prompt(`Enter age`));
if (!(age >= 14 && age <= 90)){
  console.log(`Your age is not under 14 and 90`);
}
else{
  console.log(`Your age is under 14 and 90`);
}

/* 14-Which of these alerts are going to execute?
What will the results of the expressions be inside if(...)? */

if (-1 || 0) alert("first"); // first.
if (-1 && 0) alert("second"); // nothing.
if (null || (-1 && 1)) alert("third"); // third.

// 15-Write the code using if..else which would correspond to the following switch:

/* switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );
} */

let browser = prompt("Enter your browser");
if (browser == "Edge"|| browser == "edge") {
  alert("You've got the Edge!");
}
else if(browser == 'Chrome'|| browser == 'chrome') {
  alert( 'Okay we support these browsers too' );
} 
else if (browser == 'Firefox'|| browser == 'firefox') {
  alert( 'Okay we support these browsers too' );
}
else if (browser == 'Safari'|| browser == 'safari') {
  alert( 'Okay we support these browsers too' );
}
else if (browser == 'Opera'|| browser == 'opera') {
  alert( 'Okay we support these browsers too' );
}
else if (browser == 'Google'|| browser == 'google') {
  alert( 'Okay we support these browsers too' );
}
else{
  alert( 'We hope that this page looks ok!' );
}

// ============ chapter no 1  to 5 ==============

// ************* Question no 1*************

alert ("greet your website visitor");

// ************* Question no 2 *************

alert ("Error ! Please enter a valid password");

// ************* Question no 3 *************

 alert ("Welcome to JS  land  Happy Coding");

// ************* Question no 4 *************

alert ("Welcome to Js Land");
alert ("Happy Coding");

// ************* Question no 5 *************

console.log ("Hello... I can run JS throught my web browser's console");

// chapter no 1 Complete

// ============ chapter no 2 (varaible for string ) ==============

// ************* Question no 1 *************

var usernme;

// ************* Question no 2 *************

var myName = "Mustafa";

// ************* Question no 3 *************

var message = "Hello World";
alert(message);

// ************* Question no 4 *************

var studentName  = "Mustafa";

alert ( "student Name" + " " +  studentName);

var studentAge  = 20;

alert ( "student Age" + " " +  studentAge);

var studentCourse  = "web and app development";

alert ( "student Course" + " " +  studentCourse);

// *************** Question no 5 ***************

var string = "pizza pizza";
alert(string);

// ************* Question no 6  *************

var email = "mustafa@gmail.com";
alert ("My email address is" + " " + email);

// ************* Question no 7  *************

var book = "A Smater Way to Learn JavaScript";
alert (book);

// ************* Question no 8  *************

document.write ("Yah ! I can write HTML content trought Java script");

// ************* Question no 9  *************

var value = "Mustafa" ;
alert (value);
console.log(value);

// chapter no 2 is complete

// ==================== chapter no 3  (variable for number ) ==================

// ******************** Question no 1 ******************

var age = 15;

alert ("I am" + " " + age + " years old");

// ******************** Question no 2 ******************

var visitCounter = "14 times";
alert ("You have visited this site" + " " + visitCounter );

// ******************** Question no 3 ******************

var birthYear = 20;
console.log ("My birth years is" + " " + birthYear );
console.log (typeof birthYear );

// ******************** Question no 4 ******************

var visitorName = "Mustafa";
var productQunatity = 5;
var productTittle = "T-shirt(s)";
console.log (visitorName + " " + "ordered" + " " +productQunatity + " " + productTittle + " " + "on Daraz Shopping Mall");

//  chapter no 3 is complete

// ==================== chapter no 4  (VARIABLE NAMES: LEGAL & ILLEGAL ) ==================

// ******************** Question no 1 ******************

var statement = "Saylani , Mass , IT Traning";
console.log(statement);

// ******************** Question no 2 ******************

// legel variable name

// var $varible;
// var varible1;
// var varoi_ble;
// var _varible;
// var varibleName;

// illegel variable name

// var 5varible1;
// var var;
// var #varible;
// var var@ible;
// var <#varible;

// ******************** Question no 3  ******************

console.log ("Rules for naming JS variables");
console.log ("Variable name can conatin , Number , Dollars Sign , Letter , UnderScope");
console.log ("Variables must begin with a $name , _name , name");
console.log ("Variable names are case Sensitive");
console.log ("Variable names should not be JS keyword");

// ============================= chapter no 5 MATH EXPRESSIONS ==========================

// ****************************** Question no 1**********************

var vaule1 = 3;
var value2 = 5;
var result = vaule1 + value2;
document.write( "Sum of " + vaule1 + " and" + " " + value2 + " is" + " " +  result);

// ****************************** Question no 2 **********************

// for subtraction

var vaule1 = 50;
var value2 = 35;
var result = vaule1 - value2;
console.log ( "Subtraction of " + vaule1 + " and" + " " + value2 + " is" + " " +  result);

//  for mutliple

var vaule1 = 50;
var value2 = 5;
var result = vaule1 * value2;
console.log ( "Multiple of " + vaule1 + " and" + " " + value2 + " is" + " " +  result);

//  for division

var vaule1 = 3;
var value2 = 5;
var result = vaule1 / value2;
console.log ( "Division of " + vaule1 + " and" + " " + value2 + " is" + " " +  result);

//  for modulus

var vaule1 = 18;
var value2 = 5;
var result = vaule1 % value2;
console.log ( "Sum of " + vaule1 + " and" + " " + value2 + " is" + " " +  result);

// ****************************** Question no 3 **********************

var value;
console.log (value);

var number = 20;
console.log (number);

var number1 = 5;
number1++
console.log (number1);

var number2 = 7;
var newNumber = number2 + 6;
console.log (newNumber);

var number3 = 13;
number3--
console.log (number3);

var number4 = 9;
var newnumber4 = number4 % 3;
console.log (newnumber4);

// ****************************** Question no 4 **********************

var ticketPrice = 300;
var ticketBuy = 5;
var totalCost = ticketPrice * ticketBuy ;
console.log ("Total cost to buy 5 Ticket to a movie is" + " " + totalCost );

// ****************************** Question no 5 **********************

for(var i = 1; i <= 10; i++){
    console.log("4 x" + " " + i + " " + "=" + " " + 4 * i);
}

// ****************************** Question no 6 **********************

 CelsiusTemperature

var CelsiusTemperature = 30;
 var result =  (CelsiusTemperature - 32) * 5 / 9;
 console.log (result);

//   Fahrenheit temperature

var FahrenheiTemperature = 70;
var result = (FahrenheiTemperature * 9 / 5 ) + 32;
console.log (result);

// ****************************** Question no 7 **********************

var priceItem1 = 650;
var QunatityItem1 = 3;
var result1 = priceItem1 * QunatityItem1 ;  // 1950
var  priceItem2 = 100;
var QunatityItem2 = 7;
var result2 = priceItem2 * QunatityItem2 ;
var ShippingCharges = 100;
var res3 = (result1 + result2) + ShippingCharges; // 2.7857
console.log (res3);

// ****************************** Question no 8 **********************

var totalMarks = 980;
var marksObtained = 804;
var percentage = (marksObtained / totalMarks) * 100;
console.log (percentage);

// ****************************** Question no 9 **********************

var usDollars = 104.80;
usDollars = usDollars * 10; // 1048
var suadiRiyals = 28;
suadiRiyals = 28 * 25; // 700
var totalCurrency = (usDollars + suadiRiyals);
console.log ("Total Currency in pkr" + " " +totalCurrency);

// ****************************** Question no 10 **********************

var number = 5;
var res =  number + 5 + (number * 10 + number / 2);
console.log (res);

// ****************************** Question no 11 **********************

var currentYear = 2016;
var birthYear = 1992;
var res = currentYear - birthYear;
console.log (res);




// ****************************** Question no 12 **********************

var radius = 20;
console.log("Radius of circle is" + " " + radius);
var circumferense = 2 * 3.142 * radius;
console.log("The circumferense is" + " " + circumferense);
var radiusArea = 3.142 * radius * radius;
console.log("The area is" + " " + radiusArea);

// ****************************** Question no 13  **********************

var favaoriteSnake = "chocolate ship";
var currentAge = 15;
var maxAge = 65;
var AmountSnackePerDay = 3;
var res = (maxAge - currentAge) * AmountSnackePerDay;
console.log ("You will need" + " "+ res + " chocolate ship to last you until the ripe old age of" + " " + maxAge);


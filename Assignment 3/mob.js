// ********************  chapter no 12 13 ********************
// ====================  question no 1 ========================

 var value = prompt ("Enter your number");
  if (value % 3 == 0) {
     console.log ("Number is divible by 3")
  } else {
     console.log ("Number is not divisible by 3");
  }

// ====================  question no 2 ========================

 var num = prompt ("Enter your number");
 if (num % 2 == 0 ) {
     console.log ("Even number")
 } else {
     console.log ("Old number");
 }

// ====================  question no 3 ========================

 var age = prompt ("Enter Your age");

 if (age >= "18") {
     console.log ("Old Enough");
 } else {
     console.log ("Too Young");
 }

// ====================  question no 4 ========================

 var name = "hammas";
 var originalName = prompt("Enter your name");
 if (name ===  originalName) {
     console.log ("salam" + " " + name);
 }


// ====================  question no 8 ========================

 var time = prompt ("Enter your time");

 if (time == "1900") {
     console.log ("early good morning")

 } else if (time >= 0 && time < 1200) {
     console.log ("Good morning");
 } else if (time >= 1200 && time <= 1700) {
     console.log ("Good afternooon");
 } else if (time >= 1700 && time <= 2100) {
     console.log ("Good evening");
 } else if (time >= 2100 && time <= 2359) {
     console.log ("Good night");
 } else {
     console.log ("invalid time");
 }

// ====================  question no 9 ========================


 var year = 2024;
 if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
     console.log("Leap year");
 } else {
     console.log("Not a leap year");
 }

// ====================  question no 12 ========================
 var greeting ;
 var hour = 13;
 if (hour < 18) {
   greeting = "Good day";
   console.log (greeting);
 } else {
   greeting = "Good evening";
   console.log (greeting);
 }

// ====================  question no 13 ========================


 var num1 = prompt("Enter your first number");
 var num2 = prompt("Enter your second number");
 if (num1 > num2) { // 10 50
     console.log (num1 + " " + "is greater than" + " " + num2);
 } else if (num1 < num2) {
     console.log (num2 + " " + "is less than" + " " + num1);
 } else {
     console.log (num1 + " " + num2 + " " + "is same");
 }

// ====================  question no 11 ========================

 var firstName = "Ali";
 if (firstName === "Fahad") {
  document.write("Hello Fahad!");
 } else {
     console.log ("You are not fahad");
 }

// ====================  question no 10 ========================

 var passWord = prompt ("Enter Your Password");
 if (passWord === "" || passWord == null){
     alert("please enter your password");
 }
  else if (passWord == "hammas") {
     console.log ("Correct password");
 } else {
     console.log ("Incorrect password");
 }

// ====================  question no 15 ========================

 var currentHour = prompt("Enter your hours");

 if (currentHour >= 6 && currentHour <= 9) {
     console.log ("Breakfast is served");
 } else if (currentHour >= 11 && currentHour <= 13) {
     console.log ("Time for lunch");
 } else if (currentHour >= 18 && currentHour <= 21) {
     console.log ("It's dinner time");
 }else {
     console.log ("you'll have to wait, or go get a snack");
 }

// ====================  question no 16 ========================

 var num1 = 20;
 console.log (num1 + " " + "type " + "" +typeof(num1));
 var str = "10";
 console.log (str + " " + "type " + " "+ typeof(str));
 var bool = true;
 console.log (bool + " " + "type " + " " + typeof(bool));
 var und ;
 console.log (und + " " + "type " + " "+ typeof(und));

// ====================  question no 17 ========================


  var chr = prompt("Enter your character");

  if (chr == "a" || chr == "e" || chr == "i" || chr == "o" || chr == "u"){
     console.log("yes its vowels");
  } else{
     console.log ("its not vowels");
  }

// ====================  question no 18 ========================

 var var1 = "10";
 var var2 = "8";
 if (var1 !== var2) {
     console.log ("true");
 }


// ====================  question no 19 ========================

 var month = prompt("Enter your month");

 if (month == 1) {
     console.log ("january");
 } else if (month == 2){
     console.log ("febuary");
 } else if (month == 3){
     console.log ("March");
 } else if (month == 4){
     console.log ("April");
 } else if (month == 5){
     console.log ("May");
 } else if (month == 6){
     console.log ("jun");
 } else if (month == 7){








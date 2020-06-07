// CHAPTER 01 (ALERTS)

// Task no 01

alert("Hello and Warmly Welcome to my website!")

// Task no 02

alert("Error! Please enter a valid password.")

// Task no 03

alert("Welcome to JS Land..." + "\r\n" + "Happy Coding!")

// Task no 04

alert("Welcome to JS Land...");
alert("Happy Coding!")

// Task no 05

alert("Hello... I can run JS through my web browser's console")

// Task no 06

// See HTML File

// Task no 07

// See HTML File

// CHAPTER 02 (VARIABLES FOR STRINGS)

// Task no 08

var username;

// Task no 09

var myname = "Muhammad Manzar Alam Ansari";

// Task no 10

var message;
message = "Hello World";
alert(message);

// Task no 11

alert("Jhone Doe")
alert("15 years old")
alert("Certified Mobile Application Development")

// Task no 12

var pizza= 'pizza';
alert(`${pizza} /n${pizza.slice(0,pizza.length-1)} /n${pizza.slice(0,pizza.length-2)} /n${pizza.slice(0,pizza.length-3)} /n${pizza.slice(0,pizza.length-4)} `)

// Task no 13

var email = "example@gmail.com";
alert("My email address is" + " " + email);

// Task no 14

var book = "A smarter way to learn JavaScript";
alert("I am trying to learn from the Book" + " " + book );

// Task 15

document.write("Yah! I can write HTML content through JavaScript");

// Task no 16

var a= "“▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬”"
alert(a);

// CHAPTER 03 (VARIABLES FOR NUMBERS)

// Task no 17

var age = 20
alert(age);

// Task no 18

var visit = 14;
alert(`You have Visited ${visit} times`);

// Task no 19

var birthYear = 1999
document.write("My birth Year is " + birthYear);
break;
document.write("Data type of my declared variable is number");

// Task no 20

var visitor_name = "John Doe";
var product_title = "T shirts";
var quantiy = 5;
var clothing_store= "International Shoppng Mall";
document.write(visitor_name + " " + "orders" + " " + quantiy + " " +product_title + " " + " " + "on" + " " + clothing_store);

// CHAPTER 04 (VARIABLE NAMES: LEGAL & ILLEGAL)

// Task no 21

var value,total,cost;

// Task no 22 (Legal and Illegal Variables)

var $_; 
var karachi_pakistan;
var _city;
var carName;
var x;

// var _ $;
// var app le;
// var "ali";
// var 1;
// var break;

// Task no 23

document.write("(1)A variable name can't contain any spaces.(2) A variable name can contain only letters, numbers, dollar signs, and underscores.(3) It can contains keywords.It can contain keywords. (4) WE can use capital letters but variables are case sensitive. (5) Varibles can also use camelCase naming conventions.");
document.write("Variables names can only conatins letters, numbers dollar_sign($) and underscore(_)");
document.write(" Variables must begin with a dollar_sign($), underscore(_) or letters.");
document.write("Variables names are case sensitive");
document.write("Variable names should not be JS Keywords");

// CHAPTER 05 (MATH EXPRESSIONS)

// Task no 24

var a= 3;
var b = 5;
var c = a + b;
alert("Sum of" + " " + a + " " + "and" + " " + b + " " + "is" + " " + c);

// Task no 25

var a= 3;
var b = 5;
var c = a - b;
alert("subtraction of " + a + " and " + b + " is " + c);

var a= 3;
var b = 5;
var c = a * b;
alert("Multiplication of " + a + " and " + b + " is " + c);

var a= 3;
var b = 5;
var c = a / b;
alert("Division of " + a + " and " + b + " is " + c);

var a= 3;
var b = 5;
var c = a % b;
alert("Modulus of " + a + " and " + b + " is " + c);

// Task no 26

//(a)
var val;
//(b)
val = 10;
document.write("Value is " + val);
//(c)
val = 5;
//(d)
document.write("Initial value is "+ val);
//(e)
val++;
//(f)
document.write("Value after Increment is " + val);
//(g)
val = val + 7;
//(h)
document.write("Value after addition is " + val);
//(i)
val--;
//(j)
document.write("Value after deccrement is " + val);
//(k)
alert( "The remainder is " + val % 3);

// Task no 27

var ticket_price = 600;
var price_of_5_tickts = ticket_price * 5;
div.innerHTML += `<p>Total cost of buy 5 tickets to a movie is ${price_of_5_tickts} </p>`;

// Task no 28

for(var i = 1; i <= 10; i++){
    div.innerHTML += `<p>4 * ${i} = ${i * 4} </br> </p>`

// Task no 29

var fahr = 70,celc= 25;
var fah_formula= (celc* 9/5)+32;
var celcius_formula = (fahr - 32) * 5/9;


div.innerHTML += `<p>${celc}C is ${fah_formula} </p>`;
div.innerHTML += `<p>${fahr}F is ${celcius_formula} </p>`;

// Task no 30

var first_item_price = 650;
var ordered_Of_First_Item = 3;
var Scnd_item_price = 100 ;
var ordered_Of_Scnd_Item = 7;
var Shipping_Charges = 100;
var total_cahrge= 2750;
div.innerHTML += `<h1> SHOPPING CART </h1>`;
div.innerHTML += `<p> Price of item 1 is  ${first_item_price}</p>`;
div.innerHTML += `<p> Quantity of item 1 is ${ordered_Of_First_Item} </p>`;
div.innerHTML += `<p> Price of item 2 is ${Scnd_item_price} </p>`;
div.innerHTML += `<p> Quantity of item 2 is ${ordered_Of_Scnd_Item} </p>`;
div.innerHTML += `<p> Shipping Charges is  ${Shipping_Charges} </p>`;
div.innerHTML += `<p> Total cost of your order is  ${total_cahrge} </p>`;

// Task no 31

var total_marks = 980;
var marks_obtained = 804;
var percentage = (marks_obtained/total_marks) * 100;
div.innerHTML += `<h1> SHOPPING CART </h1>`;
div.innerHTML += `<p>Total Marks  ${total_marks}</p> `;
div.innerHTML += `<p>Obtained marks ${marks_obtained}</p>`;
div.innerHTML += `<p> Percenyage is ${percentage}</p>`;

// Task no 32

var total_PK_Ruppee = ( (10*104.80) + (25 * 28) );
document.write("Total Currency is "+ total_PK_Ruppee);

// Task no 33

var num = 10;
num = ((num + 5) * 10) / 2;

// Task no 34

var current_year= 2020;
var birth_year = 1998;
document.write("Age calculator");
document.write("Your Age is " + current_year - birth_year);

// Task no 35

//(a)
var radius = 4;
//(b)
var circumference = 2 * radius * 3.142;
//(c)
var Area = 3.142 * radius * radius;
div.innerHTML += `<h1>The Geometrizer</h1>`;
div.innerHTML += `<p>Radius Of a Circle ${radius}</p>`;
div.innerHTML += `<p>The circumference is  ${circumference}</p>`;
div.innerHTML += `<p>The Area is ${Area}</p>`;

// Task no 36

var fav_snack= "CANDY";
var cur_age= 21;
var max_age= 65;
var per_day = 3;
var total_req= (max_age-cur_age)*per_day;
div.innerHTML += `<p> You will need ${total_req} to last you until the ripe old age of ${max_age} </p> `

// CHAPTER 06-9 (MATH EXPRESSIONS)

// Task no 37

var fir= 10;
div.innerHTML += `<p> the Value of a is: ${fir} </p> `
fir = ++fir;
div.innerHTML += `<p> the Value of ++a is: ${fir} </p> `
div.innerHTML += `<p> Now the Value of a is: ${fir} </p> `

div.innerHTML += `<p> Now the Value of a++ is: ${fir++} </p> `
fir = fir++;
div.innerHTML += `<p> Now the Value of a is: ${fir} </p> `

div.innerHTML += `<p> Now the Value of a++ is: ${--fir} </p> `
fir = --fir;
div.innerHTML += `<p> Now the Value of a is: ${fir} </p> `

div.innerHTML += `<p> Now the Value of a++ is: ${fir--} </p> `
fir = fir--;
div.innerHTML += `<p> Now the Value of a is: ${fir} </p> `

// Task no 38

var one=2,two= 1,result;
result = --a - --b + ++b + b--;
div.innerHTML += `<p>a is ${one}</p> `
div.innerHTML += `<p>b is ${two}</p> `
div.innerHTML += `<p>result is ${result}</p> `

// Task no 39

var greet= prompt("Enter your name? " , "Welcome");

// Task no 40 , 41

var numb = prompt("Enter a num", 5);
for(var i = 1; i <= 10; i++){
    document.write(numb + "x" + i + "=" + i * numb + "<br>");
}

// Task no 42

//(a)
var sub1 = prompt("Enter 1st_Subject name");
var sub2 = prompt("Enter 2nd_Subject name");
var sub3 = prompt("Enter 3rd_Subject name");
//(b)
var total_marks_sub1 = 100; 
var total_marks_sub2 = 100;
var total_marks_sub3 = 100;
//(c)
var sub1_obt_marks = prompt("Enter marks Obtain");
//(d)
var sub2_obt_marks = prompt("Enter marks Obtain");
var sub3_obt_marks = prompt("Enter marks Obtain");
//(e)
var sub1_obt_marks = prompt("Enter marks Obtain");
var tot = sub1_obt_marks +sub2_obt_marks+sub3_obt_marks;
var pert= tot/300*100;
div.innerHTML += `<table style="width:100%">
<tr>
  <th>Subject</th>
  <th>Total Marks</th>
  <th>Obtain Marks</th>
  <th>percentage </th>
</tr>
<tr>
  <td>English</td>
  <td>${total_marks_sub1}</td>
  <td>${sub1_obt_marks}</td>
  <td>${sub1_obt_marks/total_marks_sub1*100}</td>
</tr>
<tr>
  <td>Math</td>
  <td>${total_marks_sub2}</td>
  <td>${sub2_obt_marks}</td>
  <td>${sub2_obt_marks/total_marks_sub2*100}</td>
</tr>
<tr>
  <td>Math</td>
  <td>${total_marks_sub3}</td>
  <td>${sub3_obt_marks}</td>
  <td>${sub3_obt_marks/total_marks_sub3*100}</td>
</tr>
<tr>
  <td>Total</td>
  <td>${total_marks_sub1+total_marks_sub2+total_marks_sub3}</td>
  <td>${sub2_obt_marks+sub1_obt_marks+sub3_obt_marks}</td>
  <td>${pert}</td>
</tr>
</table>`

// CHAPTER 06-9 (USER INPUT & CONDITIONAL STATEMENT)

// Task no 43

var city = prompt("Enter your city name?");
 if (city === "Karachi") {
    alert("Welcome to the city of Light! ");
 }

 // Task no 44

 var gender = prompt("ENter Your gender");
 if (gender == "male")
    {
        alert("Goodmorning Sir!")
    }
else if (gender == "female") {
    alert("Goodmorning Ma'am");
}
else{
    alert("Incorrect Gender");
}

// Task no 45

var col = prompt("ENter color");
if (col == "Red")
   {
       alert("Must Stop!")
   }
else if (col == "Yellow") {
   alert("Ready To Move");
}
else{
   alert("Move Now");
}

// Task no 46

var user_input = prompt("Enter remaining fuel in car");
if(user_input <= 2.25){
    alert("Please refill the fuel in your car");
}

// Task no 47

//(a)
alert("Displayed")
//(b)
alert("Not Displayed ")
//(c)
alert("Condition 4 is true display");
//(d)
alert("Displayed");
//(e)
alert("True Displayed");
//(f)
alert("Displayed");

// Task no 48

var sub1 = prompt("Enter 1st_Subject marks");
var sub2 = prompt("Enter 2nd_Subject marks");
var sub3 = prompt("Enter 3rd_Subject marks");
var total_marks = 300;
document.write("Total Marks"+total_marks);
var obtain_total = sub1 +sub2 +sub3;
document.write("Marks Obtained" + obtain_total);
var Percentage = (obtain_total/total_marks) * 100;
document.write("Percentage" + Percentage);
if (Percentage >= 80){
   
    alert("A-one", "Excellent");  
}
else if(Percentage >= 70){
   
    alert("A", "Good");  
}
else if(Percentage >= 60){
   
    alert("B", "You need to improve");  
}
else if(Percentage < 60){
   
    alert("Fail" , "Sorry");  
}
else{
    alert("Invalid key");
}

// Task no 49

var sec_num = 6;
var input = prompt("Enter any num");
if(input == sec_num){
    alert("Bingo! Correct answer")
}
else if(input == sec_num+1){
    alert("Close enough to the correct answer")
}
else{
    alert("Incorrect number")
}

// Task no 50

var divisible_num = prompt("Enter a num");
if(divisible_num / 3){
    alert("It is divisible by 3");

// Task no 51

var any_num = prompt("Enter any number");
if(any_num % 2 == 0){
    alert("Even Number")
}
else{
    alert("Odd Number")
}

// Task no 52

var temp = prompt("Enter tempearature");
if (temp > 40){
    alert("It's too hot");
}
else if (temp > 30){
    alert("The Weather today is Normal");
}
else if (temp > 20){
    alert("Today's weather is cool");
}
else if (temp > 10){
    alert(" OMG! Today's weather is soo cool");
}
else{
    alert("Incorrect temperature")
}

// Task no 53

var val1 = prompt("Enter your First value")
var sign = prompt("Enter your Operator")
var val2 = prompt("Enter your Second value")

console.log(val1 + sign + val2)
if(sign === "+"){
    alert((+val1) + (+val2))
}else if(sign === "-"){
    alert(val1 - val2)
}else if(sign === "*"){
    alert(val1 * val2)
}else if(sign === "/"){
    alert(val1 / val2)
}else if(sign === "%"){
    alert(val1 / val2 * 100 + "%")
}

// CHAPTER 12-13 (IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS)

// Task no 54

var m = prompt("Enter any Character")

if(m >= "A" && m <= "Z"){
    alert(m + " " + "is an Uppercase Character")
}

else if(m >= "a" && m<= "z"){
    alert(m + " " + "is a Lower Character")
}

else{
    alert(m + " " + "is a number")
}

// Task no 55

var num_1 = +prompt("Enter your First number")
var num_2 = +prompt("Enter your Second number")

if(num_1 > num_2){
    alert(num_1 + " " + "is greater than" + " " + num_2)
}

else if(num_2 > num_1){
    alert(num_2 + " " + "is greater than" + " " + num_1)
}

else if(num_1 = num_2){
    alert("Both numbers are equal")
}

else{
    alert("You put inappropriate datatype")
}

// Task no 56

var num = +prompt("Enter your number")

if(num > 0){
    alert("The number is positive")
}

else if(num < 0){
    alert("The number is negative")
}

else if(num === 0){
    alert("The number is 0")
}

else{
    alert("You put inappropriate datatype")
}

// Task no 57

var vowel_string = "aeiouAEIOU"

input = prompt("Enter a Single Character: ")
    if(input.vowel_string == 1){
        if(vowel_string.contains(input)){
            alert(input + " " + "is a vowel")
    }
}

else{
    alert("Please, Enter only a Single Character")
}

// Task no 58

var password = 12346578;
var user_paswrd = prompt("Enter your password");
if (user_paswrd == password){
    alert("Correct! The password you entered matches the original password");
}
else {
   alert("Incorrect Password");
}

// Task no 59

var greeting;

var hour = 13;

if (hour < 18){
    alert(greeting = "Good Day!")
}

else
    alert(greeting = "Good Evening!")

// Task no 60

var tim = prompt("Enter time in 24 Hour Format");
if(tim >= 0 && tim < 12 ){
    alert("Good Morning")
}
else if(tim >= 12 && tim < 17){
    alert("Good Afternoon")
}
else if(tim >= 17 && tim < 21){
    alert("Good Evening")
}
else if(tim >= 21 && tim <= 24){
    alert("Good Night")
}

// CHAPTER 14-16 (ARRAYS)

// Task no 61

var students_names = [" " , " " , " "];

// Task no 62

var std_name = {
    " " : "" ,
    " " : " " ,
    " " : " " ,
}

// Task no 63

var arr_str = ["apple" , "mango", "fruits"];

// Task no 64

var num_arr = [3,5,56,7,4];

// Task no 65

var bool_arr = ["True" , "False"];

// Task no 66

var mixed_arr = ["name", 3,"True",123];

// Task no 67

var qualification = [ "SSC" , "HSC" , "BCS", "BS" , "BCOM" , "MS" , "M. Phil", "PhD"];
document.write("Qualification");
document.write("1)" + qualification[0]);
document.write("2)" + qualification[1]);
document.write("3)" + qualification[2]);
document.write("4)" + qualification[3]);
document.write("5)" + qualification[4]);
document.write("6)" + qualification[5]);
document.write("7)" + qualification[6]);
document.write("8)" + qualification[7]);

// Task no 68

var students_names = ["Sami" , "Hashim" , "manzar"];
var score_arr = [320,230,480];
var total = 500;
var Percentage = (score_arr/total) * 100;
document.write("Score of " + students_names[0] + "is " + score_arr[0] + "." + "Percentage is " + Percentage + "%");
document.write("Score of " + students_names[1] + "is " + score_arr[1] + "." + "Percentage is " + Percentage + "%");
document.write("Score of " + students_names[2] + "is " + score_arr[2] + "." + "Percentage is " + Percentage + "%");

// Task no 69

var color_arr = ["Red", "Green", "Yellow", "Blue", "Orange", "Purple"];
document.write(color_arr);
//(a)
var colr_inp = prompt("What color u want?");
var arr = [];
if (colr_inp == color_arr){
    alert(arr[0][color_arr[0]])


// Task no 70

var scores = [40, 100, 48, 50, 36, 88];
var assc = scores.sort(function(a, b){return a-b});
document.write("Score of Students" + scores);
document.write("Ordered Scores Of Students" + ass);

// Task no 71

cities = ["karachi","Lahore", "Islamabad", "Quetta","Peshawar"];
copy_cities = [cities[2] , cities[3]];
document.write("CIties List " + cities);
document.write("Selected citites list:" + copy_cities);

// Task no 72

var array = ["This", "is" , "my", "cat"];
var join_arr = join_arr.join(array);
document.write("Array " + array);
document.write("String "+ join_arr);

// Task no 73

var array1 = ["This", "is" , "my", "cat"];
document.write("String: "+ array1.join(' '));

// Task no 74

arr1 = ["Keyboard","Mouse","Printer","Monitor"]

// Task no 75

arr2 = ["Keyboard","Mouse","Printer","Monitor"];
rev_arr = rev_arr.reverse(arr2);
document.write("Devices" + arr2);
document.write("Reverse Array " + rev_arr);

// Task no 76

let  arr3 = ["0333333333","0333333","033333333","03333333"];
document.write(arr3.join('</br>'));

// CHAPTER 17-20 (ARRAYS AND LOOP)

// Task no 77

var arr = [[1,2],[3,4],[5,6]]
document.write(arr)

// Task no 78

let  arr5 =[[1,2,3],[4,5,6],[7,8,9]]

// Task no 79

for (var i = 1; i <= 10; i++) {
    document.write(i + "<br>");
}

// Task no 80

var num = +prompt("Enter Number for multiplication: " );
var j = +prompt("Enter table lenght: ");
var ans;
for(i=1 ; i<=j ; i++){
    ans = num*i;
    document.write(+num + " " + "x" + i + "=" + ans + "<br>")
}

// Task no 81

var fruits = ["apple", "banana", "mango", "orange","strawberry"]
for(i = 0; i < 5; i++){
    document.write(fruits[i] + "<br>")
}

document.write("<br>")

for(i = 0; i < 5; i++){
    document.write("Element At index" + " " + i + " " +"is" + " " + fruits[i] + "<br>")
}

// Task no 82

document.write("Counting:" + "<br>" + "<br>")

for (var i = 1; i <= 15; i++){
    document.write(i + ",");
}

document.write("<br>" + "<br>" + "Reverse:" + "<br>"  + "<br>")

for(i=10;i>=1;i--)
{
    document.write(i + ",");
}

document.write("<br>" + "<br>" + "Even:" + "<br>"  + "<br>")

for (var i = 1; i <= 20; i++) {
    if(i%2 == 0)
    document.write(i , ",");
}

document.write("<br>" + "<br>" + "Odd:" + "<br>"  + "<br>")

for (var i = 1; i <= 20; i++) {
    if(i%2 ==1)
    document.write(i , ",");
}

// Task no 83

A = ["cake", "apple pie", "cookie", "chips", "patties"]
var inp = prompt("What do you want to order? ");
if(inp == A){
    alert(inp + "is available at" + inp[A])
}

// Task no 84

var arr = [24, 53, 78, 91, 12];

document.write("Array item:" + " " + arr + "<br>")

var largest = arr[0];

for (var i = 0; i < arr.length; i++) {
    if (largest < arr[i] ) {
        largest = arr[i];
    }
}
document.write("The Largest Number is" + " " + largest);

// Task no 85

var arr = [24, 53, 78, 91, 12];

document.write("Array item:" + " " + arr + "<br>")

var smallest = arr[0];

for (var i = 0; i < arr.length; i++) {
    if (smallest > arr[i] ) {
        smallest = arr[i];
    }
}
document.write("The Smallest Number is" + " " + smallest);

// Task no 86

for (var i = 1; i <= 20; i++) {
    document.write(i*5 + ",")
}
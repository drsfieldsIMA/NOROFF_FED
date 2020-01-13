// question 1- Declare a variable called firstVar but don't initialise it with a value.
var myvar;
console.log(myvar);

var firstVar;
console.log("firstVar=", firstVar)
// 1st answer
// firstVar= undefined                            {fields-shaun}-pf-MA1.js:3
// *************************************************************************************
//question 2- Declare a variable called name and assign it your first name.
var name="shaun";
console.log("name=", name)
// 2nd answer
// name= shaun                                    {fields-shaun}-pf-MA1.js:9
//**************************************************************************************
// question 3-Declare and initialise a variable with a number value.
var int=7;
console.log("int=", int)
// 3rd answer
// int= 7                                       {fields-shaun}-pf-MA1.js:15
//**************************************************************************************
// question 4- Create a variable called division and initialise it with a value of 20 divided by 5.
var division=20/5;
console.log("division=", division)
// 4th answer
// division = 4                                  {fields-shaun}-pf-MA1.js:21
//**************************************************************************************
// question 5- Write code that checks the type of the value "frog".
var  animal = "frog";
console.log("'frog'=", typeof(animal))
// 5th answer
// 'frog'=string                                 {fields-shaun}-pf-MA1.js:26  
//**************************************************************************************
// question 6-Declare and initialise a variable called orderHasShipped with a boolean value.
var orderHasShipped
orderHasShipped=false;
console.log("orderHasShipped=",orderHasShipped)
// 6th answer
// orderHasShipped=false                                 {fields-shaun}-pf-MA1.js:34  
//**************************************************************************************
// question 7-Create an if statement that checks if orderHasShipped is true. If it is true, 
// console log the string value "true". If not, console log the string value "false".
var orderHasShipped = true;

if(orderHasShipped === true) {
    console.log("orderHasShipped === true");
}
else {
    console.log("orderHasShipped === false");
}
// 7th answer
// orderHasShipped === true                                {fields-shaun}-pf-MA1.js:43  
//**************************************************************************************
// question 8 - Create a for loop that counts from 0 to 9. 
// Console log the value of the counter variable inside the loop.
var i;
for(i = 0; i < 10; i=i+1) {
    console.log("i=",i);
}
// 8th answer
// i=0                                               {fields-shaun}-pf-MA1.js:55
// i=1                                               {fields-shaun}-pf-MA1.js:55
// i=2                                               {fields-shaun}-pf-MA1.js:55
// i=3                                               {fields-shaun}-pf-MA1.js:55
// i=4                                               {fields-shaun}-pf-MA1.js:55
// i=5                                               {fields-shaun}-pf-MA1.js:55
// i=6                                               {fields-shaun}-pf-MA1.js:55
// i=7                                               {fields-shaun}-pf-MA1.js:55
// i=8                                               {fields-shaun}-pf-MA1.js:55
// i=9                                               {fields-shaun}-pf-MA1.js:55

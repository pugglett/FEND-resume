/*
This is empty on purpose! Your code to build the resume will go here.
 */

 // $("#main").append("Lee");

// TODO: delete/transfer over to another file
// after finished with this stage
// JAVASCRIPT PRACTICE

// var awesomeThoughts = 
// 	"I am Lee and I am AWESOME!";
// console.log(awesomeThoughts);

// var funThoughts = 
// 	awesomeThoughts.replace("AWESOME", "FUN");
// console.log(funThoughts);

// $("#main").append(funThoughts);

var name = 
	"Lee Roberts";
var role = 
	"Teaching Assistant";

var formattedName = 
	HTMLheaderName.replace("%data%", name);

var formattedRole =
	HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

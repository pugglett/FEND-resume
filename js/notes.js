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

// var skills =
// 	["stuntin' on hoes", "teaching", "being gay"];

// $("#main").append(skills[0]);

var bio = {
	"name" : "Lee Roberts",
	"role" : "Teaching Assistant",
	"contacts" : {
		"mobile" : "773.386.1191",
		"email" : "leer5501@gmail.com",
		"github" : "pugglett",
		"instagram" : "_pugg",
		"location" : "Chicago"
	},
	"welcomeMsg" : "thanks for checking me out!",
	"skills" : [
		"stuntin' on hoes", "teaching", "being gay"
	],
	"bioPic" : "images/avatar.png"
}

var formattedWelcomeMsg =
	HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);

var formattedBioPic =
	HTMLbioPic.replace("%data%", bio.bioPic);


$("#header").append(formattedWelcomeMsg);
$("#header").append(formattedBioPic);

var work = {};

work.position = "Academic Team Teaching Assistant";
work.employer = "Year Up";
work.years = "2014 - Present";
work.city = "Chicago";

var formattedWorkEmployer =
	HTMLworkEmployer.replace("%data%", work.employer);

var formattedWorkTitle =
	HTMLworkTitle.replace("%data%", work.position);

var formattedWorkDates =
	HTMLworkDates.replace("%data%", work.years);

$("#workExperience").append(HTMLworkStart);
$("#workExperience").append(formattedWorkEmployer);
$("#workExperience").append(formattedWorkTitle);
$("#workExperience").append(formattedWorkDates);

// var education = {};
// education["name"] = "Robert Morris University";
// education["years"] = "2010 - 2012";
// education["city"] = "Chicago";

// var formattedSchoolName =
// 	HTMLschoolName.replace("%data%", education["name"]);

// var formattedSchoolDates =
// 	HTMLschoolDates.replace("%data%", education["years"]);

// var formattedSchoolCity =
// 	HTMLschoolLocation.replace("%data%", education["city"]);

// $("#education").append(HTMLschoolStart);
// $("#education").append(formattedSchoolName);
// $("#education").append(formattedSchoolCity);
// $("#education").append(formattedSchoolDates);

// CREATING A JSON FOR EDUCATION INFO
var education = {
	"schools" : [
		{
			"name" : "Robert Morris University",
			"city" : "Chicago",
			"degree" : "AA",
			"major" : "Graphic Design"
		}
	],
	"onlineClasses" : [
		{
			"title" : "Front End Web Development Nanodegree",
			"school" : "Udacity",
			"dates" : "2015 - 2016",
			"url" : "www.udacity.com"
		},
		{
			"title" : "Intro to Programming Nanodegree",
			"school" : "Udacity",
			"dates" : "2016",
			"url" : "www.udacity.com"
		}
	]
}

// IF statements QUIZ
var formattedName =
	HTMLheaderName.replace("%data%", bio.name);

$("#header").append(formattedName);

if (bio.skills.length > 0) {

	$("#header").append(HTMLskillsStart);

	var formattedSkill =
		HTMLskills.replace("%data%", bio.skills[0]);
	$("#header").append(formattedSkill);
	var formattedSkill =
		HTMLskills.replace("%data%", bio.skills[1]);
	$("#header").append(formattedSkill);
	var formattedSkill =
		HTMLskills.replace("%data%", bio.skills[2]);
	$("#header").append(formattedSkill);
};

// For-In loops QUIZ

for (job in work.jobs) {
	// adding work experience div
	$("#workExperience").append(HTMLworkStart);

	// formatting each item in jobs object
	var formattedEmployer =
		HTMLworkEmployer.replace("%data%", work.jobs[job].employer);

	var formattedTitle =
		HTMLworkTitle.replace("%data%", work.jobs[job].title);

	var formattedLocation =
		HTMLworkLocation.replace("%data%", work.jobs[job].location);

	var formattedDates =
		HTMLworkDates.replace("%data%", work.jobs[job].dates);

	var formattedDescription =
		HTMLworkDescription.replace("%data%", work.jobs[job].description);

	// concatenating employer and job title
	var formattedEmployerTitle = formattedEmployer + formattedTitle;

	// adding all data to the page
	$(".work-entry:last").append(formattedEmployerTitle);
	$(".work-entry:last").append(formattedLocation);
	$(".work-entry:last").append(formattedDates);
	$(".work-entry:last").append(formattedDescription);
}

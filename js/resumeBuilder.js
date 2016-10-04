var bio = {
	"name" : "Lee Roberts",
	"role" : "Teaching Assistant",
	"contacts" : {
		"mobile" : "773.386.1191",
		"email" : "leer5501@gmail.com",
		"github" : "pugglett",
		"location" : "Chicago"
	},
	"welcomeMessage" : "thanks for checking me out!",
	"skills" : [
		"stuntin' on hoes", "teaching", "being gay"
	],
	"biopic" : "images/avatar.png"
}

var projects = {
	"projects" : [
		{
			"title" : "Front End Nanodegree Resume",
			"dates" : "2016",
			"description" : "The first project for a Udacity Nanodegree related to web development. Required the use of skills in HTML, CSS, frameworks, and GitHub.",
			"images" : ["https://unsplash.it/200/300/?random", "https://unsplash.it/200/300/?random"]
		}
	]
}

var work = {
	"jobs" : [
		{
			"employer" : "Year Up",
			"title" : "Academic Team Teaching Assistant",
			"location" : "Chicago",
			"dates" : "2014 - 2016",
			"description" : "Teaching CIS302, COM150, and BUS101."
		},
		{
			"employer" : "commonground Marketing",
			"title" : "Digital Production Intern",
			"location" : "Chicago",
			"dates" : "2013 - 2014",
			"description" : "Assisting with creating of digital content such as landing pages. Reviewed user-submitted content for such pages and conducted video interviews."
		}
	]
}

var education = {
	"schools" : [
		{
			"name" : "Robert Morris University",
			"location" : "Chicago",
			"dates" : 2013,
			"url" : "",
			"majors" : ["Graphic Design"]
		}
	],
	"onlineClasses" : [
		{
			"title" : "Front End Web Development Nanodegree",
			"school" : "Udacity",
			"dates" : 2016,
			"url" : "www.udacity.com"
		},
		{
			"title" : "Intro to Programming Nanodegree",
			"school" : "Udacity",
			"dates" : 2016,
			"url" : "www.udacity.com"
		}
	]
}

// Displaying page content

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


function displayWork() {
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
};

displayWork();

// Click location quiz
$(document).click(function(loc) {
  // your code goes here
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});

// internationalize button

function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() +
		name[0].slice(1).toLowerCase();

	return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);

projects.display = function() {
			for (project in projects.projects) {
			// adding projects div
			$("#projects").append(HTMLprojectStart);

			// formatting each item in projects object
			var formattedTitle =
				HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			$(".project-entry:last").append(formattedTitle);

			var formattedProjectDates =
				HTMLprojectDates.replace("%data%", projects.projects[project].dates);
			$(".project-entry:last").append(formattedProjectDates);

			var formattedProjectDescription =
				HTMLprojectDescription.replace("%data%", projects.projects[project].description);
			$(".project-entry:last").append(formattedProjectDescription);

			if (projects.projects[project].images.length > 0) {
				for (image in projects.projects[project].images) {
					var formattedProjectImages =
					HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
					$(".project-entry:last").append(formattedProjectImages);
				}
			}
		}
	}

projects.display();
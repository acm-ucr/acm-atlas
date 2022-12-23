import Filters from "./Filters";

const filters = {}; // linked directly from filters
Filters.forEach(filter => (filters[filter.topic] = filter));

const Events = [
	{
		title: "Intern Panel",
		location: "WCH 205/6",
		type: "Meetings",
		start: new Date(2022, 8, 27, 16, 0, 0),
		end: new Date(2022, 8, 27, 18, 0, 0),
		description:
			"Learn about the tips and tricks undergraduates use to secure internships opportunities.",
	},
	{
		title: "CRS: Resume + LaTex",
		location: "WCH 127",
		type: "Career",
		start: new Date(2022, 9, 6, 16, 0, 0),
		end: new Date(2022, 9, 6, 18, 0, 0),
		description:
			"Come learn about how to create your resume with Latex for the upcoming application season!",
	},
	{
		title: "Campus Tours",
		location: "WCH 127",
		type: "Socials",
		start: new Date(2022, 9, 7, 16, 0, 0),
		end: new Date(2022, 9, 7, 18, 0, 0),
		description:
			"Walk around UCR's beautiful campus and learn about what UCR has to offer for you as a student!",
	},
	{
		title: "Project Showcase",
		location: "WCH 205/6",
		type: "Meetings",
		start: new Date(2022, 9, 11, 16, 0, 0),
		end: new Date(2022, 9, 11, 18, 0, 0),
		description:
			"Check out projects made by ACM members for inspiration on your own personal project, and learn more about upcoming hackathons.",
	},
	{
		title: "CRS: Internships",
		location: "WCH 127",
		type: "Career",
		start: new Date(2022, 9, 13, 16, 0, 0),
		end: new Date(2022, 9, 13, 18, 0, 0),
		description:
			"Learn about the internship application lifecycle and how to get prepared!",
	},
	{
		title: "Picture Day",
		location: "WCH 127",
		type: "Socials",
		start: new Date(2022, 9, 14, 16, 0, 0),
		end: new Date(2022, 9, 14, 18, 0, 0),
		description:
			"Join us to take your next profile picture for all your professional social media platforms.",
	},
	{
		title: "Speed Dating",
		location: "WCH 205/6",
		type: "Socials",
		start: new Date(2022, 9, 17, 16, 0, 0),
		end: new Date(2022, 9, 17, 17, 0, 0),
		description:
			"Come out and meet all the possible mentors you could be paired with for the rest of the school year!",
	},
	{
		title: "What Bytes Will Offer",
		location: "WCH 127",
		type: "Socials",
		start: new Date(2022, 9, 18, 16, 0, 0),
		end: new Date(2022, 9, 18, 17, 0, 0),
		description:
			"Create a plan and see some cool projects created by your mentors!",
	},
	{
		title: "CRS: Interview Process",
		location: "WCH 127",
		type: "Career",
		start: new Date(2022, 9, 20, 16, 0, 0),
		end: new Date(2022, 9, 20, 18, 0, 0),
		description:
			"Explore the tips and tricks behind technical and behavioral interviews.",
	},
	{
		title: "Ready Player ACM",
		location: "WCH 205/6",
		type: "Meetings",
		start: new Date(2022, 9, 25, 16, 0, 0),
		end: new Date(2022, 9, 25, 17, 0, 0),
		description:
			"Come to our VR/AR research panel with Prof. Jiasi Chen, Meta SWE James Luo, and graphics researchers to learn about the recent developments in VR/AR technology.",
	},
	{
		title: "CRS: Linkedin/Github",
		location: "WCH 127",
		type: "Career",
		start: new Date(2022, 9, 27, 16, 0, 0),
		end: new Date(2022, 9, 27, 18, 0, 0),
		description:
			"Polish your LinkedIn and Github profiles for visiting recruiters!",
	},
	{
		title: "Movie Night",
		location: "WCH 127",
		type: "Socials",
		start: new Date(2022, 9, 28, 16, 0, 0),
		end: new Date(2022, 9, 28, 18, 0, 0),
		description: "Relax after midterms with a movie night in the clubroom.",
	},
	{
		title: "CRS: Course Planning",
		location: "WCH 127",
		type: "Career",
		start: new Date(2022, 10, 3, 16, 0, 0),
		end: new Date(2022, 10, 3, 18, 0, 0),
		description:
			"With registration around the corner, learn about the tricks to get all the credits and classes you need!",
	},
	{
		title: "Mentor/Mentee Day #1: UV Social",
		location: "Meeting at UCR Sign/Scotty Bench, walking to UV",
		type: "Socials",
		start: new Date(2022, 10, 4, 16, 0, 0),
		end: new Date(2022, 10, 4, 18, 0, 0),
		description:
			"Meet with your matches and get some food or boba with them on our first Mentor/Mentee day!",
	},
	{
		title: "Thinking Like A Programmer",
		location: "WCH 205/6",
		type: "Meetings",
		start: new Date(2022, 10, 8, 16, 0, 0),
		end: new Date(2022, 10, 8, 18, 0, 0),
		description:
			"Discover the tips and tricks to THINK like a programmer and help you excel in your classes, projects, and various opportunities.",
	},
	{
		title: "CRS: Mock Interviews",
		location: "WCH 127",
		type: "Career",
		start: new Date(2022, 10, 10, 16, 0, 0),
		end: new Date(2022, 10, 10, 18, 0, 0),
		description:
			"Do a mock behavoral or technical or both interview with our officers!",
	},
	{
		title: "CRS: Graduate Studies",
		location: "WCH 127",
		type: "Career",
		start: new Date(2022, 10, 17, 16, 0, 0),
		end: new Date(2022, 10, 17, 18, 0, 0),
		description:
			"Explore graduate studies and the necessary requirements to stand out!",
	},
	{
		title: "Interview with Namanh Kapur",
		location: "WCH 205/6",
		type: "Meetings",
		start: new Date(2022, 10, 22, 16, 0, 0),
		end: new Date(2022, 10, 22, 18, 0, 0),
		description:
			"Join Namanh Kapur, a content creator, discuss his journey and various challenges he faced along the way.",
	},
	{
		title: "CRS: Research",
		location: "WCH 127",
		type: "Career",
		start: new Date(2022, 10, 24, 16, 0, 0),
		end: new Date(2022, 10, 24, 18, 0, 0),
		description:
			"Learn about various research positions and why research is so important",
	},
];

Events.forEach(event => {
	event.color = filters[event.type].color;
	event.textColor = filters[event.type].textColor;
	event.shadow = filters[event.type].shadow;
	event.border = filters[event.type].border;
});

export default Events;

describe("Intro Presence Check", () => {
	it("passes", () => {
		cy.visit("http://localhost:3000").scrollTo("0%", "20%");
		cy.get(".text-text").contains(
			"p",
			"ACM at UCR is the largest student-run technical organization with a focus on Computer Science. Our goal is to help our members develop their technical and professional skills to help them in school and the tech industry. We aim to accomplish our goal by providing technical workshops, professional events, and many more opportunities for our members to excel."
		);
	});
});

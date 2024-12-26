var _a;
(_a = document.getElementById("generate-resume")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    var resumeData = {
        name: document.getElementById("full-name").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        linkedin: document.getElementById("linkedin").value,
        github: document.getElementById("github").value,
        website: document.getElementById("website").value,
        summary: document.getElementById("summary").value,
        skills: document.getElementById("skills").value,
        experience: document.getElementById("experience").value,
        education: document.getElementById("education").value,
        certifications: document.getElementById("certifications").value,
        projects: document.getElementById("projects").value,
        languages: document.getElementById("languages").value,
        hobbies: document.getElementById("hobbies").value,
    };
    var resumeContent = "\n    <h1>".concat(resumeData.name, "</h1>\n    <p><strong>Phone:</strong> ").concat(resumeData.phone, "</p>\n    <p><strong>Email:</strong> ").concat(resumeData.email, "</p>\n    <p><strong>LinkedIn:</strong> ").concat(resumeData.linkedin, "</p>\n    <p><strong>GitHub:</strong> ").concat(resumeData.github, "</p>\n    <p><strong>Website:</strong> ").concat(resumeData.website, "</p>\n    <h2>Summary</h2>\n    <p>").concat(resumeData.summary, "</p>\n    <h2>Skills</h2>\n    <p>").concat(resumeData.skills, "</p>\n    <h2>Experience</h2>\n    <p>").concat(resumeData.experience, "</p>\n    <h2>Education</h2>\n    <p>").concat(resumeData.education, "</p>\n    <h2>Certifications</h2>\n    <p>").concat(resumeData.certifications, "</p>\n    <h2>Projects</h2>\n    <p>").concat(resumeData.projects, "</p>\n    <h2>Languages</h2>\n    <p>").concat(resumeData.languages, "</p>\n    <h2>Hobbies</h2>\n    <p>").concat(resumeData.hobbies, "</p>\n  ");
    var resumeWindow = window.open("", "_blank");
    if (resumeWindow) {
        resumeWindow.document.write("\n      <html>\n        <head><title>Generated Resume</title></head>\n        <body>".concat(resumeContent, "</body>\n      </html>\n    "));
    }
});

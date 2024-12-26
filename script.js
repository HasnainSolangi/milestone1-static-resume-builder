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
        skills: document.getElementById("skills").value.split("\n"), // Split into bullet points
        experience: document.getElementById("experience").value.split("\n"),
        education: document.getElementById("education").value,
        certifications: document.getElementById("certifications").value.split("\n"),
        projects: document.getElementById("projects").value.split("\n"),
        languages: document.getElementById("languages").value.split("\n"),
        hobbies: document.getElementById("hobbies").value.split("\n"),
    };
    var resumeContent = "\n    <html>\n    <head>\n      <title>".concat(resumeData.name, "'s Resume</title>\n      <style>\n        body {\n          font-family: Arial, sans-serif;\n          line-height: 1.6;\n          margin: 0;\n          padding: 2rem;\n          background-color: #f4f4f9;\n          color: #333;\n        }\n        h1, h2 {\n          color: #007bff;\n        }\n        h1 {\n          margin-bottom: 0.5rem;\n        }\n        section {\n          margin-bottom: 1.5rem;\n        }\n        .section-title {\n          font-size: 1.2rem;\n          font-weight: bold;\n          margin-bottom: 0.5rem;\n        }\n        .section-content {\n          margin-left: 1rem;\n        }\n        ul {\n          padding-left: 1.5rem;\n        }\n      </style>\n    </head>\n    <body>\n      <h1>").concat(resumeData.name, "</h1>\n      <p><strong>Phone:</strong> ").concat(resumeData.phone, "</p>\n      <p><strong>Email:</strong> ").concat(resumeData.email, "</p>\n      <p><strong>LinkedIn:</strong> ").concat(resumeData.linkedin, "</p>\n      <p><strong>GitHub:</strong> ").concat(resumeData.github, "</p>\n      <p><strong>Website:</strong> ").concat(resumeData.website, "</p>\n      \n      <section>\n        <div class=\"section-title\">Summary</div>\n        <div class=\"section-content\">").concat(resumeData.summary, "</div>\n      </section>\n      \n      <section>\n        <div class=\"section-title\">Skills</div>\n        <div class=\"section-content\">\n          <ul>\n            ").concat(resumeData.skills.map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join(""), "\n          </ul>\n        </div>\n      </section>\n      \n      <section>\n        <div class=\"section-title\">Experience</div>\n        <div class=\"section-content\">\n          <ul>\n            ").concat(resumeData.experience.map(function (exp) { return "<li>".concat(exp.trim(), "</li>"); }).join(""), "\n          </ul>\n        </div>\n      </section>\n      \n      <section>\n        <div class=\"section-title\">Education</div>\n        <div class=\"section-content\">").concat(resumeData.education, "</div>\n      </section>\n      \n      <section>\n        <div class=\"section-title\">Certifications</div>\n        <div class=\"section-content\">\n          <ul>\n            ").concat(resumeData.certifications.map(function (cert) { return "<li>".concat(cert.trim(), "</li>"); }).join(""), "\n          </ul>\n        </div>\n      </section>\n      \n      <section>\n        <div class=\"section-title\">Projects</div>\n        <div class=\"section-content\">\n          <ul>\n            ").concat(resumeData.projects.map(function (proj) { return "<li>".concat(proj.trim(), "</li>"); }).join(""), "\n          </ul>\n        </div>\n      </section>\n      \n      <section>\n        <div class=\"section-title\">Languages</div>\n        <div class=\"section-content\">\n          <ul>\n            ").concat(resumeData.languages.map(function (lang) { return "<li>".concat(lang.trim(), "</li>"); }).join(""), "\n          </ul>\n        </div>\n      </section>\n      \n      <section>\n        <div class=\"section-title\">Hobbies</div>\n        <div class=\"section-content\">\n          <ul>\n            ").concat(resumeData.hobbies.map(function (hobby) { return "<li>".concat(hobby.trim(), "</li>"); }).join(""), "\n          </ul>\n        </div>\n      </section>\n    </body>\n    </html>\n  ");
    var resumeWindow = window.open("", "_blank");
    if (resumeWindow) {
        resumeWindow.document.write(resumeContent);
        resumeWindow.document.close();
    }
});

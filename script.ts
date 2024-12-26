document.getElementById("generate-resume")?.addEventListener("click", () => {
  const resumeData = {
    name: (document.getElementById("full-name") as HTMLInputElement).value,
    phone: (document.getElementById("phone") as HTMLInputElement).value,
    email: (document.getElementById("email") as HTMLInputElement).value,
    linkedin: (document.getElementById("linkedin") as HTMLInputElement).value,
    github: (document.getElementById("github") as HTMLInputElement).value,
    website: (document.getElementById("website") as HTMLInputElement).value,
    summary: (document.getElementById("summary") as HTMLTextAreaElement).value,
    skills: (document.getElementById("skills") as HTMLTextAreaElement).value,
    experience: (document.getElementById("experience") as HTMLTextAreaElement).value,
    education: (document.getElementById("education") as HTMLTextAreaElement).value,
    certifications: (document.getElementById("certifications") as HTMLTextAreaElement).value,
    projects: (document.getElementById("projects") as HTMLTextAreaElement).value,
    languages: (document.getElementById("languages") as HTMLTextAreaElement).value,
    hobbies: (document.getElementById("hobbies") as HTMLTextAreaElement).value,
  };

  const resumeContent = `
    <h1>${resumeData.name}</h1>
    <p><strong>Phone:</strong> ${resumeData.phone}</p>
    <p><strong>Email:</strong> ${resumeData.email}</p>
    <p><strong>LinkedIn:</strong> ${resumeData.linkedin}</p>
    <p><strong>GitHub:</strong> ${resumeData.github}</p>
    <p><strong>Website:</strong> ${resumeData.website}</p>
    <h2>Summary</h2>
    <p>${resumeData.summary}</p>
    <h2>Skills</h2>
    <p>${resumeData.skills}</p>
    <h2>Experience</h2>
    <p>${resumeData.experience}</p>
    <h2>Education</h2>
    <p>${resumeData.education}</p>
    <h2>Certifications</h2>
    <p>${resumeData.certifications}</p>
    <h2>Projects</h2>
    <p>${resumeData.projects}</p>
    <h2>Languages</h2>
    <p>${resumeData.languages}</p>
    <h2>Hobbies</h2>
    <p>${resumeData.hobbies}</p>
  `;

  const resumeWindow = window.open("", "_blank");
  if (resumeWindow) {
    resumeWindow.document.write(`
      <html>
        <head><title>Generated Resume</title></head>
        <body>${resumeContent}</body>
      </html>
    `);
  }
});

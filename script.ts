document.getElementById("generate-resume")?.addEventListener("click", () => {
  const resumeData = {
    name: (document.getElementById("full-name") as HTMLInputElement).value,
    phone: (document.getElementById("phone") as HTMLInputElement).value,
    email: (document.getElementById("email") as HTMLInputElement).value,
    linkedin: (document.getElementById("linkedin") as HTMLInputElement).value,
    github: (document.getElementById("github") as HTMLInputElement).value,
    website: (document.getElementById("website") as HTMLInputElement).value,
    summary: (document.getElementById("summary") as HTMLTextAreaElement).value,
    skills: (document.getElementById("skills") as HTMLTextAreaElement).value.split("\n"), // Split into bullet points
    experience: (document.getElementById("experience") as HTMLTextAreaElement).value.split("\n"),
    education: (document.getElementById("education") as HTMLTextAreaElement).value,
    certifications: (document.getElementById("certifications") as HTMLTextAreaElement).value.split("\n"),
    projects: (document.getElementById("projects") as HTMLTextAreaElement).value.split("\n"),
    languages: (document.getElementById("languages") as HTMLTextAreaElement).value.split("\n"),
    hobbies: (document.getElementById("hobbies") as HTMLTextAreaElement).value.split("\n"),
  };

  const resumeContent = `
    <html>
    <head>
      <title>${resumeData.name}'s Resume</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          margin: 0;
          padding: 2rem;
          background-color: #f4f4f9;
          color: #333;
        }
        h1, h2 {
          color: #007bff;
        }
        h1 {
          margin-bottom: 0.5rem;
        }
        section {
          margin-bottom: 1.5rem;
        }
        .section-title {
          font-size: 1.2rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
        }
        .section-content {
          margin-left: 1rem;
        }
        ul {
          padding-left: 1.5rem;
        }
      </style>
    </head>
    <body>
      <h1>${resumeData.name}</h1>
      <p><strong>Phone:</strong> ${resumeData.phone}</p>
      <p><strong>Email:</strong> ${resumeData.email}</p>
      <p><strong>LinkedIn:</strong> ${resumeData.linkedin}</p>
      <p><strong>GitHub:</strong> ${resumeData.github}</p>
      <p><strong>Website:</strong> ${resumeData.website}</p>
      
      <section>
        <div class="section-title">Summary</div>
        <div class="section-content">${resumeData.summary}</div>
      </section>
      
      <section>
        <div class="section-title">Skills</div>
        <div class="section-content">
          <ul>
            ${resumeData.skills.map(skill => `<li>${skill.trim()}</li>`).join("")}
          </ul>
        </div>
      </section>
      
      <section>
        <div class="section-title">Experience</div>
        <div class="section-content">
          <ul>
            ${resumeData.experience.map(exp => `<li>${exp.trim()}</li>`).join("")}
          </ul>
        </div>
      </section>
      
      <section>
        <div class="section-title">Education</div>
        <div class="section-content">${resumeData.education}</div>
      </section>
      
      <section>
        <div class="section-title">Certifications</div>
        <div class="section-content">
          <ul>
            ${resumeData.certifications.map(cert => `<li>${cert.trim()}</li>`).join("")}
          </ul>
        </div>
      </section>
      
      <section>
        <div class="section-title">Projects</div>
        <div class="section-content">
          <ul>
            ${resumeData.projects.map(proj => `<li>${proj.trim()}</li>`).join("")}
          </ul>
        </div>
      </section>
      
      <section>
        <div class="section-title">Languages</div>
        <div class="section-content">
          <ul>
            ${resumeData.languages.map(lang => `<li>${lang.trim()}</li>`).join("")}
          </ul>
        </div>
      </section>
      
      <section>
        <div class="section-title">Hobbies</div>
        <div class="section-content">
          <ul>
            ${resumeData.hobbies.map(hobby => `<li>${hobby.trim()}</li>`).join("")}
          </ul>
        </div>
      </section>
    </body>
    </html>
  `;

  const resumeWindow = window.open("", "_blank");
  if (resumeWindow) {
    resumeWindow.document.write(resumeContent);
    resumeWindow.document.close();
  }
});

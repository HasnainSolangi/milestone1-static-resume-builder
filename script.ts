(() => {
  // Toggle Skills Functionality
  const toggleSkillsButton = document.getElementById('toggle-skills-btn') as HTMLButtonElement | null;
  const skillsList = document.getElementById('skills-list') as HTMLUListElement | null;

  if (toggleSkillsButton && skillsList) {
    toggleSkillsButton.addEventListener('click', () => {
      if (skillsList.style.display === 'none' || skillsList.style.display === '') {
        skillsList.style.display = 'block'; // Show skills list
      } else {
        skillsList.style.display = 'none'; // Hide skills list
      }
    });
  } else {
    console.error('Error: Skills button or skills list element not found.');
  }

  // Event Listeners
  const generateResumeButton = document.getElementById('generate-resume-btn') as HTMLButtonElement | null;
  const addSkillButton = document.getElementById('add-skill-btn') as HTMLButtonElement | null;
  const addExperienceButton = document.getElementById('add-experience-btn') as HTMLButtonElement | null;
  const addEducationButton = document.getElementById('add-education-btn') as HTMLButtonElement | null;
  const addCertificationButton = document.getElementById('add-certification-btn') as HTMLButtonElement | null;
  const addProjectButton = document.getElementById('add-project-btn') as HTMLButtonElement | null;
  const addHobbyButton = document.getElementById('add-hobby-btn') as HTMLButtonElement | null;

  const buttons = [
    { button: addSkillButton, name: 'Add Skill' },
    { button: addExperienceButton, name: 'Add Experience' },
    { button: addEducationButton, name: 'Add Education' },
    { button: addCertificationButton, name: 'Add Certification' },
    { button: addProjectButton, name: 'Add Project' },
    { button: addHobbyButton, name: 'Add Hobby/Interest' },
    { button: generateResumeButton, name: 'Generate Resume' },
  ];

  buttons.forEach(({ button, name }) => {
    if (button) {
      button.addEventListener('click', () => {
        console.log(`${name} button clicked!`);
      });
    } else {
      console.error(`Error: ${name} button not found.`);
    }
  });
})();

(function () {
    // Toggle Skills Functionality
    var toggleSkillsButton = document.getElementById('toggle-skills-btn');
    var skillsList = document.getElementById('skills-list');
    if (toggleSkillsButton && skillsList) {
        toggleSkillsButton.addEventListener('click', function () {
            if (skillsList.style.display === 'none' || skillsList.style.display === '') {
                skillsList.style.display = 'block'; // Show skills list
            }
            else {
                skillsList.style.display = 'none'; // Hide skills list
            }
        });
    }
    else {
        console.error('Error: Skills button or skills list element not found.');
    }
    // Event Listeners
    var generateResumeButton = document.getElementById('generate-resume-btn');
    var addSkillButton = document.getElementById('add-skill-btn');
    var addExperienceButton = document.getElementById('add-experience-btn');
    var addEducationButton = document.getElementById('add-education-btn');
    var addCertificationButton = document.getElementById('add-certification-btn');
    var addProjectButton = document.getElementById('add-project-btn');
    var addHobbyButton = document.getElementById('add-hobby-btn');
    var buttons = [
        { button: addSkillButton, name: 'Add Skill' },
        { button: addExperienceButton, name: 'Add Experience' },
        { button: addEducationButton, name: 'Add Education' },
        { button: addCertificationButton, name: 'Add Certification' },
        { button: addProjectButton, name: 'Add Project' },
        { button: addHobbyButton, name: 'Add Hobby/Interest' },
        { button: generateResumeButton, name: 'Generate Resume' },
    ];
    buttons.forEach(function (_a) {
        var button = _a.button, name = _a.name;
        if (button) {
            button.addEventListener('click', function () {
                console.log("".concat(name, " button clicked!"));
            });
        }
        else {
            console.error("Error: ".concat(name, " button not found."));
        }
    });
})();

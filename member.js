function skillsMember() {
    var member = document.getElementById("member");
    var skills = document.getElementById("skills");
    var contact = document.getElementById("contact");
    var about = document.getElementById("about");
    var memberButton = document.getElementById("memberButton");
    var skillsButton = document.getElementById("skillsButton");
    var contactButton = document.getElementById("contactButton");
    var aboutButton = document.getElementById("aboutButton");
    member.style.display = "block";
    skills.style.display = "none";
    contact.style.display = "none";
    about.style.display = "none";
    memberButton.style.backgroundColor = "#f5f5f5";
    skillsButton.style.backgroundColor = "#e6e6e6";
    contactButton.style.backgroundColor = "#e6e6e6";
    aboutButton.style.backgroundColor = "#e6e6e6";
}
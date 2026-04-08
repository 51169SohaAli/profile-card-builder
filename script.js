const Name=document.getElementById("fullname");
const jobTitle=document.getElementById("jobtitle");
const Bio=document.getElementById("bio");
const avatar_color=document.getElementById("avatarcolor");
const Html=document.getElementById("html");
const Css=document.getElementById("css");
const javaScript=document.getElementById("javascript");
const React=document.getElementById("react");
const avatar_circle=document.getElementById("avatar-circle");
const bio_text=document.getElementById("bio-text");
const generate_card_btn=document.getElementById("generate-card-btn");
const error_message=document.getElementById("errormessage");
const success_message=document.getElementById("successmessage");
const skills_container=document.getElementById("skills-container");
const skills=document.querySelectorAll(".skill");

Name.addEventListener("input",function(){
    document.getElementById("card-name").textContent=Name.value;
});


generate_card_btn.addEventListener("click", function(e){
    e.preventDefault();
    if(Name.value ==="" || jobTitle.value ===""){
        error_message.textContent="Required fields cannot be left empty."
        return;
}
success_message.textContent="Form submitted successfully.";

document.querySelector("#card-name").textContent=Name.value;
document.querySelector("#card-jobtitle").textContent=jobTitle.value;
document.querySelector("#bio-text").textContent=Bio.value;
document.querySelector("#avatar-circle").style.backgroundColor=avatar_color.value;

skills_container.innerHTML="";

skills.forEach(skill => {
    if(skill.checked){
        const span=document.createElement("span");
        span.textContent=skill.value;
        span.classList.add("skill");
        skills_container.appendChild(span);
    }
    console.log(skills_container);
});

});


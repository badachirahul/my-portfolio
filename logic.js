var tablinks = document.getElementsByClassName("tab-links"); 
var tabcontents = document.getElementsByClassName("tab-contents"); 

function opentab(tabname) { 
    for(tablink of tablinks) { 
        tablink.classList.remove("active-link"); 
    } 
    for (tabcontent of tabcontents) { 
        tabcontent.classList.remove("active-tab"); 
    } 
    event.currentTarget.classList.add("active-link"); 
    document.getElementById(tabname).classList.add("active-tab"); 
}


const showMoreBtn = document.getElementById("showMoreBtn");
const moreContent = document.getElementById("moreContent");
const showLessBtn = document.getElementById("showLessBtn");

showMoreBtn.addEventListener("click" , function() {
    moreContent.style.display = "block";
    showMoreBtn.style.display = "none"; 
});

showLessBtn.addEventListener("click", function() {
    moreContent.style.display = "none";
    showMoreBtn.style.display = "block";
})

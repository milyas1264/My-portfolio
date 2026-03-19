document.querySelectorAll('a[href^="#"]').forEach(anchor => {

  anchor.addEventListener("click", function(e){
  
  e.preventDefault();
  
  const target = document.querySelector(this.getAttribute("href"));
  
  target.scrollIntoView({
  behavior: "smooth"
  });
  
  });
  
  });
 // Animate skill bars
  const bars = document.querySelectorAll(".progress-bar");

function animateSkills(){

bars.forEach(function(bar){

const width = bar.getAttribute("style").replace("width:", "").trim();

bar.style.width = "0";

setTimeout(() => {
bar.style.width = width;
}, 200);

});

}

window.addEventListener("load", animateSkills);
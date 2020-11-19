//This is the div that contains the button and the icon!
const questionContainer = document.querySelectorAll(".question-container");
//This is the div that contains the p element!
const answerContainer = document.querySelectorAll(".answer-container");
//This is the icons that i use from Font awesome!
const icons = document.querySelectorAll(".fas");

questionContainer.forEach((item, index) => {
    item.addEventListener("click", () => {
        openAccordion(index);
    });
});

function openAccordion(index) {
    
    answerContainer.forEach(item => {
       if (item === answerContainer[index]) {
           item.classList.toggle("active");
       } else {
           item.classList.remove("active");
       };
    });
};

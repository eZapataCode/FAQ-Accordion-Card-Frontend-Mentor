//This is the div that contains the button and the icon!
const questionContainer = document.querySelectorAll(".question-container");
//This const contains the buttons to drop the answers
const questionButtons = document.querySelectorAll(".question-button");
//This is the div that contains the p element!
const answerContainer = document.querySelectorAll(".answer-container");
//This is the icons that i use from Font awesome!
const icons = document.querySelectorAll(".fas");

questionContainer.forEach((item, index) => {
    item.addEventListener("click", () => {
        openAccordion(index);
    });
});

function openAccordion(index1) {
    
    answerContainer.forEach((item, index2) => {
       if (item === answerContainer[index1]) {
           item.classList.toggle("active");
           questionButtons[index2].classList.toggle("bold");
           icons[index2].classList.toggle("fa-angle-up");
       } else {
           item.classList.remove("active");
           questionButtons[index2].classList.remove("bold");
           icons[index2].classList.remove("fa-angle-up");
       };
    });
};

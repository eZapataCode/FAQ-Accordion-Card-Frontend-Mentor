const questionContainer = document.querySelectorAll(".question-container");
const answerContainer = document.querySelectorAll(".answer-container");
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

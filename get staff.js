const question1 = Math.floor(Math.random() * 10) + 1;
const question2 = Math.floor(Math.random() * 10) + 1;
const result1 = question1 + question2;

const question3 = Math.floor(Math.random() * 10) + 1;
const question4 = Math.floor(Math.random() * 10) + 1;
const result2 = question3 + question4;


window.alert("You just have to answer 2 questions to get staff.");

answer1 = window.prompt(`What is ${question1} + ${question2}?`);
answer1 = Number(answer1);
if(answer1 === result1){
    window.alert("You answered right, one more question.");
    answer2 = window.prompt(`What is ${question3} + ${question4}?`);
    answer2 = Number(answer2);
    if(answer2 === result2){
        window.alert("Congrats, you will get staff after pressing OK");
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    }
    else{
        window.alert("You answered wrong, no staff for you.");
    }
}
else{
    window.alert("You answered wrong, no staff for you.");
}

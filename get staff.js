const question1 = Math.floor(Math.random() * 100) + 1;
const question2 = Math.floor(Math.random() * 100) + 1;
const result = question1 + question2;

window.alert("To get staff you just have to answer one question.");
let answer = window.prompt(`What is ${question1} + ${question2}`);
answer = Number(answer);
if(!isNaN(answer)){
    if(answer == result){
        window.alert("Congrats on your staff!")
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley";
    }
    else{
        window.alert("You answered wrong. No staff for you.");
    }
}
else{
    window.alert("Please enter a number.");
}

const first = Math.floor(Math.random() * 10);
const second = Math.floor(Math.random() * 10) + 1;
const result = first + second;
const answer = parseInt(window.prompt(`Bot verification: What is ${first} + ${second}?`));
if (answer !== result){
    window.location.href = "meow.html";
}
else{
    alert("Verification successful! You can now access the site.");
}
const first = Math.floor(Math.random() * 10);
const second = Math.floor(Math.random() * 10) + 1;
const result = first + second;

if (document.cookie.includes("verified=true")) {
    // Already verified
} else {
    const answer = parseInt(window.prompt(`Bot verification: What is ${first} + ${second}?`), 10);
    if (answer === result) {
        document.cookie = "verified=true; path=/";
    } else {
        window.location.href = "no access.html";
    }
}

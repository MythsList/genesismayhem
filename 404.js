var errors = ["404", "134"];
var randomnum = Math.floor(Math.random() * 26) + 1;

if (randomnum >= 20) {
    document.documentElement.style.setProperty("--error", errors[1]);
}  
else {
    document.documentElement.style.setProperty("--error", errors[0]);
}
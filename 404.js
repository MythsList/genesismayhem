const errors = ["404", "134"];
const randomnum = Math.floor(Math.random() * 26) + 1;

if (randomnum >= 20) {
    document.querySelectorAll(':root').style.setProperty("--error", errors[1]);
}  
else {
    document.querySelectorAll(':root').style.setProperty("--error", errors[0]);
}
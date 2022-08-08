const randomnum = Math.floor(Math.random() * 26) + 1;
  
if (randomnum >= 25 || randomnum <= 1) {
    if (typeof(Storage) !== "undefined") {
        localStorage.amountofnoway = Number(localStorage.amountofnoway) + 1;
    }

    document.title = "Genesis Mayhem | NO WAY!";
    document.getElementById("errormsg").innerHTML = "Error 0134";
    document.getElementById("noway").innerHTML = "No way? No way!";
    document.getElementById("audio").controls = "true";
    document.getElementById("counter").innerHTML = localStorage.amountofnoway;
    document.getElementById("counter").style.display = "block";
    document.getElementById("copyright").style.marginTop = "-1em";
}  
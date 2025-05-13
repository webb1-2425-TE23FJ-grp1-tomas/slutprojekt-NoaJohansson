const buttonconst = document.getElementById("color-button");

if(buttonconst) {
    buttonconst.addEventListener("click", function () {

    console.log("det fungerar");
    document.documentElement.style.setProperty('--bodycolor', 'lightpink');
    localStorage.setItem('bakgrundsfarg', 'lightpink');


})
}

document.addEventListener('DOMContentLoaded', function () {
    const savedColor = localStorage.getItem('bakgrundsfarg');
    console.log(savedColor);
    if (savedColor) {
        document.documentElement.style.setProperty('--bodycolor', savedColor);
    }
});
const buttonconst = document.getElementById("color-button");
let numb = 0;

if (buttonconst) {
    buttonconst.addEventListener("click", function () {
        if (numb === 0) {
            console.log("pink");
            document.documentElement.style.setProperty('--bodycolor', 'lightpink');
            localStorage.setItem('bakgrundsfarg', 'lightpink');
            numb = 1;
        } else if (numb === 1) {
            console.log("blue");
            document.documentElement.style.setProperty('--bodycolor', 'lightblue');
            localStorage.setItem('bakgrundsfarg', 'lightblue');
            numb = 2;
        }
        else {
            console.log("gray");
            document.documentElement.style.setProperty('--bodycolor', 'lightgray');
            localStorage.setItem('bakgrundsfarg', 'lightgray');
            numb = 0;
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const savedColor = localStorage.getItem('bakgrundsfarg');
    if (savedColor) {
        document.documentElement.style.setProperty('--bodycolor', savedColor);
        if (savedColor === 'lightpink') {
            numb = 1;
        } else if(savedColor === 'lightblue') {
            numb = 2;
        }
        else{
             numb = 0;
        }
    }
});
const content = document.getElementsByTagName('body')[0];
const lightMode = document.getElementById('light-change');
let theme = localStorage.getItem("theme");

if (theme === undefined)
{
    theme = "dark";
    localStorage.setItem("theme", theme);
}


if( theme === "light")
{
    lightMode.classList.toggle('active');
    content.classList.toggle('light');
}

lightMode.addEventListener('click', function () {
    lightMode.classList.toggle('active');
    content.classList.toggle('light');

    theme = localStorage.getItem("theme");
    localStorage.setItem("theme", theme === "light" ? "dark" : "light");
})

function myfunction() {
    alert("Submitted");
}
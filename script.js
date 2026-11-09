const btnChangeColor = document.getElementById("buttonChangeColor");

const slider = document.querySelector('input[name="redSlider"]');

const box = document.querySelector(".box");

function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

btnChangeColor.onclick = function () {
    document.body.style.backgroundColor = randomColor();
};

slider.oninput = function () {
    document.body.style.backgroundColor = randomColor();
};
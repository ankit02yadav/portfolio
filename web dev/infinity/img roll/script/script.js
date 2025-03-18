function left_direction(){
    document.getElementById("roll").style="animation: rotatey 25s linear infinite;"

}
function right_direction(){
    document.getElementById("roll").style="animation: rotatex 25s linear infinite;"

}
const images = document.querySelectorAll(".img");
const rollElement = document.getElementById("roll");

images.forEach(img => {
    img.addEventListener("mouseenter", () => {
        rollElement.style.animationPlayState = "paused";
    });

    img.addEventListener("mouseleave", () => {
        rollElement.style.animationPlayState = "running";
    });
});

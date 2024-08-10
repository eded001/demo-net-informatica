const iconElement = document.querySelector(".material-symbols-outlined");
const redesSociais = document.querySelector("#redesSociais");

iconElement.addEventListener("click", animation);

function animation() {
    const iconElementTextContent = iconElement.textContent;
    const redesSociaisStyle = redesSociais.style;
    const animationDesc = "down .5s ease forwards";

    iconElement.removeEventListener("click", animation);

    if (iconElementTextContent === "close") {
        iconElement.innerText = "more_horiz";

        redesSociaisStyle.animation = animationDesc;

        setTimeout(() => {
            redesSociaisStyle.transform = "translateY(100%)";
            iconElement.addEventListener("click", animation);
        }, 500);
    } else {
        iconElement.innerText = "close";

        redesSociaisStyle.animation = animationDesc;

        setTimeout(() => {
            redesSociaisStyle.transform = "translateY(0)";
            iconElement.addEventListener("click", animation);
        }, 500);
    }
}
const iconElement = document.querySelector(".material-symbols-outlined");
const redesSociais = document.querySelector("#redesSociais");

iconElement.addEventListener("click", animation);

function animation() {
    const textContent = iconElement.textContent;
    const redesSociaisStyle = redesSociais.style;

    iconElement.removeEventListener("click", animation);

    if (textContent === "close") {
        iconElement.innerText = "more_horiz";

        redesSociaisStyle.animation = "down .5s ease forwards";

        setTimeout(() => {
            redesSociaisStyle.transform = "translateY(100%)";
            iconElement.addEventListener("click", animation);
        }, 500);
    } else {
        iconElement.innerText = "close";

        redesSociaisStyle.animation = "up .5s ease forwards";

        setTimeout(() => {
            redesSociaisStyle.transform = "translateY(0)";
            iconElement.addEventListener("click", animation);
        }, 500);
    }
}
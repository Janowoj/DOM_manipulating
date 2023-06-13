const container = document.querySelector("#container");
const baseURL = "/images/logo";

for (let i = 1; i <= 23; i++) {
    const logo = document.createElement("div");
    const label = document.createElement("span");
    label.innerText = `#${i}`;
    const newImg = document.createElement("img");
    logo.classList.add('logo');
    newImg.src = `${baseURL}${i}.png`;

    logo.appendChild(newImg);
    logo.appendChild(label);
    container.appendChild(logo);

}

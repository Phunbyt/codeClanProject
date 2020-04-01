let weChange = document.querySelectorAll('#we');

const weText = ["I", "YOU", "WE"];

let offset = 0;


for (let i = 0; i < 1000; i++) {
    weText.forEach((text) => {
        setTimeout(() => {
            weChange.forEach(element => element.innerHTML = text)
        }, 3000 + offset);
        offset += 3000;
    })
}
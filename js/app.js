const breakpoints = {
    xs: 576,
    sm: 618,
    md: 768,
    lg: 1024
}

const generateGrid = async (props) => {
    const container = document.querySelector(".container");
    container.style.gridTemplateColumns = `repeat(${props}, 1fr)`;
    if (!document.querySelector(".pic")) {
        for (let i = 0; i < 50; i++) {
            const response = await fetch('https://picsum.photos/1080');
            const pic = document.createElement("div");
            pic.className = "pic";

            const img = document.createElement("img");
            img.src = response.url;

            const number = document.createElement("div");
            number.className = "number";
            number.innerText = i + 1;

            pic.appendChild(img);
            pic.appendChild(number);
            container.appendChild(pic);
        }
    }
}

const deviceWidth = window.innerWidth;
if (deviceWidth >= breakpoints.lg) {
    generateGrid(4);
} else if (deviceWidth <= breakpoints.md) {
    generateGrid(3);
} else if (deviceWidth <= breakpoints.sm) {
    generateGrid(2);
} else {
    generateGrid(1);
}

addEventListener('resize', () => {
    const deviceWidth = window.innerWidth;
    if (deviceWidth >= breakpoints.lg) {
        generateGrid(4);
    } else if (deviceWidth >= breakpoints.md) {
        generateGrid(3);
    } else if (deviceWidth >= breakpoints.sm) {
        generateGrid(2);
    } else {
        generateGrid(1);
    }
})


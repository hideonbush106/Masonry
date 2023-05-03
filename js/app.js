const breakpoints = {
    xs: 576,
    sm: 618,
    md: 768,
    lg: 1024
}

const generateGrid = async (props) => {
    const container = document.querySelector(".container");
    container.style.gridTemplateColumns = `repeat(${props}, 1fr)`;
    const randomPics = Math.floor(Math.random() * (100 - 20 + 1)) + 20;
    if (!document.querySelector(".pic")) {
        for (let i = 1; i < randomPics; i++) {
            const min = 1080;
            const max = 1500;
            const rand = Math.floor(Math.random() * (max - min + 1)) + min;

            const pic = document.createElement("div");
            pic.className = "pic";
            pic.style.height = `${rand / 2}px`;
            pic.style.gridRowEnd = `span ${Math.ceil(rand / 5)}`;
            const img = document.createElement("img");
            const response = await fetch(`https://picsum.photos/1080/`);
            img.src = response.url;
            img.style.height = `${rand / 2}px`;

            const number = document.createElement("div");
            number.className = "number";
            number.innerText = i;

            pic.appendChild(img);
            pic.appendChild(number);
            container.appendChild(pic);
        }

    }
}

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


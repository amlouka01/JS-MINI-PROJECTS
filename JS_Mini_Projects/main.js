let Projects = [
    {
        title: "calculator", 
        file: "Projects/calculator.html", 
        img: "img/calculator.webP", 
        description: "A clean, minimalist calculator built with vanilla JavaScript for fast and accurate arithmetic operations."
    },
    {
        title: "to-do list", 
        file: "Projects/to-do-list.html", 
        img: "img/to-do-list.webP", 
        description: "A flat-design task management tool utilizing LocalStorage to keep your daily goals organized and persistent."
    },
    {
        title: "Tic Tac Toe", 
        file: "Projects/tic-tac-toe.html", 
        img: "img/tic-tac-toe.webP", 
        description: "An interactive, logic-based Tic Tac Toe game featuring a clean grid interface and reliable win-detection."
    },
    {
        title: "fake data generator", 
        file: "Projects/fake-data-generator.html", 
        img: "img/fake-data-generator.webP", 
        description: "A practical developer utility to instantly generate random, structured user mock data for software testing."
    },
    {
        title: "MAD Convert", 
        file: "Projects/mad-convert.html", 
        img: "img/mad-convert.webP", 
        description: "A fast and precise currency conversion tool tailored specifically for the Moroccan Dirham exchange rates."
    },
    {
        title: "mini pomo", 
        file: "Projects/mini-pomo.html", 
        img: "img/mini-pomo.webP", 
        description: "A minimalist Pomodoro timer designed with a dark theme to enhance focus and track productivity sessions."
    },
    {
        title: "algo maze", 
        file: "Projects/algo-maze.html", 
        img: "img/algo-maze.webP", 
        description: "A procedural maze generator visualized step-by-step using the recursive backtracker algorithm."
    },
    {
        title: "exact age", 
        file: "Projects/exact-age.html", 
        img: "img/exact-age.webP", 
        description: "A real-time chronological tracker calculating exact life span dynamically down to the second."
    }
];

let grid = document.getElementById("grid");

function showPro() {
    let Pro = "";
    for (let i = 0; i < Projects.length; i++) {
        let t = Math.floor(Math.random() * (2 - 1 + 1) + 1);
        Pro += `
            <a href="${Projects[i].file}" class="card eff${t}" target = "_blank">
                <img src="${Projects[i].img}" alt="${Projects[i].title}.webP" loading="lazy">
                <h3>${Projects[i].title}</h3>
                <p>${Projects[i].description}</p>
            </a>
        `;
    };
    grid.innerHTML = Pro;
}

showPro();
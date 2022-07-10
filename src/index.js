const model = [
    {type: "title", value: "Hello world from js"},
    {type: "text", value: "text"},
    {type: "columns", value: [
        "111111111",
        "222222222",
        "3333333333"
    ]}
]

// $ - element that is from DOM

const $site = document.querySelector("#site");

model.forEach(block => {
    let html = ""

    switch(block.type) {
        case "title":
            html = genTitle(block);
        break;
        case "text":
            html = genText(block);
        break;
        case "columns":
            html = genColumn(block); 
        break;
    }

    $site.insertAdjacentHTML("beforeend", html)
});

function genTitle(block) {
    return `
        <div class="row">
            <div class="col-sm">
                <h1>${block.value}</h1>
            </div>
        </div>
    `;
}

function genText(block) {
    return `
        <div class="row">
            <div class="col-sm">
                <p>${block.value}</p>
            </div>
        </div>
    `;
}

function genColumn(block) {
    let html = "";  

    html = block.value.map(element => `<div class="col-sm">${element}</div>`)

    return `
        <div class="row">
            ${html.join("")}    
        </div>
    `;
}
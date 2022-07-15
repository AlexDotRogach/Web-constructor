const $site = document.querySelector("#site");

export class Block {
    constructor(settingObj) {
        this.settingObj = settingObj;
    }

    render (html) {
        site.insertAdjacentHTML("beforeend", html);
    }

    createRow(content) {
        return `<div class="row">${content}</div>`;
    }
    
    createColumn(content) {
        return `<div class="col-sm">${content}</div>`;
    }
}



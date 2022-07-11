export {createRow, createColumn, createImg}

function createRow(content) {
    return `<div class="row">${content}</div>`;
}

function createColumn(content) {
    return `<div class="col-sm">${content}</div>`;
}
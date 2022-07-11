export {templates};
import {createRow, createColumn} from './utilities';

const templates = {
    title,
    text,
    column,
    image
}

function title(block) {
    return createRow(createColumn(`${block.value}`));
}

function text(block) {
    return createRow(createColumn(`${block.value}`));
}

function column(block) {
    let html = "";  
    html = block.value.map(element => createColumn(`${element}`))

    return createRow(`${html.join("")}`);
}

function image(block) {
    return createRow(`<img src="../images/index.jpg" alt="img"/>`)
}
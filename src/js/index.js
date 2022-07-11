import {model} from './model.js';
import {templates} from './templates';
import '../css/main.css';

// $ - element that is from DOM

const $site = document.querySelector("#site");

model.forEach(block => {
    let html = "";
    
    html = templates[block.type];

    if(html) $site.insertAdjacentHTML("beforeend", html(block));
});
import appObj from './utilities';
import '../css/main.css';
import showTitle from './title'

let $titleElem = document.querySelector('.panel-title');
let selectTag;

$titleElem.addEventListener('click', (e) => {
    if(e.target.localName != "div") selectTag = e.target.localName;
});

document.querySelector("#form-title").addEventListener("submit", (e) => {
    e.preventDefault();

    appObj.createElement(appObj.settingObj(e.target, selectTag));
});

showTitle();
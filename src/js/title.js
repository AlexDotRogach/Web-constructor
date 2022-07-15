let $selectElem = document.querySelector('.form-select');
let $titleElem = document.querySelector('.panel-title');

//title level
function showTitle(select, panel) {
    select.addEventListener("click", (e) => {
        if(e.target.tagName == "OPTION") {
            if(e.target.value == "title") {
                panel.classList.toggle("panel-title_active");
            } else {
                panel.classList.remove("panel-title_active");
            }
        }
    });   
}

export default showTitle($selectElem, $titleElem);
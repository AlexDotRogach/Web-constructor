import { Title } from "./class/Title";
import { Text } from "./class/Text";
import { Img } from "./class/Img";

const appObj = {
    settingObj: (form, titleTag = "h1") => {
        let inputValues = [];
        let settingObj = {};

        Array.from(form.querySelectorAll("[data-value='true']")).forEach(item => inputValues.push(item));

        inputValues = inputValues.filter((item) => {
            if (!item.classList.contains("form-check-input"))
                return item.value;
            if (item.checked)
                return item.value;
        });

        inputValues.forEach(item => {
            settingObj[item.labels[0].textContent ? item.labels[0].textContent.toLowerCase() : "position"] = item.value;
        });

        if (!settingObj.style)
            settingObj.style = "";
        if (!settingObj.text)
            settingObj.text = "Nothing";
        
        if(settingObj.type == "title")
            settingObj.title = titleTag
        
        return settingObj;
    },
    createElement: function(settingObj) {
        let typeElement = settingObj.type;
        settingObj = setObjPosition(settingObj, typeElement);

        const model = {
            title: new Title(settingObj, settingObj.title),
            text: new Text(settingObj),
            img: new Img(settingObj)
        };

        switch(typeElement) {
            case "title":
            model[typeElement].createTitle();
            break;
            case "text":
            model[typeElement].createText();
            break;
            case "img":
            model[typeElement].createImg();
            break;
            default:
            console.log("element don`t exist");
        }
    }
}

function setObjPosition(obj, type) {

    if(!obj.position) return obj;

    let container = obj.style;
    let positionSetting = {
        center: "align-self:center",
        right: "align-self:end",
        left: "align-self:start"
    };

    if(type == "title" || type == "text") obj.style = `text-align:${obj.position};`;
    
    if(type == "img") obj.style = `${positionSetting[obj.position]};`;

    obj.style += container;

    return obj;
}

export default appObj

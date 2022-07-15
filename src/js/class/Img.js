import { Block } from "./Block";

export class Img extends Block {
    constructor(settingObj) {
        super(settingObj);
    }

    createImg() {
        super.render(super.createRow(`<img src="${this.settingObj.text}" style="${this.settingObj.style}" alt="${this.settingObj.text} - this source isn\`t correct as path">`));
    }
}

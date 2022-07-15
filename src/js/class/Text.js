import { Block } from "./Block";

export class Text extends Block {
    constructor(settingObj) {
        super(settingObj);
    }

    createText() {
        super.render(super.createRow(super.createColumn(`<div style="${this.settingObj.style}">${this.settingObj.text}</div>`)));
    }
}

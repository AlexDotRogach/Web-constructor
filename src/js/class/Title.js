import { Block } from "./Block";

export class Title extends Block {
    constructor(settingObj) {
        super(settingObj),
        this.title = settingObj.title
    }

    createTitle() {
        super.render(super.createRow(super.createColumn(`<${this.title} style="${this.settingObj.style}">${this.settingObj.text}</${this.title}>`)));
    }
}

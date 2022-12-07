export default class Item {

    static lastId = 0;

    constructor(text, checked) {

        this.id = Item.lastId++;
        this.text = text;
        this.checked = checked;

    }
}
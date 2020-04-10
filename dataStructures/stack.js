class Stack {
    constructor() {
        this.data = []
    };
    peek() {
        if(this.data.length > 0) {
            const peeked = this.data[this.data.length -1];
            delete this.data[this.data.length -1];
            return peeked
        }
    };

    pack(elements) {
        if(typeof elements !== 'object') {
            elements = [elements];
        }
        for( let index = 0; index < elements.length; index++) {
            this.data.push(elements[index])
        }
        return elements
    };

    show() {
        return this.data;
    }
}

export default Stack;

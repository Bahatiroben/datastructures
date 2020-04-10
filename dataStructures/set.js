class Myset{
    constructor(initial) {
        this.collection = initial ? initial : [];
    }

    has(element){
    return this.collection.indexOf(element) !== -1;
    };

    add(element){
        if(this.collection.indexOf(element) !== -1){
            return false
        }
        this.collection.push(element);
        return true;
    };

    size(){
        return this.collection.length;
    }

    elements(){
        return this.collection;
    }

    remove(element) {
        const index = this.collection.indexOf(element);
        if(!this.has(element)){
            return false
        }
        this.collection.splice(index, 1);
        return true;
    };

    union(otherSet) {
        const unionSet = new Myset(otherSet.collection);
        this.collection.forEach(element => {
            unionSet.add(element);
        });
        return unionSet.collection;
    };

    intersection(otherSet) {
        const intersectionSet = new Myset();
        this.collection.forEach(element => {
            if(otherSet.has(element)) {
                intersectionSet.add(element);
            };
        });

        return intersectionSet.collection;
    };

    subset(otherSet) {
        const thisSet = this.collection;
        return thisSet.every(data => otherSet.has(data));
    }
}

module.exports = Myset;

const even = new Myset([2, 4, 6]);
const whole = new Myset([1,2,3,4,5,6]);

console.log(even.subset(whole));

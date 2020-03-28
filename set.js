class Myset{
    constructor(initial) {
        this.collection = initial ? initial : []
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
        return this.collection.length
    }

    elements(){
        return this.collection
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
    }
}

module.exports = Myset;

const evenNumbers = new Myset([2, 4, 6]);
evenNumbers.add(8);
evenNumbers.add(18);
evenNumbers.add(28);
evenNumbers.remove(28);
evenNumbers.remove(999);

const odd = new Myset([1, 3, 9, 11, 2, 4, 6]);
console.log(odd.intersection(evenNumbers));

class Key {
    private readonly signature: string = '';

    constructor() {
        this.signature = Math.random().toString();
    }

    getSignature(): string {
        return this.signature;
    }
}

class Person {
    private readonly key: Key;

    constructor(keyObj: Key) {
        this.key = keyObj;
    }

    getKey(): Key {
        return this.key;
    }
}

abstract class House {
    door: boolean;
    key: Key;
    private tenants: Person[] = [];

    constructor(keyObj: Key, isOpen: boolean = false) {
        this.door = isOpen;
        this.key = keyObj;
    }

    comeIn(person: Person): void {
        if (this.door) {
            this.tenants.push(person);
            console.log('Welcome newcomer!');
        }
    }

    abstract openDoor(key: Key): void;
}

class MyHouse extends House{
    constructor(key: Key) {
        super(key);
    }

    openDoor(key: Key): void {
        if (this.key.getSignature() === key.getSignature()) {
            this.door = true;
            console.log('Door is open, come in!')
        } else {
            console.log('Nope, wrong key!')
        }
    }
}


const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};

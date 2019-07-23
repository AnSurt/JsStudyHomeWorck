'use strict';
///// Hamburger
class Hamburger {
    price = 0;
    calories = 0;
    constructor(size) {
        this.allowedSauce = ['SAUCE_MAYO', 'SAUCE_MUSTARD'];
        this.checkSize(size);
    }
    /// Method check size
    checkSize(size) {
        try {
            if (size === Hamburger.SIZE_BIG || size === Hamburger.SIZE_SMALL) {
                this.size = size;
                this.price += size.price;
                this.calories += size.calories;
            } else { throw new Error("uncorrect size"); }
        } catch (e) {
            console.log(e.message)
        }
    }
    ////// Static fields

    static sizeSmall = {
        price: 30,
        calories: 200,
    }

    static get SIZE_SMALL() {
        return this.sizeSmall;
    }
    static sizeBig = {
        price: 50,
        calories: 320,
    }
    static get SIZE_BIG() {
        return this.sizeBig;
    }
    static sauceMayo = {
        name: 'SAUCE_MAYO',
        price: 5,
        calories: 30,
    }
    static get SAUCE_MAYO() {
        return this.sauceMayo;
    }
    static sauceMustard = {
        name: 'SAUCE_MAYO',
        price: 5,
        calories: 35,
    }
    static get SAUCE_MUSTARD() {
        return this.sauceMustard;
    }
    ////method addSauce
    addSauce(value) {
        try {
            if (this.allowedSauce.includes(value.name)) {
                this.price += value.price;
                this.calories += value.calories;
            } else { throw new Error("uncorrect sauce"); }
        } catch (e) {
            console.log(e.message)
        }
    }
    ////method removeSauce 
    removeSauce(value) {
        try {
            if (this.allowedSauce.includes(value.name)) {
                this.price -= value.price;
                this.calories -= value.calories;
            } else { throw new Error("uncorrect sauce remove"); }
        } catch (e) {
            console.log(e.message)
        }
    }
    getPrice() {
        return this.price;
    }


    getCalories() {
        return this.calories;
    }
}
/////Chesburger child hamburger

class Cheeseburger extends Hamburger {
    constructor(size) {
        super(size);
        this.allowedSauce = ['SAUCE_MAYO', 'SAUCE_MUSTARD', 'SAUCE_TARTAR'];
    }

    checkSize(size) {

        try {
            if (size === Cheeseburger.SIZE_BIG || size === Cheeseburger.SIZE_SMALL) {
                this.size = size;
                this.price += size.price;
                this.calories += size.calories;
            } else { throw new Error("uncorrect size "); }
        } catch (e) {
            console.log(e.message)
        }
    }
    static sizeSmall = {
        price: 40,
        calories: 250,
    }

    static get SIZE_SMALL() {
        return this.sizeSmall
    }
    static sizeBig = {
        price: 70,
        calories: 400
    }

    static get SIZE_BIG() {
        return this.sizeBig;
    }
    static sauceTartar = {
        name: 'SAUCE_TARTAR',
        price: 7,
        calories: 37
    }

    static get SAUCE_TARTAR() {
        return this.sauceTartar;
    }

    addSauce(value) {
        try {
            if (this.allowedSauce.includes(value.name)) {
                this.price += value.price;
                this.calories += value.calories;
            } else { throw new Error("uncorrect sauce "); }
        } catch (e) {
            console.log(e.message)
        }
    }
    removeSauce(value) {
        try {
            if (this.allowedSauce.includes(value.name)) {
                this.price -= value.price;
                this.calories -= value.calories;
            } else { throw new Error("uncorrect sauce remove"); }
        } catch (e) {
            console.log(e.message)
        }
    }
}

// HomeTask 
const burger1 = new Hamburger(Hamburger.SIZE_SMALL);
burger1.addSauce(Hamburger.SAUCE_MAYO);
burger1.addSauce(Hamburger.SAUCE_MUSTARD);

console.log(burger1.getPrice()) // -> 40

burger1.removeSauce(Hamburger.SAUCE_MAYO);

burger1.getPrice() // -> 35
console.log(burger1.getCalories()) // -> 235

const burger2 = new Cheeseburger(Cheeseburger.SIZE_BIG);
burger2.addSauce(Cheeseburger.SAUCE_TARTAR);

console.log(burger2.getPrice()) // -> 77
console.log(burger2.getCalories()) // -> 437
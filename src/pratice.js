class Person {
    name ;
    constructor({name}){
        this.name = name
    }
    introduceYourself (){
        console.log(`Hello I am ${this.name}`)
    }
}


const Wwh = new Person();
Wwh.introduceYourself("win win htet");
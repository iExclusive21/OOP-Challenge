const Employee = require('./Employee');

class Intern extends Employee{
    constructor(name, id, email){
        //instad of rewriting these functions, super calls these functions again 
        super(name, id, email);
    }
    getRole(){
        return "Intern";
    }
}
module.exports = Manager
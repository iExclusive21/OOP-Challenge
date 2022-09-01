const Employee = require('./Employee');

class Manager extends Employee{
    constructor(name, id, email){
        //instad of rewriting these functions, super calls these functions again 
        super(name, id, email);
    }
    getRole(){
        return "Manager";
    }
}
module.exports = Manager
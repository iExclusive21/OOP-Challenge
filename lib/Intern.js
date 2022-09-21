const Employee = require('./Employee');

const Employee = require('./Employee')

class Intern extends Employee{
    constructor(name, id, email, college){
        //instad of rewriting these functions, super calls these functions again 
        const role = 'Intern'
        super(name, id, email);
        this.college = college;
        this.role = role;
    }
    getCollege(){
        return this.college;
    }
    getRole(){
        return this.role;
    }
}
module.exports = Intern;
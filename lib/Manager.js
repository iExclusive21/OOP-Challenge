const employee = require('./Employee');

class Manager extends employee{
    constructor(name, id, email, officeNumber){
        //instad of rewriting these functions, super calls these functions again 
        // const role = 'Manager'
        super(name, id, email);
        this.officeNumber = officeNumber;
        // this.role = role;
    }
    getOfficeNumber(){
        return this.officeNumber
    }
    getRole(){
        return "Manager";
    }
}
module.exports = Manager; 
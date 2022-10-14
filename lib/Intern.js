const Employee = require('./Employee');

const employee = require('./Employee')

class Intern extends employee{
    constructor(name, id, email, college){
        super(name, id, email);
        this.college = college;
    }
    getCollege(){
        return this.college;
    }
    getRole(){
        return 'Intern';
    }
}
module.exports = Intern;
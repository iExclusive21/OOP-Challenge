const employee = require('./Employee');

class Engineer extends employee{
    constructor(name, id, email,github){
        const role = 'Engineer'
        //instad of rewriting these functions, super calls these functions again 
        super(name, id, email);
        this.github = github;
        this.role = role;
    }
    getGithub(){
        return this.github;
    }
    getRole(){
        return this.role;
    }
}

module.exports = Engineer;
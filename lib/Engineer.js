const employee = require('./Employee');

class Engineer extends employee{
    constructor(name, id, email,github){
        //instad of rewriting these functions, super calls these functions again 
        super(name, id, email);
        this.github = github;
    }
    getGithub(){
        return this.github;
    }
    getRole(){
        return 'Engineer';
    }
}

module.exports = Engineer;
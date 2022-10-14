const generateWebsite = (team) => {
    const createManager = (manager) => {
        return `     
        <div class="titleCard1">
        <div class="cardHead">
            <h2>${manager.getName()}</h2>
            <div class="Manager">Manager</div>
        </div>
        <div class="midBox">
            <div class="row1">ID:${manager.getId()}></div>
            <div class="row2">Email: ${manager.getEmail()}></div>
            <div class="row3">Office Number: ${manager.getOfficeNumber()}</div>
        </div>
    </div>
        `;
    };

    const createEngineer = (engineer) => {
        return `
        <div class="titleCard1">
        <div class="cardHead">
            <h2>${engineer.getName()}</h2>
            <div class="Manager">Manager</div>
        </div>
        <div class="midBox">
            <div class="row1">ID:${engineer.getId()}></div>
            <div class="row2">Email: ${engineer.getEmail()}></div>
            <div class="row3">Office Number: ${engineer.getOfficeNumber()}</div>
        </div>
    </div>
        `;
    }
    const createIntern = (intern) => {
        return `
        <div class="titleCard1">
        <div class="cardHead">
            <h2>${intern.getName()}</h2>
            <div class="Manager">Manager</div>
        </div>
        <div class="midBox">
            <div class="row1">ID:${intern.getId()}></div>
            <div class="row2">Email: ${intern.getEmail()}></div>
            <div class="row3">Office Number: ${intern.getOfficeNumber()}</div>
        </div>
    </div>
        `;
    }


    
}


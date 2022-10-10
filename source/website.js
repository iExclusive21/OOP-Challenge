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
        `
    }
}
const path = require('path');
const fs = require('fs');

const htmlTemps = path.resolve(__dirname, '../templates');

// function to create out html depending on which employee was selected
const Employees = employees => {
    const createHTML = []

    createHTML.push(employee.filter (employee.getRole() == 'Manager').map(manager => createManager(manager)));
    createHTML.push(employee.filter (employee.getRole() == 'Intern').map(intern => createManager(intern)));
    createHTML.push(employee.filter (employee.getRole() == 'Engineer').map(engineer => createManager(engineer)));
    
    return mainHtml(htmlTemps.flat().join(""));
};

// function inserts information set by user and inputed into placeholders in the html template
const createManager = manager => {
    var temp = fs.readFile(path.resolve(htmlTemps, 'manager.html'));
    temp = insertInfo(template, 'name', manager.getName());
    temp = insertInfo(template, 'role', manager.getRole());
    temp = insertInfo(template, 'email', manager.getEmail());
    temp = insertInfo(template, 'id', manager.getId());
    temp = insertInfo(template, 'officeNumber', manager.getofficeNumber());
}
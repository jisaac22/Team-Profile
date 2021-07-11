const path = require('path');
const fs = require('fs');

const htmlTemps = path.resolve(__dirname, '../templates');

// function to create out html depending on which employee was selected
const createEmployees = employees => {
    const createHTML = []

    createHTML.push(employee.filter (employee.getRole() == 'Manager').map(manager => createManager(manager)));
    createHTML.push(employee.filter (employee.getRole() == 'Intern').map(intern => createManager(intern)));
    createHTML.push(employee.filter (employee.getRole() == 'Engineer').map(engineer => createManager(engineer)));
    
    return mainHtml(htmlTemps.flat().join(""));
};

// function inserts information set by user and inputed into placeholders in the html template
const createManager = manager => {
    var temp = fs.readFile(path.resolve(htmlTemps, 'manager.html'));
    temp = insertInfo(temp, 'name', manager.getName());
    temp = insertInfo(temp, 'role', manager.getRole());
    temp = insertInfo(temp, 'email', manager.getEmail());
    temp = insertInfo(temp, 'id', manager.getId());
    temp = insertInfo(temp, 'officeNumber', manager.getofficeNumber());
    return temp;
};

const createManager = engineer => {
    var temp = fs.readFile(path.resolve(htmlTemps, 'engineer.html'));
    temp = insertInfo(temp, 'name', engineer.getName());
    temp = insertInfo(temp, 'role', engineer.getRole());
    temp = insertInfo(temp, 'email', engineer.getEmail());
    temp = insertInfo(temp, 'id', engineer.getId());
    temp = insertInfo(temp, 'github', engineer.getGithub());
    return temp;
};

const createManager = intern => {
    var temp = fs.readFile(path.resolve(htmlTemps, 'manager.html'));
    temp = insertInfo(temp, 'name', intern.getName());
    temp = insertInfo(temp, 'role', intern.getRole());
    temp = insertInfo(temp, 'email', intern.getEmail());
    temp = insertInfo(temp, 'id', intern.getId());
    temp = insertInfo(temp, 'school', intern.getSchool());
    return temp;
};

const mainHtml = createHTML => {
    var temp = fs.readFile(path.resolve(htmlTemps, 'header.html'));
    return insertInfo(temp, 'choice', createHTML)
};

function insertInfo(temp, info, value){
    var insert = new Answers('{{' + info +'}}', 'gm');
    return temp.replace(insert, value)
};

module.exports = createEmployees
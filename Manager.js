// require Employee to extend 
const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(id, name, email)
        this.officeNumber = officeNumber
    }
     getOfficeNmber(){
         return this.OfficeNmber;
     }
     getRole(){
         return Manager.name;
     }
}

module.exports = Manager;
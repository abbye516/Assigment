//This class will generate a  new employee
class Employee {
  constructor(id, importance, subordinatesArray) {
    this.id = id;
    this.importance = importance;
    this.subordinatesArray = subordinatesArray;
  }
}
//the solution class receives the array of all employees, and a given employee, and will return the given employees importance.
class Solution {
  constructor(companyArray, employeeId) {
    this.companyArray = companyArray;
    this.employeeId = employeeId;
  }
  getImportance(companyArray, employeeId) {
    this.findGivenIdAndSubordinates(companyArray, employeeId);
  }

  //find the given id in the array of all company eployees and get its importance value and its subordinate employees
  findGivenIdAndSubordinates(companyArray, givenEmployeeId) {
    let subordiateEmployeesArray;
    let givenEmployeesImportance;
    let totalImportance;
    for (let employee of companyArray) {
      if (givenEmployeeId === employee.id) {
        //add in an if statement where the array is empty
        subordiateEmployeesArray = employee.subordinatesArray;
        givenEmployeesImportance = employee.importance;
      
        console.log(`found ${givenEmployeeId}`);
        let subordinateEmployeesValue = this.calculateSubEmployeesImportance(
          subordiateEmployeesArray,
          companyArray
        );
        totalImportance = this.calculateTotalImportance(
          subordinateEmployeesValue,
          givenEmployeesImportance
        );
        console.log(`total importance: ${totalImportance}`);
        return;
      }
    }
    console.log(`Employee with an Id of ${givenEmployeeId} does not exist in the company`)
    return
}
//get the total importance value of the given employee's subordinate employees
  calculateSubEmployeesImportance(subordinatesArr, companyArray) {
    let totalImportance = 0;
    for (let subEmployee of subordinatesArr) {
      for (let employee of companyArray) {
        if (subEmployee === employee.id) {
    
          totalImportance += employee.importance;
        }
      }
    }
    return totalImportance;
  }
  calculateTotalImportance(subEmployeesValue, givenEmployeeValue) {
    return subEmployeesValue + givenEmployeeValue;
  }
}

let companyArray = [];
let solution = new Solution();

//Test cases:

//Testing when the given employee exists in the company array
// let e1 = new Employee(1, 5, [2, 3]);
// let e2 = new Employee(2, 2, [3]);
// let e3 = new Employee(3, 1, []);
// let e4 = new Employee(4, 5, [3]);

// companyArray.push(e1, e2, e3, e4);

// solution.getImportance(companyArray, 1);
// console.log(companyArray)

//-------------------------------------------//

//Testing when the given employee does not exist in the company

// let e1 = new Employee(1, 4, [2, 3, 4]);
// let e2 = new Employee(2, 3, [3, 3]);
// let e3 = new Employee(3, 2, [2]);
// let e4 = new Employee(4, 1, [2, 4]);

// companyArray.push(e1, e2, e3, e4);
// solution.getImportance(companyArray, 6);

//-------------------------------------------//
//Testing when the subordinate employees array is empty

let e1 = new Employee(1, 4, []);
let e2 = new Employee(2, 3, []);
let e3 = new Employee(3, 2, [2]);
let e4 = new Employee(4, 1, [2, 4]);

companyArray.push(e1, e2, e3, e4);

solution.getImportance(companyArray, 1);

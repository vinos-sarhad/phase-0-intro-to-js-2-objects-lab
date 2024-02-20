// Write your solution in this file!
let employee={
    name :"Sam",
    streetAddress :"11 Broadway"
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    return {
        ...employee,
        [key]: value // Update or add the specified key-value pair
      };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    
    employee[key] = value;
  
     
    return employee;
  }
  function  deleteFromEmployeeByKey(employee, key) {
    // Create a shallow copy of the employee object using the spread operator
    let clonedEmployee = { ...employee };
  
    // Delete the specified key from the cloned employee object
    delete clonedEmployee[key];
  
    // Return the new employee object without the specified key
    return clonedEmployee;
  }

 

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    // Delete the specified key from the original employee object
    delete employee[key];
  
    // Return the modified employee object (although not necessary)
    return employee;
  }
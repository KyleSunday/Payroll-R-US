// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function () {
  // Get user input to create and return an array of employee objects
  let employeesArray = [];
  let continuePrompt = true;
   
   while(continuePrompt) {

    let firstName = prompt("Enter Employee first name", "firstName");
    let lastName = prompt("Enter Employee last name", "lastName");
    let salary = prompt("Enter Employee salary", "salary");
      
  if (isNaN(salary)){
        salary = prompt("Please enter a valid salary amount", "salary");
        if (isNaN(salary)){
          salary = 0;
        let sum = 0;
 employeesArray.forEach(employeeData => {
  sum += Number(employeeData.salary);
 });
  // Calculate the average salary
   let average = sum / employeesArray.length;

  console.log(`The average salary of all employees is: ${average}`);
}
        }
      }
      
    const employeeInfo = {firstName, lastName, salary};
    employeesArray.push(employeeInfo);

    continuePrompt = confirm("Would you like to add more employees?");
   }

   return employeesArray;



// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // Calculate and display the average salary
  let sum = 0;
 employeesArray.forEach(employeeData => {
  sum += Number(employeeData.salary);
 });
  // Calculate the average salary
   let average = sum / employeesArray.length;

  console.log(`The average salary of all employees is: ${average}`);
}
 

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // Select and display a random employee
  let randomEmployee = Math.floor(Math.random() * employeesArray.length);
 
  const winner = employeesArray[randomEmployee];

  console.log(`Congratulations to: ${winner.firstName} ${winner.lastName} our random drawing winner!`);


 
}






/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);

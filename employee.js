function updateEmployeeList() {
  const employeeList = document.querySelector("#employee-list");
  const employees = store.getState().employee.list;
  console.log("Employees:", employees);
  employeeList.innerHTML = employees
    .map((emp) => `<li>${emp.name}</li>`)
    .join("");
}

store.subscribe(updateEmployeeList);

// Initial update
updateEmployeeList();

// You can now dispatch actions to add employees
// For example:
store.dispatch(employeeActions.addEmployee({ name: "John Doe" }));

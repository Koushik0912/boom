const employeeForm = document.getElementById("employeeForm");
const employeeList = document.getElementById("list");

employeeForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const salary = document.getElementById("salary").value;

    // Basic validation
    if (name === "" || email === "" || salary === "") {
        alert("All fields are required");
        return;
    }

    const listItem = document.createElement("li");
    listItem.innerHTML = `<strong>${name}</strong> (${email}) - Salary: $${salary}`;
    employeeList.appendChild(listItem);

    // Clear form fields
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("salary").value = "";
});

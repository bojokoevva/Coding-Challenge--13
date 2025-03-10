// Task 2: Adding Employee Cards Dynamically

let cnt = 0; // Counter to generate unique IDs for each employee card

// Function to create and add employee card to the container
function createEmployeeCard(name, position) {
    const employeeContainer = document.getElementById("employeeContainer"); // Finding employee container by id
    
    let card = document.createElement("div"); // Create a div for the employee card
    card.setAttribute("class", "employeeCard"); // Set class for styling
    card.setAttribute("id", `employee${cnt}`); // Assign a unique ID to each card

    // Insert the employee's name and position inside the card
    card.innerHTML = `<h3>${name}</h3><p>${position}</p>`;

    // Create a "Remove" button to delete the card
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Remove Employee";

    // Attach event listener for the "Remove" button to remove the card from the container
    deleteBtn.addEventListener("click", (event) => {
        employeeContainer.removeChild(card); // Remove the card
        event.stopPropagation(); // Prevent event bubbling
    });

    card.appendChild(deleteBtn); // Add the "Remove" button to the card

    employeeContainer.appendChild(card); // Append the card to the container
    cnt++; // Increment counter for the next unique card ID
}

// Task 2: Test Cases for Creating Employee Cards
createEmployeeCard("John Doe", "Software Engineer"); // Test adding a new employee card
createEmployeeCard("Jane Smith", "Data Analyst");
createEmployeeCard("Sam Johnson", "Project Manager");

// Task 3: Converting NodeLists to Arrays for Bulk Updates

function bulkUpdateEmployeeCards() {
    const employeeCardNodeList = document.querySelectorAll(".employeeCard"); // Select all employee cards using querySelectorAll
    const employeeCardArray = Array.from(employeeCardNodeList); // Convert NodeList to an array using Array.from

    // Use forEach to update styles for each card
    employeeCardArray.forEach(card => {
        card.style.backgroundColor = "lightgray"; // Change the background color
        card.style.border = "2px solid black"; // Add a border to each card
    });
}

// Apply bulk update 
bulkUpdateEmployeeCards();


// Nama   : Billy
// NIM    : 122140004
// Kelas  : Pemrograman Web - RA (UAS)

function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
  let nameEQ = name + "=";
  let ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

function eraseCookie(name) {
  console.log("Deleting cookie: " + name);
  document.cookie = name + "=; Max-Age=-99999999; path=/";
}

function saveToLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function getFromLocalStorage(key) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
}

function removeFromLocalStorage(key) {
  localStorage.removeItem(key);
}

document
  .getElementById("studentForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const age = document.getElementById("age").value.trim();
    const gender = document.querySelector(
      'input[name="gender"]:checked'
    )?.value;
    const academicProgram = document
      .getElementById("academicProgram")
      .value.trim();
    const university = document.getElementById("university").value.trim();
    const terms = document.getElementById("terms").checked;

    const studentId = document.getElementById("studentId")?.value || null;

    let hasError = false;

    document
      .querySelectorAll("small")
      .forEach((small) => (small.textContent = ""));

    // Validate fields
    if (!name || name.length < 3) {
      document.getElementById("nameError").textContent =
        "Name must be at least 3 characters.";
      hasError = true;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailPattern.test(email)) {
      document.getElementById("emailError").textContent =
        "Valid email is required (must contain @).";
      hasError = true;
    }

    if (!age || isNaN(age) || parseInt(age) < 18) {
      document.getElementById("ageError").textContent =
        "Valid age is required (must be a number 18 or greater).";
      hasError = true;
    }

    if (!gender) {
      document.getElementById("genderError").textContent =
        "Gender is required.";
      hasError = true;
    }

    if (!academicProgram || !/^[a-zA-Z\s]+$/.test(academicProgram)) {
      document.getElementById("academicProgramError").textContent =
        "Academic Program must only contain letters.";
      hasError = true;
    }

    if (!university || !/^[a-zA-Z\s]+$/.test(university)) {
      document.getElementById("universityError").textContent =
        "University must only contain letters.";
      hasError = true;
    }

    if (!terms) {
      document.getElementById("termsError").textContent =
        "You must agree to the terms.";
      hasError = true;
    } else {
      document.getElementById("termsError").textContent = "";
    }

    if (hasError) {
      return;
    }

    const formData = new FormData(this);

    if (studentId) {
      formData.append("id", studentId);
    }

    // Submit data to the server
    fetch(studentId ? "submit.php?update=true" : "submit.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (!data.success) {
          alert(data.message);
        } else {
          loadTableData();
          document.getElementById("studentForm").reset();
          if (studentId) {
            document.getElementById("studentId").remove();
          }
          alert(
            studentId
              ? "Data updated successfully!"
              : "Form submitted successfully!"
          );
        }
      })
      .catch((error) => {
        console.error("Error submitting data:", error);
        alert("Failed to communicate with the server. Please try again later.");
      });
  });

// Validation for Name field
document.getElementById("name").addEventListener("keyup", function () {
  const nameError = document.getElementById("nameError");
  const namePattern = /^[a-zA-Z\s]*$/;

  if (!this.value.trim()) {
    nameError.textContent = "Name is required.";
  } else if (!namePattern.test(this.value.trim())) {
    nameError.textContent = "Name must only contain letters (A-Z or a-z).";
  } else if (this.value.trim().length < 3) {
    nameError.textContent = "Name must be at least 3 characters.";
  } else {
    nameError.textContent = "";
  }
});

// Validation for Email field
document.getElementById("email").addEventListener("blur", function () {
  const emailError = document.getElementById("emailError");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!this.value.trim()) {
    emailError.textContent = "Email is required.";
  } else if (!emailPattern.test(this.value.trim())) {
    emailError.textContent =
      "Valid email is required (must contain @ and a valid domain).";
  } else {
    emailError.textContent = "";
  }
});

// Validation for Age field
document.getElementById("age").addEventListener("blur", function () {
  const ageError = document.getElementById("ageError");
  const ageValue = parseInt(this.value.trim());

  if (!this.value.trim()) {
    ageError.textContent = "Age is required.";
  } else if (isNaN(ageValue) || ageValue < 18) {
    ageError.textContent =
      "Valid age is required (must be a number 18 or greater).";
  } else {
    ageError.textContent = "";
  }
});

// Load student data into the table
function loadTableData() {
  fetch("submit.php?fetch=true")
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        const tableBody = document.querySelector("#studentTable tbody");
        tableBody.innerHTML = ""; // Clear existing data

        data.data.forEach((row, index) => {
          const newRow = tableBody.insertRow();
          const rowData = [
            index + 1,
            row.name,
            row.email,
            row.age,
            row.gender,
            row.academic_program,
            row.university,
          ];

          rowData.forEach((cellData) => {
            const cell = newRow.insertCell();
            cell.textContent = cellData;
          });

          const actionCell = newRow.insertCell();
          actionCell.innerHTML = `<button onclick="deleteStudent(${row.id})">Delete</button>`;
        });
      }
    })
    .catch((error) => console.error("Error loading data:", error));
}

// Delete student data
function deleteStudent(id) {
  if (confirm("Are you sure you want to delete this student?")) {
    fetch("submit.php", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `action=delete&id=${id}`,
    })
      .then((response) => response.json())
      .then((data) => {
        alert(data.message);
        if (data.success) {
          loadTableData();
        }
      })
      .catch((error) => console.error("Error deleting data:", error));
  }
}

// Save form data to localStorage
function saveFormData() {
  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    age: document.getElementById("age").value,
    gender: document.querySelector('input[name="gender"]:checked')?.value,
    academicProgram: document.getElementById("academicProgram").value,
    university: document.getElementById("university").value,
    terms: document.getElementById("terms").checked,
  };
  localStorage.setItem("studentFormData", JSON.stringify(formData));
}

// Load form data from localStorage
function loadFormData() {
  const formData = JSON.parse(localStorage.getItem("studentFormData"));
  if (formData) {
    document.getElementById("name").value = formData.name || "";
    document.getElementById("email").value = formData.email || "";
    document.getElementById("age").value = formData.age || "";
    if (formData.gender) {
      document.querySelector(
        `input[name="gender"][value="${formData.gender}"]`
      ).checked = true;
    }
    document.getElementById("academicProgram").value =
      formData.academicProgram || "";
    document.getElementById("university").value = formData.university || "";
    document.getElementById("terms").checked = formData.terms || false;
  }
}

// Add event listener for form input to save data to localStorage
document.getElementById("studentForm").addEventListener("input", saveFormData);

// Load data when the page is ready
window.addEventListener("DOMContentLoaded", () => {
  loadTableData();
  loadFormData();
});

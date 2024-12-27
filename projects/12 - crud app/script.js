//-1 Validation

// $().ready(function() {
//     $("#studentForm").validate({
//         rules: {
//             inputFirstName: {
//                 required: true,
//                 minlength: 2
//             },
//             inputEmail: {
//                 required: true,
//                 minlength: 5,
//             },
//             inputContact: {
//                 required: true,
//                 minlength: 2
//             },
//             inputPassword: {
//                 required: true
//             }
//         },
//         messages: {
            
//         }
//     });
// });

//-------------------------------------------------------

//-2 create Functionality

//2.1 - get all the inputValues from the form
let studentForm = document.getElementById("studentForm");
let userid = document.getElementById("userid")
let firstName = document.getElementById("inputFirstName");
let lastName = document.getElementById("inputLastName");
let email = document.getElementById("inputEmail");
let contact = document.getElementById("inputContact");
let password = document.getElementById("inputPassword");
let submitBtn = document.getElementById("submitBtn");
let studentTableBody = document.getElementById("studentTableBody")
let badge = document.getElementById("cartCountBadge")
let selectedStudents = []

let getStudentData = ()=>{
    let rec = JSON.parse(localStorage.getItem("StudentsData")) || []
    return rec
}

let studentsArray = getStudentData()



function createStudent(event) {
    event.preventDefault(); // Prevent default form submission

    // Check if the form is valid (uncomment this if using jQuery validation)
    // if (!$("#studentForm").valid()) {
    //     return; // Exit if validation fails
    // }

    if (isEdit) {
        // Update an existing student
        let updatedStudent = {
            id: parseInt(userid.value), // Ensure `id` is a number
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            contact: contact.value,
            password: password.value
        };

        // Update the specific student in the array
        studentsArray = studentsArray.map((studentObject) => {
            if (studentObject.id === updatedStudent.id) {
                return updatedStudent; // Replace the matching student
            }
            return studentObject; // Keep other students unchanged
        });

        // Save the updated array to localStorage
        localStorage.setItem("StudentsData", JSON.stringify(studentsArray));

        // Reset `isEdit` and form
        isEdit = false;
        studentForm.reset();
        userid.value = ""; // Clear hidden input

        // Refresh the displayed student data
        viewStudentsData();
        return; // Exit the function to prevent creating a new entry
    }

    // Create a new student if not in "edit mode"
    let student = {
        id: studentsArray.length + 1, // Generate a new ID
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        contact: contact.value,
        password: password.value,
    };

    // Add the student to the array
    studentsArray.push(student);

    // Save the updated array to localStorage
    localStorage.setItem("StudentsData", JSON.stringify(studentsArray));

    // Refresh the displayed student data
    viewStudentsData();

    // Reset the form
    studentForm.reset();
}

    


//-4 handleEdit 

let isEdit = false;

function handleEdit(id) {
    let student = studentsArray.find((student) => student.id === id); // Find by id
    if (!student) return; // Safety check

    // Populate the form with student data
    userid.value = student.id; // Set hidden `id` input
    firstName.value = student.firstName;
    lastName.value = student.lastName;
    email.value = student.email;
    contact.value = student.contact;
    password.value = student.password;

    isEdit = true; // Set edit mode
}

//-5 handleDelete
function handleDelete(id) {
    // let studentToDelete = studentsArray.find((stuObj)=>{
    //    if(stuObj.id === id){
    //     return stuObj;
    //    }
    // }) 
    // console.log(studentToDelete) 
    
    studentsArray = studentsArray.filter((student) => student.id !== id);
    // console.log(remainingStudentsToKeep)

    localStorage.setItem("StudentsData", JSON.stringify(studentsArray));
    viewStudentsData()
}

//-6 handleCart

function handleCart(id){
    //-1 get all students
    let record = getStudentData()
    // console.log(record)
    let singleRec = record.find((student) => {
        return student.id == id
    })
    // console.log(singleRec)
    
    // 

    let isExsit = selectedStudents.find((student) => {
        return student.id == id
    })

    if (!isExsit) {
        singleRec.qty = 1; // Add quantity property for the first time
        selectedStudents.push(singleRec); // Push to cart
        console.log("New student added, qty set to:", singleRec.qty);
    } else {
        isExsit.qty += 1; // Increment quantity for existing student
        console.log("Student already in cart, updated qty:", isExsit.qty);
    }
    
   //add the selectedStudents to the localStorage

   localStorage.setItem("SelectedStudentsRecord",JSON.stringify(selectedStudents))
//    console.log("selected students array saved to local storage", " ", selectedStudents)

    badge.innerHTML = selectedStudents.length
}

//-3 View functionality
function viewStudentsData() {
    studentTableBody.innerHTML = ""; // Clear table to prevent duplicate data

    studentsArray.forEach((student) => {
        studentTableBody.innerHTML += `<tr>
                <th>${student.firstName}</th>
                <td>${student.lastName}</td>
                <td>${student.contact}</td>
                <td>${student.email}</td>
                <td>${student.password}</td>
                <td>
                    <button class="btn btn-primary" onclick="handleEdit(${student.id})">Edit</button> ||
                    <button class="btn btn-danger" onclick="handleDelete(${student.id})">Delete</button> ||
                    <button class="btn btn-info" onclick="handleCart(${student.id})">Select</button>
                </td>
              </tr>`;
    });
}


viewStudentsData()

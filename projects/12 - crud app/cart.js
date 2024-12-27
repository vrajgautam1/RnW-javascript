let stdTable = document.getElementById("stdTable")

// console.log(stdTable)

function getStudentData(){
    let rec = JSON.parse(localStorage.getItem("SelectedStudentsRecord"))
    return rec
}
let studentsArray = getStudentData()
console.log(studentsArray)


function incqty(id) {

    let singleRec = studentsArray.find((student) => student.id == id);

    if (singleRec.qty >= 1) {
        singleRec.qty += 1; // Increment the quantity
    }

    // Save the updated array back to localStorage
    localStorage.setItem("SelectedStudentsRecord", JSON.stringify(studentsArray));

    // Refresh the global array and the table
    studentsArray = getStudentData();
    viewCartItems();
}


function decqty(id){

    let singleRec = studentsArray.find((student) => student.id == id);

    if (singleRec.qty > 1) {
        singleRec.qty -= 1; // Increment the quantity
    }

    // Save the updated array back to localStorage
    localStorage.setItem("SelectedStudentsRecord", JSON.stringify(studentsArray));

    // Refresh the global array and the table
    studentsArray = getStudentData();
    viewCartItems();
}

function deleteItem(id){
    studentsArray = studentsArray.filter((student)=>{
        return student.id != id
    })

    localStorage.setItem("SelectedStudentsRecord", JSON.stringify(studentsArray))
    viewCartItems()
}


function viewCartItems() {
    stdTable.innerHTML = ""; // Clear table to prevent duplicate data

    studentsArray.forEach((student) => {
        stdTable.innerHTML += `<tr>
                <td scope="col">${student.id}</td>
                <td scope="col">${student.firstName}</td>
                <td scope="col">${student.contact}</td>
                <td scope="col">${student.email}</td>
                <td scope="col">${student.qty}</td>
                <td scope="col">
                    <button class="btn" onclick="incqty(${student.id})"><i class="bi bi-plus-square-fill text-primary"></i></button>
                    <button class="btn" onclick="decqty(${student.id})"><i class="bi bi-dash-square-fill text-primary"></i></button>
                    <button class="btn" onclick="deleteItem(${student.id})" ><i class="bi bi-trash-fill text-danger"></i></button>
                </td>
              </tr>`;
    });
}


viewCartItems()
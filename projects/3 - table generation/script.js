function generateTable(){
    let tableContainer = document.getElementById("tableContainer") //we get the div for tableContainer in the variable named tableContainer now whatever effects we apply to this variable it will be applied to that div later

    tableContainer.innerHTML = '' //we assume that the table container has something in it. so we empty it

    //now we need the values inside the rows and cols input fields to use them to generate the table

    let rows = parseInt(document.getElementById("tableRows").value)
    let cols = parseInt(document.getElementById("tableColumns").value)

    //validation

    if (rows <= 0) {
        alert("The value of rows cannot be 0 or negative");
        return;
    }

    if (cols <= 0) {
        alert("The value of columns cannot be 0 or negative");
        return;
    }

    //now we need to create a table element and create its rows and cols using the value we got from the input fields

    //we will add this table element in the table container div once it is fully created

    let table = document.createElement('table')
    table.classList.add("table", "table-bordered", "table-striped", "text-center", "bg-secondary-subtle", "p-5", "rounded", "text-secondary")
    
    let n = 1
    for(let i = 0; i < rows; i++){
        let tr = document.createElement('tr')
        for(let j = 0; j < cols; j++){
            let td = document.createElement('td')
            td.innerHTML = `${n}`
            tr.appendChild(td)
            n++;
        }
        table.appendChild(tr)
    }

    tableContainer.appendChild(table)
}

function resetTable(){
    let tableContainer = document.getElementById('tableContainer')
    tableContainer.innerHTML = ''
}
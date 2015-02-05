// Main Controller Code for index.html

function addEntry() {
    // add the new row to the table
    var table = document.getElementById("tableBody");
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);

    row.id = "row" + rowCount;

    // add the name column
    var cell = row.insertCell(0);
    var element = document.createElement("input");

    cell.classList.add("namecolumn");
    element.placeholder = "Enter an item name";
    element.classList.add("fillspace");
    cell.appendChild(element);


    // add the list column
    cell = row.insertCell(1);
    element = document.createElement("input");

    cell.classList.add("listcolumn");
    element.placeholder = "Enter a value for the item";
    element.classList.add("fillspace");
    cell.appendChild(element);


    // add the remove column
    cell = row.insertCell(2);
    element = document.createElement("button");

    cell.classList.add("removecolumn");
    element.addEventListener('click', removeRow);
    element.classList.add("remove");
    element.innerHTML = "Remove";
    cell.appendChild(element);


    // add the complete column
    cell = row.insertCell(3);
    element = document.createElement("button");

    cell.classList.add("completecolumn");
    element.onclick = completeRow;
    element.classList.add("complete");
    element.innerHTML = "Complete";
    cell.appendChild(element);

}

function removeRow() {
    this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
}

function completeRow() {
    var parentNode = this.parentNode.parentNode;
    var childNodes = parentNode.childNodes;

        // change the name input field into a crossed-out label field

    var row = childNodes[0];
    var inputField = row.childNodes[0];
    var labelField = document.createElement("label");
    var text = inputField.value;

    row.removeChild(inputField);
    row.appendChild(labelField);

    labelField.innerText = text;
    labelField.classList.add("crossout");

        // change the value input field into a crossed-out label field
    row = childNodes[1];
    inputField = row.childNodes[0];
    labelField = document.createElement("label");
    text = inputField.value;

    row.removeChild(inputField);
    row.appendChild(labelField);

    labelField.innerText = text;
    labelField.classList.add("crossout");
}

function printTable() {
    // remove header and footer elements from the document
    var header = document.getElementById("projectHeader");
    var footer = document.getElementById("projectFooter");

    header.parentNode.removeChild(header);
    footer.parentNode.removeChild(footer);



    tableData = document.getElementById("tableHeading");

    // todo work more on a nice print format
}

function submitData() {
    var tableData = document.getElementById('tableBody');
    var rows = tableData.children;
    var data = {};

    // build an object with the data name and description
    data.name = document.getElementById('projectName').value;
    data.description = document.getElementById('projectDescription').value;
    data.data = [];

    // read every row's data into the data object
    for(var i=0; i < rows.length; i++) {
        // get the key and value for this row from the table
        var key = rows[i].children[0].children[0].value;
        var value = rows[i].children[0].children[0].value;

        // add this key-value pair to the data object
        data.data.push({key: value});
    }

    // turn my object to json
    data = JSON.stringify( {"data": data} );

    // send a POST request to the server
    $.post('/edit', {"data": data}, function(err) {
        if(err)
            console.log(err);
        else
            console.log("The database was updated successfully.");
    }, "json");

    console.log('breakpoint');
}


// populate the table with one, empty entry
addEntry();





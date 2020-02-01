// click on js ajax btn
$('#js-ajax-btn').click(function() {

    // create AJAX request
    let xhr = new XMLHttpRequest();

    // Prepare the request
    xhr.open('GET','http://api.myjson.com/bins/t6emi',true);

    // send the request
    xhr.send();

    // track it
    xhr.onload = function() {
        // response is ready and success response
        if(xhr.readyState === 4 && xhr.status === 200){
            let data = xhr.responseText;
            let persons = JSON.parse(data);
            displayData(persons);
        }
    }
});

// JQuery Way
$('#jquery-ajax-btn').click(function() {
    $.ajax({
        method : 'GET',
        url : 'https://api.myjson.com/bins/uhk5m',
        dataType : 'json',
        success : function(data) {
            displayData(data); // data is already in array format
        }
    });
});

// display data on table
let displayData = function(persons) {
    let tableBody = $('#table-body');
    let tableRows = '';
    for(let person of persons){
        tableRows += `<tr>
                        <td>${person.id}</td>
                        <td>${person.first_name}</td>
                        <td>${person.last_name}</td>
                        <td>${person.email}</td>
                        <td>${person.gender}</td>
                        <td>${person.ip_address}</td>
                      </tr>`;
    }
    tableBody.empty().append(tableRows);
};

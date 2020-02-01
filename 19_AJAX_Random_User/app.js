// getPersonData
let getPersonData = function(){
    $.ajax({
        url: 'https://randomuser.me/api/',
        dataType: 'json',
        success: function(data) {
            let person = data.results[0];
            displayPerson(person);
        }
    });
};
setInterval(getPersonData,1000);


// display person
let displayPerson = function(person) {
    let newPerson = {
        personImage : person.picture.large,
        name : `${person.name.first} ${person.name.last}`,
        email : person.email,
        age : person.dob.age,
        address : {
            street : person.location.street.name,
            city : person.location.city,
            state : person.location.state
        }
    };

    // creating card
    let card = `<div class="col-md-3">
                    <div class="card text-center mt-4 animated jackInTheBox">
                        <div class="card-body bg-primary text-white">
                            <img src="${newPerson.personImage}" alt="" class="img-fluid rounded-circle img-thumbnail">
                            <h2>${newPerson.name}</h2>
                            <p>${newPerson.email}</p>
                            <p class="lead">${newPerson.age} yrs</p>
                            <ul class="list-group text-dark text-left">
                                <li class="list-group-item">
                                    Street : ${newPerson.address.street}
                                </li>
                                <li class="list-group-item">
                                    City : ${newPerson.address.city}
                                </li>
                                <li class="list-group-item">
                                    State : ${newPerson.address.state}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>`;
    $('#card-row').append(card);
};

// Delete a user

var url = "https://6504267fc8869921ae24976b.mockapi.io/data/v1/User";

var xhr = new XMLHttpRequest();

xhr.open("DELETE", url + '/13', true);

xhr.onload = function() {

    var users = JSON.parse(xhr.responseText);

    if (xhr.readyState == 4 && xhr.status == "200") {

        console.table(users);

    } else {

        console.error(users);

    }

}

xhr.send(null);
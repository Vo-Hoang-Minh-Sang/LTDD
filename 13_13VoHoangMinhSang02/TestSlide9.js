// // Post a user
var url = "https://6504267fc8869921ae24976b.mockapi.io/data/v1/User";
//var url = 'https://my-json-server.typicode.com/typicode/demo/posts';    

var data = {};
data.firstname = "John";
data.lastname = "Snow";
var json = JSON.stringify(data);


var xhr = new XMLHttpRequest();
xhr.open("POST", url, true);
xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
xhr.onload = function () {
    var users = JSON.parse(xhr.responseText);
    if (xhr.readyState == 4 && xhr.status == "201") {
        console.table(users);
    } else {
        console.error(users);
    }
}
xhr.send(json);
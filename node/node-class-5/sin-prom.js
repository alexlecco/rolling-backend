var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function getPosts(success, error) {
    var req = new XMLHttpRequest();
    req.open('GET', 'https://jsonplaceholder.typicode.com/posts');

    req.onload = function() {
        if (req.status == 200) {
            success(JSON.parse(req.responseText));
        }
        else {
            error();
        }
    };

    req.send();
}
    
getPosts(
    function(r) {
        console.log(r)
    },
    function(r) {
        console.log('Ocurrió un error')
    },
)
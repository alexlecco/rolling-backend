var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function getPosts() {
    return new Promise(function(resolve, reject) {
    var req = new XMLHttpRequest();
        req.open('GET', 'https://jsonplaceholder.typicode.com/posts');

        req.onload = function() {
          if (req.status == 200) {
            resolve(JSON.parse(req.responseText));
          }
          else {
            reject();
          }
        };

        req.send();
    })
}

getPosts().then(r =>{
    console.log(r);
  }).catch(() => {
    console.log('Algo salió mal');
  });
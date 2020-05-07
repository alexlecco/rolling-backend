// blocking code
var contents = fs.readFileSync('/etc/hosts');
console.log(contents);
console.log('Doing something else');







// non-blocking code
/*Una función de callback es una función que se pasa a otra función como un argumento, 
que luego se invoca dentro de la función externa (readFileAsync) para completar algún 
tipo de rutina o acción.*/
fs.readFileAsync('/etc/hosts', function(err, contents) {
    console.log(contents);
});
console.log('Doing something else');







// second is same as

var callback = function(err, contents) {
    console.log(contents)
}
fs.readFileAsync('/etc/hosts', callback);










// if we read 2 files at the same time (parallel)
fs.readFile('/etc/hosts', callbacks);
fs.readFile('/etc/inetcfg', callbacks);
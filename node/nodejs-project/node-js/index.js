const server = require('./server');
const router = require('./router');
server.init(router.route);
/*
const params = process.argv.slice(2);
let sum = 0;
for (let i = 0; i < params.length; i++) {
    sum = sum + parseFloat(params[i]);
}
const response = `
 La suma  es ${sum}
`;
console.log(response);
*/
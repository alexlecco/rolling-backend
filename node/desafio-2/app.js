//requires
const fs = require('fs'),
      os = require('os'),
      {sum,res,mul,div} = require('./operations'),
      entry = require('yargs').argv,
      moment = require('moment')

//constants
const dir = './output',
      cpu = os.cpus(),
      cpu_string = JSON.stringify(cpu),
      user = entry.usuario,
      val1 = sum(10,2),
      val2 = res(10,2),
      val3 = mul(10,2),
      val4 = div(10,2),
      timestamp = moment().format('MMMM Do YYYY, h:mm:ss a')

//program
if(!fs.existsSync(dir)) fs.mkdirSync(dir);

fs.writeFileSync('output/salida.txt',
    `operaciones
    suma: ${val1}, resta: ${val2}, multiplicación: ${val3}, división: ${val4}

computadora de: ${user}
    ${cpu_string}

Hora del reporte: ${timestamp}`, function(error) {
    if(error) {
        console.log('Error al crear el archivo')
    }
}) 
const argv1 = require('./config/yargs').argv2
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/miltiplicar'); //si despues de un const o let hay llaves, significa destructuracion

let comando = argv1._[0];

switch (comando) {
    case 'listar':
        console.log('Listando ...');
        listarTabla(argv1.base, argv1.limite)
        break;
    case 'crear':
        console.log('Creando ...');
        crearArchivo(argv1.base, argv1.limite)
            .then(archivo => console.log(`Archivo creado ${archivo}`))
            .catch(error => {
                console.log(error);
            });
        break;
    default:
        console.log('Comando no reconocido');;
}

// let base = 9;
// console.log(process.argv);


// let argv = process.argv;

console.log(argv1);
// console.log(argv);


// let parametro = argvv[2];
// let base = parametro.split('=')[1] //split separa los string en arreglo. lo separará por el =  y tomara el arreglo en la posicion 1


// console.log(base, "jajaja");
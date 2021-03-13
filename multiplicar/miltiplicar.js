const fs = require('fs');
const colors = require('colors');

let data = "";

let listarTabla = (base, limite) => {
    console.log('============='.green);
    console.log(`Tabla de ${base}`.green);
    console.log('============='.green);
    for (let i = 0; i <= limite; i++) {
        console.log(`${base} * ${i} = ` + base * i + '\n');
    }
}


let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) { //si base es diferente a un número
            reject(`el valor ${base} no es un número`)
            return;
        }

        for (let i = 0; i <= limite; i++) {

            data += `${base} * ${i} = ` + base * i + '\n';
        }


        fs.writeFile('tabla.txt', data, (err) => {
            if (err) reject(err)
            else resolve(`tabla-${base}.txt`.yellow);
        });

    })
}

module.exports = {
    crearArchivo: crearArchivo,
    listarTabla: listarTabla
}
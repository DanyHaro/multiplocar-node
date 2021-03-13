const opciones = {
    base: {
        demand: true,
        alias: 'gaa'
    },
    limite: {
        alias: 'li',
        default: 15
    }
}



const argv2 = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opciones) //opciones viene a ser un objeto
    .command('Crear', 'Genera la tabla de multiplicar', opciones)
    .help()
    .argv;

module.exports = {
    argv2
}
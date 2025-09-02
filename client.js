const net = require('net');
const readline = require('readline');
const os = require ('os');

const PORT = 5000;
const HOST = '10.91.236.143';

const client = new net.Socket();

const rl = readline.createInterfaxe({
      input: process.stdin,
      output: process.stdout
});

function perguntar (){
    rl.question('Digite sua mensagem (ou 'sair' para encerrar): ", (msg) => 
}
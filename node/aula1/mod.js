const nome = 'Gabriely';
const sobrenome ='Mota';

const falaNome = () =>{
    console.log(nome,sobrenome);
};

module.exports.nome = nome;

console.log(module.exports);

exports.nome = nome;
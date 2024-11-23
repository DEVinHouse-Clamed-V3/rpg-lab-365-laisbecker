import Arma from "../classes/Arma";
import Personagem from "../classes/Personagem";

const espada = new Arma('Espada longa', 'Uma longa e afiada espada de dois gumes')

const meuPersonagem = new Personagem('Laís', 300, 50)

console.log('Nome: ', meuPersonagem.getNome())
console.log('Vida: ', meuPersonagem.getVida())
console.log('Força: ', meuPersonagem.getForca())

meuPersonagem.setArma(espada)
console.log('Arma', meuPersonagem.getArma())

meuPersonagem.receberDano(350)
console.log(meuPersonagem.getVida())
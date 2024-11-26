import Arma from "../classes/Arma";
import Chefao from "../classes/Chefao";
import Inimigo from "../classes/Inimigo";
import Personagem from "../classes/Personagem";

//Armas
const espada = new Arma('Espada longa', 'Uma longa e afiada espada de dois gumes')
const arco = new Arma('Arco e flechas', 'Um grande e poderoso arco com flechas flamejantes')
const tridente = new Arma('Tridente', 'Um tridente comprido e afiado')
//Personagem guerreiro
const guerreiro = new Personagem('Guerreiro Steve', 250, 80)
//Inimigos
const esqueletoWither = new Inimigo('Esqueleto Wither', 170, 50)
const esqueletoCinzento = new Inimigo('Esqueleto cinzento', 150, 70)
const afogado = new Inimigo('Afogado', 150, 40)
const zumbi = new Inimigo('Aldeão Zumbi', 150, 40)
const bruxa = new Inimigo('Bruxa', 120, 70)
//chefão
const chefao = new Chefao('Chefão', 250, 50)

console.log('Tensão no ar, os oponentes do guerreiro Steve se aproximam')
console.log('Nome: ', guerreiro.getNome())
console.log('Vida: ', guerreiro.getVida())
console.log('Força: ', guerreiro.getForca())

guerreiro.setArma(espada)
esqueletoCinzento.setArma(arco)
afogado.setArma(tridente)
esqueletoWither.setArma(arco)

guerreiro.atacar(esqueletoCinzento)
zumbi.atacar(guerreiro)
guerreiro.atacar(bruxa)
afogado.atacar(guerreiro)

console.log(`A guerra começou, e deixou muitos feridos. O Guerreiro steve tem somente ${guerreiro.getVida()} de vida, e é hora de enfrentar o Chefão!`)

guerreiro.atacar(chefao)
chefao.atacar(guerreiro)
chefao.atacar(guerreiro)
chefao.atacar(guerreiro)

console.log(`Nosso guerreiro está com ${guerreiro.getVida()} de vida`)




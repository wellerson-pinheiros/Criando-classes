
// criando classe Heroi

class Heroi {
    constructor(nome,idade,tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;

    }
    // metodo da classe
    ataque(){
        if(this.tipo === "mago"){
            return `O tipo ${this.tipo} atacou usando magia`
        }else if(this.tipo === "guerreiro"){
            return ` O tipo ${this.tipo} atacou usando espada`
        }else if (this.tipo === "monge"){
            return `O tipo ${this.tipo} atacou usando artes marcias`
        }else if (this.tipo === "ninja"){
            return `O tipo ${this.tipo} atacou usando shuriken`
        }

    }
}








//criando referencia para a funçao 
let form = window.document.getElementById("fr1");

// dados de saida para o usuario
const resposta = window.document.getElementById("resp1");
const resposta2 = window.document.getElementById("resp2")

// função com evento de click de um formulario
form.addEventListener ("submit",(e)=>{
    //para a página não atualizar quando o formulario for enviado
    e.preventDefault()
    // nome do heroi resultado do pronpt
    const nomeHeroi = form.inp1.value;
    // idade do heroi resultado do pronpt
    const idadeHeroi = Number(form.inp2.value);
    // tipo do heroi resultado do prompt
    const tipoHeroi = form.inp3.value.toLowerCase();
    
// verificar se o nome digitado pelo usuario é um dos elementos disponiveis 
    let verificarTipo = [ "mago","guerreiro","monge","ninja"]

    if(!verificarTipo.includes(tipoHeroi)){
        alert("Erro: o nome do heroi tem que ser dos quatro elementos disponiveis")
        return;
    }
   // estancia da classe Heroi 
    let novoheroi = new Heroi (nomeHeroi,idadeHeroi,tipoHeroi);
   
    
    resposta2.innerText = ` o mome e atributos do seu heroi é: ${novoheroi.nome} ,idade  ${novoheroi.idade} e o tipo ${novoheroi.tipo}` 
    
    
    resposta.innerText = novoheroi.ataque();

    
})

//finalizado

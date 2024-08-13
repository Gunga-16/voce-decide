const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');


const perguntas = [
    {
        enunciado: 'No âmbito social, você prefere:',
        alternativas: [
        {
             texto: 'Destruir qualquer forma de exploração humana.',
             afirmacao: 'Você será escravo até morrer.',

        },

        {
            texto: 'Acabar com todas as drogas do mundo.',
            afirmacao: 'Os usuários de drogas morreram.',

       }
    ]
    },
    
    {
        enunciado: 'No âmbito ambiental, você prefere:',
        alternativas: [
        {
             texto: 'Extinguir a Floresta Amazônica.',
             afirmacao: 'Os problemas ambientais desapareceram.',

        },

        {
            texto: 'Acabar com a água do mundo.',
            afirmacao: 'Agora, o ser humano não terá sede.',

       }
    ]
    },

    {
        enunciado: 'No âmbito tecnológico, você prefere:',
        alternativas: [
        {
             texto: 'Ter internet para sempre.',
             afirmacao: 'Ninguém pode se comunicar nas redes sociais ou qualquer meio de comunicação digital.',

        },

        {
            texto: 'Criar a cura do Câncer.',
            afirmacao: 'Todos terão tumores com sequelas visuais.',

       }
    ]
    }

]

let atual = 0;
let perguntaAtual;

function mostraPerguntas () {
    perguntaAtual = perguntas[atual];

    caixaPerguntas.textContent = perguntaAtual.enunciado;

    caixaAlternativas.textContent = "";

    mostraAlternativas();
}


function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", function(){
            atual++;
            mostraPerguntas();
        })
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPerguntas();




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
             texto: 'Atlternativa 1',
             afirmacao: 'Destruir qualquer forma de exploração humana, mas você será escravo até morrer.',

        },

        {
            texto: 'Atlternativa 2',
            afirmacao: 'Acabar com todas as drogas do mundo, mas os usuários morrem.',

       }
    ]
    },
    
    {
        enunciado: 'No âmbito ambiental, você prefere:',
        alternativas: [
        {
             texto: 'Atlternativa 1',
             afirmacao: 'Extinguir a Floresta Amazônica, mas os problemas ambientais desaparecem.',

        },

        {
            texto: 'Atlternativa 2',
            afirmacao: 'Acabar com a água do mundo, mas o ser humano não terá sede.',

       }
    ]
    },

    {
        enunciado: 'No âmbito tecnológico, você prefere:',
        alternativas: [
        {
             texto: 'Atlternativa 1',
             afirmacao: 'Ter internet para sempre, mas não poder se comunicar nas redes sociais ou qualquer meio de comunicação digital.',

        },

        {
            texto: 'Atlternativa 2',
            afirmacao: 'Criar a cura do Câncer, mas todos terão tumores com sequelas visuais.',

       }
    ]
    }

]

let atual = 0;
let perguntaAtual;

function mostraPerguntas () {
    perguntaAtual = perguntas[atual];

    caixaPerguntas.textContent = perguntaAtual.enunciado;
}

mostraPerguntas();

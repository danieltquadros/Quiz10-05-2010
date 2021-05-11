//Base de dados das questões, var qz.
var qz = [
    {id:1, quest:'Quanto é 1 + 1?', a:'1', b:'2', c:'3', d:'4',resp:2},
    {id:2, quest:'Quanto é 2 + 2?', a:'2', b:'3', c:'4', d:'5',resp:3},
    {id:3, quest:'Quanto é 3 + 3?', a:'6', b:'7', c:'8', d:'9',resp:1},
    {id:4, quest:'Quanto é 4 + 4?', a:'5', b:'6', c:'7', d:'8',resp:4},
    {id:5, quest:'Quanto é 5 + 5?', a:'9', b:'10', c:'11', d:'12',resp:2},
]
var resp = []
var numQ = 0
var alt = -1
var pt = 0
//resposta ao botão Iniciar Quiz.
function quiz1(){
    start()
}
//Montagem da tela para cada questão.
function start(){
    document.querySelector('#titulo').innerHTML = `Questão ${numQ+1} de ${qz.length}`
    document.querySelector('#tQuestao').innerHTML = qz[numQ].quest
    document.querySelector('#btn-resp1').innerHTML = `a) ${qz[numQ].a}`
    document.querySelector('#btn-resp2').innerHTML = `b) ${qz[numQ].b}`
    document.querySelector('#btn-resp3').innerHTML = `c) ${qz[numQ].c}`
    document.querySelector('#btn-resp4').innerHTML = `d) ${qz[numQ].d}`
}
//Recebe a seleção do usuário e verifica a possibilidade de tentativa de avançar sem seleção.
function selecao(n){
    alt=-1
    limpar()
    if(n > 0 && n < 5){
        document.querySelector(`#btn-resp${n}`).classList.remove('btn-white')
        document.querySelector(`#btn-resp${n}`).classList.add('btn-blue')
        alt = n
    }else{
        alt = -1
    }
}
//Limpa a tela de questões para receber nova questão.
function limpar(){
    document.querySelector('#btn-resp1').classList.remove('btn-blue')
    document.querySelector('#btn-resp2').classList.remove('btn-blue')
    document.querySelector('#btn-resp3').classList.remove('btn-blue')
    document.querySelector('#btn-resp4').classList.remove('btn-blue')
}
//monta a tela com o resultado final do Quiz.
function resultado(){
    let perc = 0
    document.querySelector('#titulo').innerHTML = 'Final do Quiz'
    document.querySelector('#tQuestao').innerHTML = 'Resultado:'
    document.querySelector('#corpo').classList.remove('corpoA')
    document.querySelector('#corpo').classList.add('corpoD')
    for(let i = 0; i < 5; i++){
        document.querySelector('#resp-final').innerHTML += `Questão ${i+1}: ${resp[i]} <br>` 
    }
    perc = pt*100/(numQ+1)
    document.querySelector('#percent').innerHTML = ` Aproveitamento: ${perc} %`
    document.querySelector('#btn-next').classList.remove('corpoA')
    document.querySelector('#btn-next').classList.add('corpoD')
    document.querySelector('#btn-fim').classList.remove('corpoD')
    document.querySelector('#btn-fim').classList.add('corpoA')
}
//Verifica a acertividade ou tentativa de prosseguir sem seleção.
function confirm(){
    if(alt != -1){
        if(alt == qz[numQ].resp){
            resp.push('Certo')
            pt++
        }else{
            resp.push('Errado')
        }
        if(numQ<4){
            n=0
            numQ++
            limpar()
            start()
        }else{
            resultado()
        }
    }else{
        window.alert('Selecione uma alternativa para continuar!!!')
    }
    alt=-1
}
//Reseta o quiz para reinicialização.
function finalizar(){
    resp = []
    numQ = 0
    alt = -1
    pt = 0
    limpar()
    document.querySelector('#corpo').classList.remove('corpoD')
    document.querySelector('#corpo').classList.add('corpoA')
    document.querySelector('#btn-next').classList.remove('corpoD')
    document.querySelector('#btn-next').classList.add('corpoA')
    document.querySelector('#btn-fim').classList.remove('corpoA')
    document.querySelector('#btn-fim').classList.add('corpoD')
    document.querySelector('#resp-final').innerHTML = ''
    document.querySelector('#percent').innerHTML = ''
}
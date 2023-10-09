
const grid = document.querySelector('.grid')
const spanPlayesr = document.querySelector(".player")
const timer = document.querySelector(".timer")

const caracters = [ 'beth',
'jerry',
'jessica',
'morty',
'pessoa-passaro',
'pickle-rick',
'rick',
'summer',
'meeseeks',
'scroopy',]

let firstCard = "";
let secondCard = "";

const checkEndGame = () => {
    const disabledCards = document.querySelectorAll('.disabled-card')

    if(disabledCards.length == 20){
        clearInterval(this.nameLoop )
        setTimeout(() => {
            alert(`Parabés ${spanPlayesr.innerHTML}! seu tempo foi de:  ${timer.innerHTML}s`)},1200)
    }
}

const cheackCards = () => {
    const firstCharacter = firstCard.getAttribute('data-personagem')
    const secondCharacter = secondCard.getAttribute('data-personagem')

    if(firstCharacter === secondCharacter){

        firstCard.firstChild.classList.add('disabled-card')
        secondCard.firstChild.classList.add('disabled-card')
        firstCard = ""
        secondCard = ""

        checkEndGame()

    }else {

        setTimeout(() => {

        firstCard.classList.remove('reveal-card')
        secondCard.classList.remove('reveal-card')
         firstCard = ""
        secondCard = ""
        },900)
      
    }
}

const revealCard = ({target}) =>{

        if (target.parentNode.className.includes('reveal-card')){
            return
        }
     
        if (firstCard === ""){
            target.parentNode.classList.add('reveal-card')
            firstCard = target.parentNode

        }else if (secondCard === ""){
            target.parentNode.classList.add('reveal-card')
            secondCard = target.parentNode

            cheackCards()
        }
    
}

//Uma função q irá criar um elemento qualquer...
const createElement = (tag, className) => {
    const element = document.createElement(tag)
    element.className = className;
    return element
}

const creatCard = (personagem) => {
    const card = createElement('div', 'card')
    const front = createElement('div', 'face front')
    const back = createElement('div', 'face back')

    front.style.backgroundImage = `url('../images/${personagem}.png')`
    // card.className = "card"
   // front.className = "face front"
   // back.className = "face back"
    

    card.appendChild(front)
    card.appendChild(back)
    // grid.appendChild(card)

    card.addEventListener('click', revealCard)
    card.setAttribute('data-personagem', personagem)

    return card
}

const loadGame = () => {

    const duplicateCarcters = [ ...caracters, ...caracters]

    const shuffledArray = duplicateCarcters.sort(() => Math.random() - 0.5)


    shuffledArray.forEach( (cadaCaracter) => {

        const card =  creatCard(cadaCaracter)
        grid.appendChild(card)
    })
}
// cada elemento do erry estara detro dos parentes (card), 1 por vez



// isso irá executar alguma coisa q estiver dentro das chaves, quando a janela tiver carregado, "window", ou seja, o window irá carregar alguns elements e quando ele terminar de carregar esses elementos q se precisa ele irá executar o q estiver dentro das chaves


// a função q irá inicializar o contador de tempo,, e ela irá criar um loop, que a cada segundo irá somar 1 ao valor q estiver ali, dentro de tempo,, setInterval() recebe dois parametros, acada 1segundo quero q ele execute algo,,,,const currentTime = timer.innerHTML para pegar o tempo atual
const startTimer = () => {

    this.nameLoop = setInterval(() => {

        const currentTime = +timer.innerHTML
        timer.innerHTML = currentTime + 1

    },1000)
}

window.onload = () => { 

    spanPlayesr.innerHTML = localStorage.getItem('player')

    startTimer()
    loadGame()
}




// irei utilizar o this para parar o loop do tempo,,, irei precisar salvar uma referencia do loop  setInterval(() => {...,, em algum lugar, para em outra função poder parar o loop, irei por esse loop dentro do this, para poder recupera-lo em qualquer outro lugar do projeto,,, this.nameLoop,, esse nameLoop foi uma chave que atribui a esse loop
// clearInterval(this.nameLoop ) isso serve para parar o intervalo
        


// localStorage,, para acessar onde foi salvo a informação do input, da pag de login,, e como foi utilizado o metodo setAitem() para salvar um valor,,, mas agora quero recuperar este valor, então utilizarei o metodo getItem(),,   e lá no localStorange salvei uma chave player com o valor digitado no login,, e quero pegar esse item q possui a chave player('player'),,, e preciso pegar este valor e por dentro de span,, e como ele é um elemento html, então posso acessar o atributo dele .innerHTML = ""


// loadGame(),, é a função que irá gerar as cartas,, assim q o windows estiver totalmente carregado

// Na function que carrega o jogo, dupliquei o array,, criei um novo array e utilizei o spread para espalhar os elementos de um array dentro de outro
//A operação de spread (...) é uma característica do JavaScript que permite "espalhar" os elementos de um objeto iterável (como um array ou um objeto) para um novo contexto. Isso é útil para copiar, combinar ou passar elementos de um lugar para outro de maneira mais conveniente.
//.sort() é uma function nativa do js para ordenação de listas, e usar esse metodo para embaralhas,, ele irá ordenar os elementos em ordem alfabetica, porém dentro do sort consigo passar uma funcão para dizer exatamente como que essa ordenação será feita, posso passar uma função e se essa função retornar um numero menor q zero ele irá por um elemento na frente de outro, se retornar um numero maior ele irá por  outro, e se a função retornar zero ele não irá mecher na ordem,, então posso passar uma função para o sort q irá retornar um numero maior ou menor do que 0, e para isso posso utilizar o metodo Math.random()

//Math.random() é uma função embutida no JavaScript que retorna um número de ponto flutuante pseudoaleatório no intervalo de 0 (inclusive) a 1 (exclusivo). Isso significa que o valor retornado pode estar entre 0 (incluindo 0) e 1 (não incluindo 1), e cada chamada subsequente da função Math.random() pode resultar em um valor diferente. ou seja um numero aleatorio entre 0 e 1, porém nunca chegara a ser 1,, e isso acabará sempre me retornando um numero maior do que zero, então irei subtrair por -0.5,, que ai me retornará um numero negativo ou um positivo 

//card.setAttribute('data-character', personagem),, criei um atributo de forma dinamica para comparar as cads, e personagem é o valor q irá para esse atributo

// No trecho firstCard.firstChild.classList.add('disabled-card'),,, firstChild = no primeiro filho
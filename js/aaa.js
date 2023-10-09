// const haha = (value) => {  
// for (let i = 2; i < value; i++) {
//     // console.log(value);
//     // console.log(i)
//     if (value % i === 0) {
//       // Se o valor for divisível por i, não é primo
//     }
//   }
//   return value > 1
// }

//   haha(51)
const grid = document.querySelector(".grid")

const caracters = [ 'beth',
'jerry',
'jessica',
'morty',
'pessoa-passaro',
'pickle-rick',
'rick',
'summer',
'meeseeks',
'scroopy']

let firstCard = ""
let secondCard = ""

const comparar = () => {
  const firstAtribute = firstCard.getAttribute("data-personagem")
  const secondAtribute = secondCard.getAttribute("data-personagem")

  if( firstAtribute=== secondAtribute){
   
      firstCard = ""
      secondCard = ""
  }else {

    setTimeout( () => {
      firstCard.classList.remove("reveal-card")
      secondCard.classList.remove("reveal-card")
      firstCard = ""
      secondCard = ""
    },1000)
  }
}

const virarCard = ({target}) => {
  
  if(target.parentNode.classList.contains('reveal-card')){
    return
  }
  if(firstCard === ""){
    target.parentNode.classList.add('reveal-card')
    firstCard = target.parentNode

  } else if( secondCard === ""){
    target.parentNode.classList.add('reveal-card')
    secondCard = target.parentNode

    comparar()
    
  }
} 

const creatCards = (tag, element) => {
	const pronto = document.createElement(tag)
  pronto.className = element
  return pronto

}

const parametrosCards = (personagem) => {
  
  const card = creatCards("div","card")
  const front = creatCards("div"," face front")
  const back = creatCards("div"," face back")

  front.style.backgroundImage = `url('../images/${personagem}.png')`

  card.appendChild(front)
  card.appendChild(back)

  card.addEventListener("click", virarCard)
  card.setAttribute("data-personagem",personagem)

  return card

}


const functionEmbaralhar = () => {

  const cardsArray = [...caracters, ...caracters]

  const cardsEmbaralhadas = cardsArray.sort(() => Math.random() -0.5)

  cardsEmbaralhadas.forEach((img) =>{
    const card = parametrosCards(img)
    grid.appendChild(card)
  })
}


functionEmbaralhar()

const Ogrid = document.querySelector(".grid")

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

const criarCards = (tag, className) => {
    const element = document.createElement(tag)
    element.className = className
    return element
}

const virarCard = ({target}) => {
    
    if(target.parentNode.classList.contains("revel-card")){
        return
    }

     target.parentNode.classList.add('reveal-card')
}


const cadscomplet = (dado) => {

    const card = criarCards( "div", "card")
    const front = criarCards( "div", "face front ")
    const back = criarCards( "div", "face back")

    front.style.backgroundImage = `url('../images/${dado}.png')`

    card.appendChild(front)
    card.appendChild(back)

    card.addEventListener("click", virarCard)

    return card
}
// console.log(cadscomplet())


const lacoArry = () => {

    const replicaCaracters = [ ... caracters, ...caracters]

    const prontoReplicaCaracters = replicaCaracters.sort(() => Math.random() - 0.5)
    // console.log(prontoReplicaCaracters )

    prontoReplicaCaracters.forEach((imagem) => {

         const card =  cadscomplet(imagem)
         Ogrid.appendChild(card)

    })
}
lacoArry()




// const virarCard = ({target}) => {
//   console.log(target)
// }

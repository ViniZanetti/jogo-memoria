const loginInput = document.querySelector(".login_input")
const loginButton = document.querySelector(".login_button")
const form = document.querySelector(".login-form")


const ativarBotao = ({ target }) => {

    if(target.value.length > 2){
        loginButton.removeAttribute('disabled')
        return; 
    } 
    
    loginButton.setAttribute('disabled', '')
}

loginInput.addEventListener('input',ativarBotao)


form.addEventListener("submit", (e) => { 
        e.preventDefault()
        localStorage.setItem("player", loginInput.value)
        window.location = 'pages/game.html'
})



//O método setAttribute() é uma função nativa do JavaScript que é usada para definir ou modificar um atributo em um elemento HTML. Ele permite que você altere o valor de um atributo específico em um elemento HTML.


///O método preventDefault() é uma função utilizada em JavaScript para prevenir o comportamento padrão de um evento que ocorre em um elemento HTML. Geralmente, é usado em manipuladores de eventos para evitar que a ação padrão do navegador ocorra quando um evento é acionado.





// irei armazenar o valor do input do input no localstorange, que é um armazenamento local do browzer, e consigo ter acesso pelas ferramentas de desenvolvedor, f12,, 
 //  No chome se acessa aplication,stora...
 //localStorage em JavaScript é um objeto global que permite armazenar dados de forma persistente no navegador do usuário. Ele fornece uma maneira simples de armazenar informações que serão mantidas mesmo após o usuário fechar a janela do navegador ou reiniciar o computador. Esses dados persistem até que sejam explicitamente removidos pelo usuário ou pelo código que os criou.

//O localStorage é um tipo de armazenamento local, diferente dos cookies, que são enviados para o servidor com cada solicitação HTTP. Isso o torna uma opção útil para armazenar pequenas quantidades de informações no lado do cliente.

// E como quero salvar um novo item no  local storent irei utilizar o metodo setItem(),, \e esse metodo espera dois parametros,,o primeiro é a chave do parametro que quero salvar, eo valor,,, 


//window.location = redireciona para uma nova pag
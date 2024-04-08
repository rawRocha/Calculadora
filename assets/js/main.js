console.log('Hello World!');

function Calculadora(){
  this.display = document.querySelector('.display')
  
  this.historico = document.querySelector('.saida-historico')
  
  //metodo publico inicia
  this.inicia = () => {
    this.cliqueBtn()
  }
  
  this.cliqueBtn = () => {
    //o evento abaixo captura o click, e o armazena na constante elemento.
    document.addEventListener('click', (e) => {
      const el = e.target
      
    //se o elemento (el) contaim a class btn-num exiba para display.
      if(el.classList.contains('btn-num')) this.exibeDisplay(el.innerText)
      
      
    //condição se o elemento clicado tiver a class btn-clear chama a função clearDisplay.
      if(el.classList.contains('btn-clear')) this.clearDisplay()
      
    //condição se o elemento clicado conter a class btn-del chama a função apagaUm
      if (el.classList.contains('btn-del')) this.apagaUm()
      
    //condição se o elemento clicado conter a class btn-eq, se conter realizaConta
      if (el.classList.contains('btn-eq')){
        let historico = []
        historico.push(this.display.value)
        this.realizaConta()
        this.addAoHistorico(historico)
      } 
    })
  }
  
  
  //a função exibeDisplay recebe o texto do elemento selecionada pelo evento cliqueBtn como argumento para valor, e passa valor para o display.value
  this.exibeDisplay = (valor) => {
    //+= concatena os valores capturados
    this.display.value += valor
  }
  
  //clearDisplay passa um valor vazio para o display.
  this.clearDisplay = () => this.display.value = ''
  
  //apagaUm remove um ultimo caractere do display
  this.apagaUm = () => this.display.value = this.display.value.slice(0, -1)
  
  this.registraConta = () => {
    return this.display.value
  }
  
  this.addAoHistorico = (valor) => {
    const p = document.createElement('p')
    p.classList.add('pNovo')
    p.innerText = `${valor} = ${this.display.value}`
    this.historico.appendChild(p)
  }
  
  //realizaConta passa o valor do display para a função eval que tentara resolver a conta
  this.realizaConta = () => {
    
    let conta = this.display.value
    
    try {
      conta = eval(conta)
      
      //se conta retornar valor falso, alert() erro.
      if(!conta){
        alert('Conta Inválida')
      }
      
      //se conta for valida retorne ao display
      return this.display.value = conta
    } catch (e){
      alert('Conta Inválida')
    }
  }
  
}


const calculadora = new Calculadora()
calculadora.inicia()


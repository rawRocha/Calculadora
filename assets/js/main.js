function Calculadora(){
    this.display = document.querySelector('.display')

    this.inicia = () => {
        this.exibe()
    }

    this.exibe = () => {
        document.addEventListener('click', (e) => {
            const el = e.target

            if(el.classList.contains('btn-num')){
                this.paraDisplay(el.innerText)
            }

            if(el.classList.contains('btn-clear')) this.display.value = ''

            if(el.classList.contains('btn-del')) this.display.value = this.display.value.slice(0, -1)

            if(el.classList.contains('btn-eq')){
                this.realizaConta()
            }
        })
    }

    this.paraDisplay = function(textoBtn){
        return this.display.value += textoBtn
    }

    this.realizaConta = function(){
        let conta = eval(this.display.value)
        return this.display.value = conta
    }
}

const calculadora = new Calculadora()
calculadora.inicia()
const inputs = document.querySelectorAll('.input')
const btn = document.querySelector('.btn')

btn.addEventListener('click', ()=>{
    inputs.forEach(input=>{
        if(input.value === ""){
            input.classList.add('campo-requered')
            input.nextElementSibling.classList.remove('ativo')
            input.classList.remove('campo-preenchido')

            
        }else{
            input.classList.remove('campo-requered')
            input.classList.add('campo-preenchido')
            input.nextElementSibling.classList.add('ativo')
        }
    })
})
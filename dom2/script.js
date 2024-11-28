
/*
const ul = document.querySelector("ul")
console.log(ul)
console.log(ul.innerHTML)
console.log(ul.innerText)
const li = document.createElement("li")

li.innerText="novo"

console.log(li)
console.log(li.innerHTML)
console.log(li.innerText)


ul.appendChild(li)

*/
const btnverificar = document.querySelector("#btn-verificar")


btnverificar.addEventListener('click', ()=>{

    const valor = document.querySelector("input")
    
    if (valor.value ==""){
    alert("Digite um numero")

    }else{
        console.log(valor.value)

        const numero = Number(valor.value)
        
        const h2 = document.querySelector("h2")
    
        if(numero%2==0)
            h2.innerText = `O numero ${numero} é par`
        else
        h2.innerText = `O numero ${numero} é impar`
    
        handleClick()
        
        valor.value =""

    }
    
   

})

   


const btnvoltar = document.querySelector("#voltar")
btnvoltar.addEventListener('click', ()=>{

    handleClick()
})


function handleClick() {

    const resultado = document.querySelector("#resultado")
    resultado.classList.toggle("hide")

    const main = document.querySelector("#main")
    main.classList.toggle("hide")
}

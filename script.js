const result = document.querySelector("#result")
result.innerHTML=""


const btn = document.querySelector("button")


btn.addEventListener('click', ()=>{

    const inputAltura = document.querySelector("#input-alt")
    const inputPeso = document.querySelector("#input-peso")

    if (inputAltura.value != "" && inputPeso.value != ""){

   
    console.log("click")

    
    const peso = Number(inputPeso.value)
    const altura = Number(inputAltura.value)

    
    result.classList.remove("hide")

    const imc = peso / (altura * altura)
    const p = document.createElement("p")
    p.innerText = "IMC = " + imc.toFixed(2)
    result.appendChild(p)

    console.log(imc.toFixed(2))

    inputAltura.value = ""
    inputPeso.value = ""
    }else{
        alert("Digite os valores de altura e peso ")
    }
})
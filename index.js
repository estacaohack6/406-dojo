let botaomodal = document.querySelector(".botao");
let botaoAdc = document.querySelector("#botaomodal");
let modal = document.querySelector(".modal");
let vaivolta = true;
let section = document.querySelector("section");
let salas =  document.querySelectorAll('.novasala');

function habilitaBotao (){
    for (sala of salas){
        sala.addEventListener('click', function(){
            this.salas.style.backgroundColor = 'red'; 
        })
    }
}

botaoAdc.addEventListener('click', function(){
    let div = document.createElement("div");
    div.setAttribute('class','novasala');
    div.classList.add('novasala')
    modal.style.display = 'none';
    section.appendChild(div);
    let inputnome = document.querySelector('#inputnome').value
    let inputnumero = document.querySelector('#numeroslugares').value

    let h2 = document.createElement('h2')
    h2.innerHTML = inputnome
    div.appendChild(h2)

    let p = document.createElement('p')
    p.innerHTML = inputnumero
    div.appendChild(p)
    habilitaBotao()
})

habilitaBotao();

botaomodal.addEventListener('click', function(){
    modal.style.display = 'flex';
    modal.classList.remove(".modal");
    modal.classList.add(".ativamodal")
});
// botaomodal.onclick = oi;

// function oi(){
//     if(vaivolta = true){
//         document.querySelector(".modal").style.tranform = ("translateY(700px)");
//         vaivolta = false;
//     }
//     else{
//         document.querySelector(".modal").style.tranform = ("translateY(-700px)");
//         vaivolta = true;
//     }
// }




let txt_atuacao = document.getElementById("txt_atuacao")
let txt_conhecimento = document.getElementById("txt_conhecimento")
let txt_estrutura = document.getElementById("txt_estrutura")


let Aatuacao = document.getElementById("Aatuacao")
let conhecimento = document.getElementById("conhecimento")
let estrutura = document.getElementById("estrutura")


Aatuacao.addEventListener("click", () => {
  Aatuacao.classList.toggle("bg-gray-400")
   conhecimento.classList.remove("bg-gray-400")
  estrutura.classList.remove("bg-gray-400")
    txt_atuacao.classList.toggle("hidden")
    txt_conhecimento.classList.add("hidden")
    txt_estrutura.classList.add("hidden")
  })

  conhecimento.addEventListener("click", () => {
     conhecimento.classList.toggle("bg-gray-400")
      Aatuacao.classList.remove("bg-gray-400")
      estrutura.classList.remove("bg-gray-400")
    txt_atuacao.classList.add("hidden")
    txt_conhecimento.classList.toggle("hidden")
    txt_estrutura.classList.add("hidden")
  })

  estrutura.addEventListener("click", () => {
    estrutura.classList.toggle("bg-gray-400")
     Aatuacao.classList.remove("bg-gray-400")
    conhecimento.classList.remove("bg-gray-400")

    txt_atuacao.classList.add("hidden")
    txt_estrutura.classList.toggle("hidden")
    txt_conhecimento.classList.add("hidden")

  })

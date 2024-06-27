function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  //if(html.classList.contains("light")) {
  //html.classList.remove("light")
  //}else {html.classList.add("light")}

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, add img light
    img.setAttribute("src", "./assets/euuuuuuuuuu1.png")
  }
  //se tiver sem light moded
  else {
    img.setAttribute("src", "./assets/euuuuuuuuuu.png")
  }

  if (html.classList.contains("light")) {
    img.setAttribute("alt", "óculos de sol")
  } else {
    img.setAttribute("alt", "batom vermelho)")
  }
}

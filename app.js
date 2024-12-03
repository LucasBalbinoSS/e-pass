document.addEventListener('DOMContentLoaded', () => {
  menuFechar()
  fontesAumentar()
})

const menuFechar = () => {
  const principal = document.querySelector('main')
  const rodape = document.querySelector('footer')
  const menuMobileLinks = document.querySelectorAll('.js-topo-mobile-lista a')
  const menuMobile = document.querySelector('.js-topo-mobile-input')

  principal.addEventListener('click', () => {
    menuMobile.checked = false
  })

  rodape.addEventListener('click', () => {
    menuMobile.checked = false
  })

  menuMobileLinks.forEach((menuMobileLink) => {
    menuMobileLink.addEventListener('click', () => {
      menuMobile.checked = false
    })
  })
}

const fontesAumentar = () => {
  const textosLg = document.querySelectorAll('[data-tamanho-fonte]')
  const btnAumentar = document.querySelector('.js-aumentar-fonte')
  const btnDiminuir = document.querySelector('.js-diminuir-fonte')

  btnAumentar.addEventListener('click', () => {
    textosLg.forEach((textoLg) => {
      let tamanhoAtual = parseInt(textoLg.dataset.tamanhoFonte);

      tamanhoAtual++;
      textoLg.dataset.tamanhoFonte = tamanhoAtual;
      textoLg.style.fontSize = tamanhoAtual + 'px';
    })
  })

  btnDiminuir.addEventListener('click', () => {
    textosLg.forEach((textoLg) => {
      let tamanhoAtual = parseInt(textoLg.dataset.tamanhoFonte);

      tamanhoAtual--;
      textoLg.dataset.tamanhoFonte = tamanhoAtual;
      textoLg.style.fontSize = tamanhoAtual + 'px';
    })
  })
}
document.addEventListener('DOMContentLoaded', () => {
  menuFechar()
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
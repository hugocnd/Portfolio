let trilho = document.getElementById('trilho')
let body = document.querySelector('body')

trilho.addEventListener('click', ()=>{
    trilho.classList.toggle('dark')
    body.classList.toggle('dark')
})


let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById ('menu-mobile')


    btnMenu.addEventListener('click', ()=>{
        menu.classList.add('abrir-menu')
    })

    menu.addEventListener('click', ()=>{
        menu.classList.remove('abrir-menu')
    })


    window.revelar = ScrollReveal({reset:true})

    revelar.reveal('.efeitosofia',{
      duration: 2000,
      distance: '90px'
    })

    revelar.reveal('.efeitotxtsofia',{
      duration: 2000,
      distance: '90px'
    })

    revelar.reveal('.efeitosobremim',{
      duration: 2000,
      distance: '90px',
    })

    revelar.reveal('.efeito-mysql',{
      duration: 2000,
      distance: '90px',
      delay: 500,
      origin: 'left'
    })


    
    revelar.reveal('.efeito-C',{
      duration: 2000,
      distance: '90px',
      delay: 500,
      origin: 'right'
    })

    revelar.reveal('.efeito-Amb',{
      duration: 2000,
      distance: '90px',
      delay: 500,
      origin: 'left'
    })


revelar.reveal('.efeitosobremim2',{
      duration: 2000,
      distance: '90px',
      delay: 500
    })


    function mascara_telefone() {
      //limitador
      var tel = document.getElementById("telefone").value
      console.log(tel)
      tel = tel.slice(0, 14)
      console.log(tel)
      document.getElementById("telefone").value = tel
      tel = document.getElementById("telefone").value.slice(0, 10)
      console.log(tel)
  
      //mascara
      var tel_formatado = document.getElementById("telefone").value
      if (tel_formatado[0] != "(") {
          if (tel_formatado[0] != undefined) {
              document.getElementById("telefone").value = "(" + tel_formatado[0];
          }
      }
  
      if (tel_formatado[3] != ")") {
          if (tel_formatado[3] != undefined) {
              document.getElementById("telefone").value = tel_formatado.slice(0, 3) + ")" + tel_formatado[3]
          }
      }
  
      if (tel_formatado[9] != "-") {
          if (tel_formatado[9] != undefined) {
              document.getElementById("telefone").value = tel_formatado.slice(0, 9) + "-" + tel_formatado[9]
          }
      }
  }

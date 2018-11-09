//function to OOP  !!! REBUILD //click outside close nav
if (true){
  const sidenav = document.getElementById('mySidenav')
  const main = document.getElementById('mainCon')
  const btn = document.getElementById('bar_container')
  let isOpen = false  
  btn.addEventListener('click', toogleNav, false)
  
  $(document).ready(function(){
    const win = $(window)
    win.resize(function(){
      const wIw = win.innerWidth()
      if ((wIw >= 970) && (isOpen == true)){
        closeNav()
      }
    })
  })
  
  function toogleNav(){
    const subMenu = document.getElementsByClassName('changed')[0]
    if(subMenu){
      closeNav()
    } else {      
      openNav()
    }    
  }
  
  function closeNav() {
    sidenav.style.width = '0'
    main.style.marginLeft = '0'
    btn.classList.remove('changed')
    document.body.style.backgroundColor = 'honeydew'
    isOpen = false
  } 
  
  function openNav(){
    sidenav.style.width = '250px'
    main.style.marginLeft = '-250px'
    btn.classList.add('changed')
    document.body.style.backgroundColor = 'rgba(0,0,0,0.4)'
    isOpen = true
  }
}

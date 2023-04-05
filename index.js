const stor =  document.querySelectorAll('.images')
alert("Hi");
  stor.forEach(i =>{
      i.addEventListener('click',() =>{
          inactiveall();
          i.classList.add('active')
      })
  })

  function inactiveall(){
      stor.forEach(i =>{
          i.classList.remove('active');
      })
  }


window.sr=ScrollReveal({ reset:true})

sr.reveal(' .card',{duration:1500})
sr.reveal(' .card-localization',{duration:1500})
sr.reveal(' .card-equipe',{duration:1500})
sr.reveal(' .quemSomos-Left',{duration:1500})
sr.reveal(' .quemSomos-Rigth',{duration:1500})
sr.reveal(' .quemSomos-Rigth',{duration:1500})
sr.reveal(' .contato-info',{duration:1500})

// menu lateral

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }
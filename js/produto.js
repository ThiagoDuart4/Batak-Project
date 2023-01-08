
var click1 = document.getElementById('sub-btn1')
var click2 = document.getElementById('sub-btn2')
var click3=document.getElementById('sub-btn3')
var image = document.getElementById('img-prod')
var clickContinuar = document.getElementById('btn-click')

clickContinuar.addEventListener('click',function () {
  document.getElementById('check').innerHTML = 'Pedido Efetuado <i class="fa-solid fa-check">'
  document.getElementById('check').style.color = 'green';
  document.getElementById('check').style.marginBottom='10px'})



click1.addEventListener('click',function(){

image.setAttribute('src','assets/vegana.png')

  document.getElementById('sabor1').innerHTML = "Brocolis";
  document.getElementById('sabor2').innerHTML = "Cogumelos";
  document.getElementById('sabor3').innerHTML = "Espinafre";
  
  document.getElementById('acompanhamento1').innerHTML = 'Todos os molho ';
  document.getElementById('acompanhamento2').innerHTML = 'batata M/G';
  document.getElementById('acompanhamento3').innerHTML = 'Maionese da casa ';


  document.getElementById('extra1').innerHTML ='Coca cola';
  document.getElementById('extra2').innerHTML ='Guarana antartica';
  document.getElementById('extra3').innerHTML ='Pepsi';
})



click2.addEventListener('click',function() {


  image.setAttribute('src','assets/tradicional.png')

  document.getElementById('sabor1').innerHTML = "Frango/c";
  document.getElementById('sabor2').innerHTML = "Carne/seca";
  document.getElementById('sabor3').innerHTML = "";
  

  document.getElementById('acompanhamento1').innerHTML = 'Todos os molho ';
  document.getElementById('acompanhamento2').innerHTML = 'batata M/G';
  document.getElementById('acompanhamento3').innerHTML = 'Maionese da casa ';


  
  document.getElementById('extra1').innerHTML ='Coca cola';
  document.getElementById('extra2').innerHTML ='Guarana antartica';
  document.getElementById('extra3').innerHTML ='Pepsi';
})



click3.addEventListener('click',function() {


  image.setAttribute('src','assets/doce.png')

  document.getElementById('sabor1').innerHTML = "Morango";
  document.getElementById('sabor2').innerHTML = "Uva";
  document.getElementById('sabor3').innerHTML = "";
  

  document.getElementById('acompanhamento1').innerHTML = 'Calda de morango';
  document.getElementById('acompanhamento2').innerHTML = 'Sorvete';
  document.getElementById('acompanhamento3').innerHTML = 'Paçoca ';


  
  document.getElementById('extra1').innerHTML ='Coca cola';
  document.getElementById('extra2').innerHTML ='Guarana antartica';
  document.getElementById('extra3').innerHTML ='Pepsi';
})








function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }






function openProd() {
  document.getElementById("mySideProd").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";

  
}

function closeProd(){
  document.getElementById("mySideProd").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}



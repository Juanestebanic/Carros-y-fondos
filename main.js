var lienzo=document.getElementById("canvas")
var contenido=lienzo.getContext("2d")
var ancho=30
var alto=15
var posicionx=30
var posiciony=30
var fondo="th.jpg"
var carro="th (1).jpg"
var carros=["th (1).jpg","carro2.png","carro3.png","nave4.png","carro5.png","carro6.png","carro7.png","carro8.png","avion9.png","avion10.png"]
var aleatorio=Math.floor(Math.random()*10)
var carroseleccionado=carros[aleatorio]
//comando floor redondea numeros
var fondos=["th.jpg","fondo2.jpg","fondo3.jpg","fondo4.jpg","fondo5.jpg","fondo6.jpg","fondo7.jpg","fondo8.jpg","fondo9.jpg","fondo10.jpg"]
var aleatorio2=Math.floor(Math.random()*10)
var fondoseleccionado=fondos[aleatorio2]

function cargando(){
    ponerfondo=new Image()
    ponerfondo.onload=cargarfondo
    ponerfondo.src=fondoseleccionado

    ponercarro=new Image()
    ponercarro.onload=cargarcarro
    ponercarro.src=carroseleccionado
}
function cargarfondo(){
    contenido.drawImage(ponerfondo, 0, 0, lienzo.width, lienzo.height)
}
function cargarcarro(){
    contenido.drawImage(ponercarro, posicionx, posiciony, ancho, alto)
}
function keydown(e){
    var boton= e.keyCode
    console.log(boton)
    if(boton=="87"){
        arriba()
    }
    if(boton=="83"){
        abajo()
    }
    if(boton=="68"){
       derecha()
    }
    if(boton=="65"){
        izquierda()
    }
}
function arriba(){
    if(posiciony>=0){
        posiciony=posiciony-30
        cargarfondo()
        cargarcarro()
    }

}
function abajo(){
    if(posiciony<=400){
        posiciony=posiciony+30
        cargarfondo()
        cargarcarro()
    }

}
function derecha(){
 if(posicionx<=400){
    posicionx=posicionx+30
    cargarfondo()
    cargarcarro()
 }
 
}
function izquierda(){
    if(posicionx>=0){
       posicionx=posicionx-30
       cargarfondo()
       cargarcarro()
    }
    
   }


window.addEventListener("keydown", keydown)
let titulo = document.getElementById('mainTitle');

titulo.addEventListener('mousedown', function(){
    titulo.innerText = "Fabiana Lazzo";
});

titulo.addEventListener('mouseup', function(){
    titulo.innerText = "Quien soy";
});

let imagen = document.getElementById('profileImg');

imagen.addEventListener('mouseover', function(){
    imagen.classList.add("flip");
});
imagen.addEventListener('mouseout', function(){
    imagen.classList.remove("flip")
})

let cambiarWidth = document.getElementById('cambiarWidth');

cambiarWidth.addEventListener('click', function(){
    cambiarWidth.classList.add("achicar");
});
cambiarWidth.addEventListener('mouseup', function(){
    cambiarWidth.classList.remove('achicar');
});
/* Animacion del backgroundcolor/aboutMe */

// const COLORES = ['red', 'blue', 'yellow'];

// document.getElementById("cambioColor").addEventListener('click', function(){
//     this.style.backgroundColor = COLORES[indexActual];
//     let indexActual = (indexActual + 1) % COLORES.length;
// });
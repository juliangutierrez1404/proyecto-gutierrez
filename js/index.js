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

/* Animacion del backgroundcolor/aboutMe */

let cambioColor = document.getElementById("cambioColor");
let colores = cambioColor.classList;

        if (colores == "gris") {
            cambioColor.addEventListener('mousedown', function(){
                colores.remove("gris");
                colores.add("blanco");
            });
        } else if (colores == "blanco") {
            cambioColor.addEventListener('mousedown', function(){
                colores.remove("blanco");
                colores.add("beige");
            });
        } else if (colores == "beige") {
            cambioColor.addEventListener('mousedown', function(){
                colores.remove("beige");
                colores.add("gris");
            });
        }





// const COLOR_1 = "blanco";
// const COLOR_2 = "beige";

// cambioColor.addEventListener('click', function(){
//     if (cambioColor.classList = "gris"){
//     cambioColor.addEventListener('click', function(){
//         cambioColor.classList.remove("gris");
//         cambioColor.classList.add(COLOR_1);
//     })
// }else if (cambioColor.classList = COLOR_1){
//     cambioColor.addEventListener('click', function(){
//         cambioColor.classList.remove(COLOR_1);
//         cambioColor.classList.add(COLOR_2);
//     })
// }else if (cambioColor.classList = COLOR_2){
//     cambioColor.addEventListener('click', function(){
//         cambioColor.classList.remove(COLOR_2);
//         cambioColor.classList.add("gris");
//     })
// }
// })
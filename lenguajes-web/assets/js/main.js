let links = document.querySelectorAll('a');

for (let a of links) {
    a.addEventListener('click', (event) => {

        event.preventDefault(); // Anula el comportamiendo por defecto de un elemento.

        let content = document.querySelector('.content'); // Busca un elemento por la clase content.

        content.classList.remove('animate__fadeInLeft'); // Quita la animacion de entrada.

        content.classList.add('animate__fadeOutRight'); // Agrega una animacion de salida.

        // Navega a la pagina del href luego de 500 milisegundos.
        setTimeout(
            function () {
                location.href = a.href;
            },
            500
        );
    });
}

/*

console.log('Hola Mundo');

// Seleciona el primer elmento que coincida con la etiqueta 'tr'.
let row = document.querySelector('tr');

console.log(row);

// Seleciona todos los elementos que coincidan con la etiqueta 'tr'.
let rows = document.querySelectorAll('tr');

console.log(rows);

for (let link of rows) {
    console.log(link);
}

let cells = document.querySelectorAll('td');

for (let td of cells) {
    // Agrega el evento de click a cada celda de la tabla.
    td.addEventListener('click', function () {
        console.log(this);
    });
}

let iconos = document.querySelectorAll('i');

iconos.forEach((icono)=>{
    console.log(icono);
    // Quita la clase 'fa-star' al elmento 'i';
    icono.classList.remove('fa-star');
});

*/
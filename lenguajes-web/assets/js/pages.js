let links = document.querySelectorAll('a');

links.forEach(function (link) {
    link.addEventListener('click', function (event) {
        
        event.preventDefault(); // Anula el comportamiendo por defecto de un elemento.

        let content = document.querySelector('.content'); // Busca un elemento por la clase content.

        content.classList.remove('animate__fadeInDown'); // Quita la animacion de entrada.

        content.classList.add('animate__fadeOutDown'); // Agrega una animacion de salida.

        // Navega a la pagina de inicio luego de 500 milisegundos.
        setTimeout(
            function () {
                location.href = '/lenguajes-web';
            },
            500
        );
    })
});
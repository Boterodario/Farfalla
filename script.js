document.addEventListener('DOMContentLoaded', () => {
    const botonesSumar = document.querySelectorAll('.sumar');
    const botonesRestar = document.querySelectorAll('.restar');
    const botonesComprar = document.querySelectorAll('.comprar');

    botonesSumar.forEach(boton => {
        boton.addEventListener('click', (e) => {
            const valorElemento = e.target.previousElementSibling;
            const cantidad = parseInt(valorElemento.textContent) + 1;
            valorElemento.textContent = cantidad;
            actualizarPrecioTotal(e.target, cantidad);
        });
    });

    botonesRestar.forEach(boton => {
        boton.addEventListener('click', (e) => {
            const valorElemento = e.target.nextElementSibling;
            let cantidad = parseInt(valorElemento.textContent);
            if (cantidad > 1) {
                cantidad -= 1;
                valorElemento.textContent = cantidad;
                actualizarPrecioTotal(e.target, cantidad);
            }
        });
    });

    botonesComprar.forEach(boton => {
        boton.addEventListener('click', (e) => {
            const producto = e.target.parentElement.querySelector('h3').textContent;
            const cantidad = e.target.parentElement.querySelector('.valor').textContent;
            const mensaje = `Hola, quiero comprar ${cantidad} unidades de ${producto}.`;
            const telefono = '3172850958'; // Reemplaza con tu número de WhatsApp
            window.open(`https://wa.me/${3172850958}?text=${encodeURIComponent("Descubre nuestra colección de pijamas cómodas, estilosas y perfectas para tus noches de descanso. 🛌💤"  )}`, '_blank');
            
        });
    });

    function actualizarPrecioTotal(elemento, cantidad) {
        const precioUnitarioTexto = elemento.parentElement.parentElement.querySelector('.precio-unitario').textContent;
        const precioUnitario = parseFloat(precioUnitarioTexto.replace('Precio: $', ''));
        const precioTotalElemento = elemento.parentElement.parentElement.querySelector('.precio-total');
        precioTotalElemento.textContent = (precioUnitario * cantidad).toFixed(2);
    }
});



function calcular() {
    var cantidad = document.getElementById("txtCantidad").value;
    var categoria = document.getElementById("selectCategoria").value;
    var total = document.getElementById("total");

    
    var descuento;

    switch (categoria) {
        case "1":
            descuento = 80;
            break;
        case "2":
            descuento = 50;
            break;
        case "3":
            descuento = 15;
            break;
        default:
            descuento = 0;
            break;
    }

    var precio = 200 * cantidad;
    
    total.innerText = "Total a Pagar: $" + (precio - (precio * descuento / 100));
}

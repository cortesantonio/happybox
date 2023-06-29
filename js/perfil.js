function switchInfo(){
    var info = document.getElementById("info");
    var pedidos = document.getElementById("pedidos");
    
    pedidos.style.display = "none";
    info.style.display = "block";
}function switchPedidos(){
    var info = document.getElementById("info");
    var pedidos = document.getElementById("pedidos");
    pedidos.style.display = "block";
    info.style.display = "none";
}
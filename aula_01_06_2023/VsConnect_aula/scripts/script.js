//alert("Hello World!!")

let menu = document.getElementById("menu_links")

function mostrarMenu(){
    //alert('Hello World !!!')
    if(window.getComputedStyle(menu).display == 'none'){
        // Mostre o menu
        menu.style.display = "flex";
    }else{
    // Esconde o menu
    menu.style.display = "none";
}

}
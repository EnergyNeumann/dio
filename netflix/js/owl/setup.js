$('.owl-carousel').owlCarousel({
    loop:true, // loop de ir para frente e trás acessando os animes infinitamente
    margin:10,
    nav:true, //botão para navegar entre tudo
    responsive:{
        0:{
            items:1 //estiver proximo de 0, ira mostrar só 1 item
        },
        200:{
            items:2
        },
        600:{
            items:3 //estiver proximo de 600, ira mostrar 3 itens e etc
        },
        1000:{
            items:5
        }
    }
})
// to toggle navbar button
var navToggler = document.querySelector(".navbar-toggler");

navToggler.addEventListener("click",function(){
    // console.log("it will work");
    this.classList.toggle("change");
})

// var navBar = document.querySelector(".navbar");
// window.addEventListener("scroll",function(){
//     let position = this.scroll(); 
//     if(position >= 150) {
//         navBar.classList.add('navbar-background');
//         navBar.classList.add('fixed-top');

//     }
//     else{
//         navBar.classList.remove('navbar-background');
//         navBar.classList.remove('fixed-top');
//     }
// })

  //smooth scroll
//   $('.nav-item a, .header-link,#back-to-top').click(function(link){
//     link.preventDefault();
//     let target= $(this).attr('href');
//     $('html,body').stop().animate({
//         scrollTop: $(target).offset().top - 25
//     },3000);
// })


// back to top
var backToTop = document.querySelector("#back-to-top");

window.addEventListener("scroll",function(){
    scrollFunction();
});

function scrollFunction(){
    if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTop.classList.add('scrollTop');
    }
    else{
        backToTop.classList.remove('scrollTop');
    }
}
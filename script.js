const allDivBtns = document.querySelectorAll('.custom-box-div-button');


function switchbtn(e){

    allDivBtns.forEach(each => {
        each.style.backgroundColor = "#EDEDED";
        each.style.color = '#1c1c1c';    
    });

    e.style.backgroundColor = "#46CE6C";
    e.style.color = '#fff';
}


const allAns = document.querySelectorAll('.add-icon');

function openAns(e){

    const doc = document.getElementById('ans-text-'+e);
    
    if(doc.style.display == 'block'){
        doc.style.display = 'none';
    } else {
        doc.style.display = 'block';
    }

}






// var swiper = new Swiper('.swiper', {
//     slidesPerView: 4,
//     direction: getDirection(),
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//     on: {
//       resize: function () {
//         swiper.changeDirection(getDirection());
//       },
//     },
//   });

//   function getDirection() {
//     var windowWidth = window.innerWidth;
//     var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

//     return direction;
//   }

new Splide( '.splide' ).mount( window.splide.Extensions );

  // document.addEventListener( 'DOMContentLoaded', function() {
  //   var splide = new Splide( '.splide' );
  //   splide.mount();
  // } );


  new Splide( '.splide', {
    type   : 'loop',
    drag   : 'free',
    focus  : 'center',
    perPage: 4,
    autoScroll: {
      speed: -2,
    },
  } );



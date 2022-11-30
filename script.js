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






var swiper = new Swiper('.swiper', {
    slidesPerView: 4,
    direction: getDirection(),
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    on: {
      resize: function () {
        swiper.changeDirection(getDirection());
      },
    },
  });

  function getDirection() {
    var windowWidth = window.innerWidth;
    var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

    return direction;
  }


  window.onload = function(e){ 

    window.setInterval(function(){

      const swiper = document.querySelector('.swiper-wrapper');

      const currentLast = swiper.lastElementChild.id;

      if(currentLast == 'slider-1'){
        const element = document.getElementById('slider-2');
        swiper.appendChild(element);
      }

      if(currentLast == 'slider-2'){
        const element = document.getElementById('slider-3');
        swiper.appendChild(element);
      }

      if(currentLast == 'slider-3'){
        const element = document.getElementById('slider-4');
        swiper.appendChild(element);
      }

      if(currentLast == 'slider-4'){
        const element = document.getElementById('slider-1');
        swiper.appendChild(element);
      }

      document.querySelector('.swiper-button-next').click();

    }, 5000);

  }



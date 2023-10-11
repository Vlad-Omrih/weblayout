tippy('[data-tippy-content]');

ymaps.ready(init);
function init(){
  var myMap = new ymaps.Map('map', {
    zoom: 12,
    center: [48.872185073737896,2.354223999999991],
    controls: []
});

  var myPlacemark = new ymaps.Placemark([48.872185073737896,2.354223999999991], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/map_pin.svg',
    iconImageSize: [28, 40],
    iconImageOffset: [-3, -42]
  });

  myMap.geoObjects.add(myPlacemark);
  myMap.behaviors.disable('scrollZoom')
}


document.querySelector(".header__btn-open").addEventListener("click", function() {
  document.querySelector(".nav").classList.add("active");
})
document.querySelector(".nav__close").addEventListener("click", function() {
  document.querySelector(".nav").classList.remove("active");
})

document.querySelector(".header__form-open").addEventListener("click", function() {
  document.querySelector(".header__form").classList.add("header__form-active");
  this.classList.add("active");
})
document.querySelector(".header__form-close").addEventListener("click", function() {
   let form = document.querySelector(".header__form");
  form.classList.remove("header__form-active");
    form.querySelector("input").value = "";
    document.querySelector(".header__form-open").classList.remove("active")
});

document.addEventListener("click", function(e) {
  let target = e.target;
  let form = document.querySelector(".header__form");
  if (!target.closest(".header__search")) {
  form.classList.remove("header__form-active");
    form.querySelector("input").value = "";
    document.querySelector(".header__form-open").classList.remove("active")
  }
})

let phone = document.querySelector("input[type='tel']")
var im = new Inputmask("+7 (999) 999-99-99")
im.mask(phone);
new window.JustValidate('.form', {
    colorWrong: '#D11616',
    rules: {
      name: {
        required: true
      },
      phone: {
        required: true,
        function: (name, value) => {
          const ph = phone.inputmask.unmaskedvalue();
          return Number(ph) && ph.length ===  10;
        }
    },
    },
   messages: {
         name: "Вы не ввели имя",
         phone: {
           required: "Вы не ввели телефон",
           function: "Не достаточно количество символов"
         }
       }
});


var modal = document.getElementById("myModal");
var images = document.getElementsByClassName('myImages');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

for (var i = 0; i < images.length; i++) {
  var img = images[i];
  // and attach our click listener for this image.
  img.onclick = function(evt) {
    modal.style.display = "block";
    document.body.style.overflow='hidden';
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  document.body.style.overflow='auto';
}



document.querySelectorAll(".dropdown__simplebar").forEach(dropdown => {
  new SimpleBar(dropdown, {
  autoHide: false,
  scrollbarMaxSize: 25,
});
})


const btns = document.querySelectorAll(".dropdown-btn");
const dropdowns = document.querySelectorAll(".dropdown");
const activeClassdropdowns = "dropdown__active";
const activeClassbtns = "btn__active";

btns.forEach(item => {
  item.addEventListener("click", function() {
    let DropThis = this.parentElement.querySelector(".dropdown");
    dropdowns.forEach(el => {
      if (el != DropThis) {
        el.classList.remove(activeClassdropdowns)
      }
    });
    btns.forEach(el => {
      if (el != this) {
        el.classList.remove(activeClassbtns)
      }
    });
    DropThis.classList.toggle(activeClassdropdowns);
    this.classList.toggle(activeClassbtns);
  })
})

document.addEventListener("DOMContentLoaded", function() {
  const selector = document.querySelector(".gallery__select")

  const choices = new Choices(selector, {
    searchEnabled: false,
    classNames: {
      containerOuter: 'choices gallery__choices',
     },
  });
});

new Accordion('.catalogy__list', {
	elementClass: 'accordion',
	triggerClass: 'accordion__control',
	panelClass: 'accordion__content',
	activeClass: 'accordion-active'
});

let btnRot = document.querySelectorAll('.accordion__btn');
let btnAcc = document.querySelectorAll('.catalogy__btn')

btnAcc.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    btnRot.forEach(function(btnRot1){ btnRot1.classList.remove('btn__check-active')});
    e.currentTarget.classList.add('btn__check-active');

    btnAcc.forEach(function(element){ element.classList.remove('btn__check-active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('btn__check-active');
  });
});

let tabsBtn = document.querySelectorAll('.tabs-btn');
let tabsItem = document.querySelectorAll('.catalogy-left');

tabsBtn.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function(btn){ btn.classList.remove('tabs__btn-active')});
    e.currentTarget.classList.add('tabs__btn-active');

    tabsItem.forEach(function(element){ element.classList.remove('tabs-active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-active');
  });
});

const container = document.querySelector("container")

const iventswiper = new Swiper('.ivents__swiper', {
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 50,
  direction: 'horizontal',
  loop: false,
  breakpoints: {
    1920: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    },
    1024:{
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 27,

    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 0,
    }
  },



  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
});

const projectswiper = new Swiper('.projects__swiper', {
  breakpoints: {
    320: {
      width: 195,
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 21,
      direction: 'horizontal',
      loop: true,
    },

  768: {
    width: 560,
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 34,
    direction: 'horizontal',
    loop: true,
  },

    1024: {
    width: 818,
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 50,
    edgeSwipeThreshold: 1000,
    direction: 'horizontal',
    loop: true,
  },



  1350: {
    width: 1170,
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 50,
    edgeSwipeThreshold: 1000,
    direction: 'horizontal',
    loop: true,
  },

  1650: {
    width: 1450,
    edgeSwipeThreshold: 0,
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 50,
    direction: 'horizontal',
    loop: true,
  }
  },

  navigation: {
    nextEl: '.projects-btn-next',
    prevEl: '.projects-btn-prev',
  },

});

const headerswiper = new Swiper('.header__swiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  speed: 2000,
  autoplay: {
    delay: 2000
  },
  effect: "fade",
  allowTouchMove: false,
  navigation: {
    nextEl: ".hero__swiper-button-next",
    prevEl: ".hero__swiper-button-prev"
  },
  pagination: {
    el: '.swiper-bullet-pagination',
    type: 'bullets',
    clickable: true
  }

});

const gallswiper = new Swiper('.gallery__swiper', {
  width: 1150,
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 50,
  breakpoints: {
    1650: {
      width: 1150,
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    },
    1024: {
      width: 595,
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 35,
    },
    974: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 60,
    },
    701: {
      width: 668,
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 38,
    },
    700: {
      width: 290,
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 0,
    },

    560: {
      width: 290,
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 0,
    },

    1: {
      width: 290,
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 0,
    },
  },

  pagination: {
    el: '.swiper__pagination-current',
    type: 'fraction',
  },


  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },


});

document.addEventListener("DOMContentLoaded", function () {
  const validation = new JustValidate('.form');
  const selector = document.querySelector("input[type='tel']");
  const im = new Inputmask("+7 (999)-999-99-99");
  im.mask(selector);

  validation
    .addField('.name', [{
        rule: 'minLength',
        value: 3,
        errorMessage: "Не достаточное количество символов"
      },
      {
        rule: 'maxLength',
        value: 5,
        errorMessage: "Вы ввели больше чем положено"
      }
    ])
    .addField('.mail', [{
        rule: 'required',
        errorMessage: 'Поле нужно заполнить',
      },
      {
        rule: 'email',
        errorMessage: 'Вы не корректно ввели email',
      }
    ])
    .addField('.tel', [{
      rule: "function",
      validator: function (name, value) {
        const phone = selector.inputmask.unmaskedvalue();
        return phone.length === 10
      },
      errorMessage: 'Не достаточное количество символов в строке',
    }]);
})



const images = [
    {
        image: "image/MaskGroup.jpg",
        alt: "alt",
        city: "Rostov-on-Don LCD admiral",
        apartmentArea: "81 m2",
        RepairTime: "3.5 months",
        RepairCost: "Upon request",
        content: "Only a small part of the work performed by our company is presented on the site. For 14 years on in the construction market we have made happy more than 1000 families"
    },
    {
        image: "image/MaskGroup1.jpg",
        alt: "alt",
        city: "Sochi Thieves",
        apartmentArea: "105 m2",
        RepairTime: "4 months",
        RepairCost: "Upon request",
        content: "Only a small part of the work performed by our company is presented on the site. For 14 years on in the construction market we have made happy more than 1000 families"
    },
    {
        image: "image/MaskGroup2.jpg",
        alt: "alt",
        city: "Rostov-on-Don triotic",
        apartmentArea: "93 m2",
        RepairTime: "3 months",
        RepairCost: "Upon request",
        content: "Only a small part of the work performed by our company is presented on the site. For 14 years on in the construction market we have made happy more than 1000 families"
    }
];

const buttonCity = document.querySelector('.middlenav');
const spanNavigation = document.querySelector('.spanNavigation');
const buttonPrev = document.querySelector('.prev');
const buttonNext = document.querySelector('.next');

const info = document.querySelector('.slider-content');
const img = document.querySelector('.img');
const navig = document.querySelector('.navig');

const city = document.querySelector('.city');
const repairTime = document.querySelector('.Repair-time');
const apartamentArea = document.querySelector('.apartament-area');
const repairCost = document.querySelector('.Repair-Cost');

let num = 0;

buttonPrev.addEventListener("click", prev);
buttonNext.addEventListener("click", next);


for (let i = 0; i < images.length; i++) {
    const newSpan = document.createElement('button');
    newSpan.id = [i];
    newSpan.className = 'tab';
    newSpan.textContent = images[i].city;
    buttonCity.appendChild(newSpan);

    if (i === num) {
        newSpan.classList.add('activeSpan');
    }
}
for (let i = 0; i < images.length; i++) {
    const spanNav = document.createElement('button');
    spanNav.id = [i];
    spanNav.className = 'spanNav';
    spanNavigation.appendChild(spanNav);

    if (i === num) {
        spanNav.classList.add('activeNavSpan');
    }
}

//Функции
function updateActiveSpan() {
  const spans = document.querySelectorAll('.tab');
  const spansNav = document.querySelectorAll('.spanNav');

  spans.forEach((button, index) => {
    if (index === num) {
      button.classList.add('activeSpan');
    } else {
      button.classList.remove('activeSpan');
    }
  });

  spansNav.forEach((button, index) => {
    if (index === num) {
        button.classList.add('activeNavSpan');
    } else {
        button.classList.remove('activeNavSpan');
    }
  })
}

function updateActiveButton(buttons, index, activeClass) {
  buttons.forEach((button, i) => {
    if (i === index) {
      button.classList.add(activeClass);
    } else {
      button.classList.remove(activeClass);
    }
  });
}

// Обработчики для кнопок spanNav
const spanNavButtons = document.querySelectorAll('.spanNav');
spanNavButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    num = index;
    updateActiveButton(spanNavButtons, num, 'activeNavSpan');
    updateActiveButton(document.querySelectorAll('.tab'), num, 'activeSpan');
    updateSlider();
  });
});

// Обработчики для кнопок tab
const tabButtons = document.querySelectorAll('.tab');
tabButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    num = index;
    updateActiveButton(tabButtons, num, 'activeSpan');
    updateActiveButton(document.querySelectorAll('.spanNav'), num, 'activeNavSpan');
    updateSlider();
  });
});

function updateSlider() {
  img.src = images[num].image;
  city.textContent = images[num].city;
  apartamentArea.textContent = images[num].apartmentArea;
  repairTime.textContent = images[num].RepairTime;
  repairCost.textContent = images[num].RepairCost;
  info.textContent = images[num].content;
}
function next() {
  num++;
  if (num >= images.length) {
    num = 0;
  }
  updateActiveSpan();
  updateSlider();
}
function prev() {
  num--;
  if (num < 0) {
    num = images.length - 1;
  }
  updateActiveSpan();
  updateSlider();
}

// Устанавливаем начальное изображение и информацию
updateSlider();

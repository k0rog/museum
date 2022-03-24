let veterans = [
  {id: 0, src: "./images/veterans/Азаров_.jpg"},
  {id: 1, src: "./images/veterans/аверин_.jpg"},
  {id: 2, src: "./images/veterans/Горский_.jpg"},
  {id: 3, src: "./images/veterans/Дмитриев_.jpg"},
  {id: 4, src: "./images/veterans/Козловский_.jpg"},
  {id: 5, src: "./images/veterans/Колчин_.jpg"},
  {id: 6, src: "./images/veterans/Ласица_.jpg"},
  {id: 7, src: "./images/veterans/Лейкин_.jpg"},
  {id: 8, src: "./images/veterans/Макаревич_.jpg"},
  {id: 9, src: "./images/veterans/Можайский_.jpg"},
  {id: 10, src: "./images/veterans/реутов_.jpg"},
  {id: 11, src: "./images/veterans/хацков.jpg"},
  {id: 12, src: "./images/veterans/Якубов_.jpg"},
];

const show = (src) => {
  let element = document.getElementById('full');
  // element.querySelector('img').classList.remove('show');
  // element.querySelector('img').classList.add('hide');
  // setTimeout(() => {
  element.querySelector('img').setAttribute('src', src);
  // element.querySelector('img').setAttribute('class', 'show');
  // }, 1000);
  addClass(src);
};

const addClass = (src) => {
  let elements = document.getElementById('carousel').children;
  for (let element of elements) {
    if (element.getAttribute('src') === src) {
      element.classList.add('active');
    } else {
      element.classList.remove('active');
    }
  }
};

const createImg = (veteran) => {
  let img = document.createElement('img');
  img.id = veteran.id;
  img.src = veteran.src;
  img.addEventListener('click', () => show(veteran.src));
  return img;
};

const createGallery = () => {
  let element = document.getElementById('carousel');
  for (let veteran of veterans) {
    element.appendChild(createImg(veteran));
  }
  document.getElementById('full').innerHTML = `<img class="show" src=${veterans[0].src}>`;
};
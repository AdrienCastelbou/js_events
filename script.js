// F1

let footer = document.getElementsByTagName('footer')[0];
let click_counter = 0;

footer.addEventListener('click', function () {
  click_counter ++ ;
  console.log('clique numero : ' + click_counter)
});

// F2

let burger_navbar = document.getElementById('navbarHeader');
let navbar_button = document.getElementsByClassName('navbar-toggler')[0];

navbar_button.addEventListener('click', function () {
  burger_navbar.classList.toggle('collapse');
})

// F3

let edit_button = document.getElementsByClassName('btn-outline-secondary')[0];

edit_button.addEventListener('click', function () {
  document.getElementsByClassName('card-text')[0].style.color = 'red';
})

// F4

let second_edit_button = document.getElementsByClassName('btn-outline-secondary')[1];
second_edit_button.addEventListener('click', function () {
  let text = document.getElementsByClassName('card-text')[1]
  if (text.style.color !== 'green') {
    text.style.color = 'green'
  }
  else {
    text.style.color = ''
  }
})

// F5

let bootstrap = document.getElementsByTagName('link')[0];

burger_navbar.addEventListener('dblclick', function (e) {
 if (bootstrap.disabled === true) {
   bootstrap.disabled = false
 }
 else {
   bootstrap.disabled = true
 }
})

// F6
/*
let cards_img = document.getElementsByClassName('card-img-top');
for (let index = 0; index < cards_img.length; index++) {
  cards_img[index].addEventListener('mouseover', function() {
    if (this.style.height === "20%") {
      this.style.height = '100%';
      this.style.width = '100%'
    }
    else {
    this.style.height = '20%';
    this.style.width = '20%'
    }
  })
}
*/

// F7

button_secondary = document.getElementsByClassName("btn-secondary")[0];
button_secondary.addEventListener('click', function (e) {
  e.preventDefault()
  let row = document.getElementsByClassName('row')[1];
  first_card = document.querySelectorAll('.col-md-4')[0];
  last_card = document.querySelectorAll('.col-md-4')[5];
  row.insertBefore(last_card, first_card);

})
// F8


button_primary = document.getElementsByClassName("btn-primary")[0];
button_primary.addEventListener('click', function (e) {
  e.preventDefault()
  let row = document.getElementsByClassName('row')[1];
  first_card = document.querySelectorAll('.col-md-4')[0];
  last_card = document.querySelectorAll('.col-md-4')[5];
  row.insertBefore(first_card, last_card.nextSibling);

})

// F9

title = document.getElementsByTagName('strong')[0];
title.addEventListener('keydown', function(e) {
  e.preventDefault();
  console.log('a')
})






let donateOpen = document.getElementById("donateOpen"),
    donateClose = document.getElementById("donateClose"),
    donateModal = document.getElementById("donateModal"),
    donateOpenMobile = document.getElementById("donateOpenMobile"),
    mobileOpen = document.getElementById("mobileOpen"),
    mobileClose = document.getElementById("mobileClose"),
    mobileMenu = document.getElementById("mobileMenu"),
    sortButton = document.getElementById("sortButton"),
    sortInterface = document.getElementById("sortInterface")

var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

var supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; } 
  }));
} catch(e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

function disableScroll() {
  window.addEventListener('DOMMouseScroll', preventDefault, false); 
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); 
  window.addEventListener('touchmove', preventDefault, wheelOpt); 
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

function enableScroll() {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
  window.removeEventListener('touchmove', preventDefault, wheelOpt);
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}

donateOpen.addEventListener("click", function(event){
  event.preventDefault()
  donateModal.classList.remove("hidden")
  disableScroll()
  document.body.style.overflowY = "hidden"
})

donateClose.addEventListener("click", function(event){
  event.preventDefault()
  donateModal.classList.add("hidden")
  enableScroll()
  document.body.style.overflowY = "auto"
})

donateOpenMobile.addEventListener("click", function(event){
  event.preventDefault()
  donateModal.classList.remove("hidden")
  disableScroll()
  document.body.style.overflowY = "hidden"
})

mobileOpen.addEventListener("click", function(event){
  event.preventDefault()
  mobileMenu.classList.remove("hidden")
  disableScroll()
  document.body.style.overflowY = "hidden"
})

mobileClose.addEventListener("click", function(event){
  event.preventDefault()
  mobileMenu.classList.add("hidden")
  enableScroll()
  document.body.style.overflowY = "auto"
})

sortButton.addEventListener("click", function(event){
  event.preventDefault()
  sortInterface.classList.toggle("hidden")
})

// Donate

let donate10 = document.getElementById("donate10"),
    donate50 = document.getElementById("donate50"),
    donate100 = document.getElementById("donate100"),
    donate250 = document.getElementById("donate250"),
    donate500 = document.getElementById("donate500"),
    donate1000 = document.getElementById("donate1000"),
    donateInput = document.getElementById("donateInput")

donate10.addEventListener("click", function(event){
  event.preventDefault()
  donateInput.value = 10
})

donate50.addEventListener("click", function(event){
  event.preventDefault()
  donateInput.value = 50
})

donate100.addEventListener("click", function(event){
  event.preventDefault()
  donateInput.value = 100
})

donate250.addEventListener("click", function(event){
  event.preventDefault()
  donateInput.value = 250
})

donate500.addEventListener("click", function(event){
  event.preventDefault()
  donateInput.value = 500
})

donate1000.addEventListener("click", function(event){
  event.preventDefault()
  donateInput.value = 1000
})

let dogs = document.getElementById("dogs"),
    cats = document.getElementById("cats"),
    other = document.getElementById("other"),
    male = document.getElementById("male"),
    female = document.getElementById("female"),
    young = document.getElementById("young"),
    adult = document.getElementById("adult"),
    senior = document.getElementById("senior")

dogs.addEventListener("click", function(event){
  event.preventDefault()
  dogs.classList.toggle("active-button")
  cats.classList.remove("active-button")
  other.classList.remove("active-button")
})

cats.addEventListener("click", function(event){
  event.preventDefault()
  cats.classList.toggle("active-button")
  dogs.classList.remove("active-button")
  other.classList.remove("active-button")
})

other.addEventListener("click", function(event){
  event.preventDefault()
  other.classList.toggle("active-button")
  cats.classList.remove("active-button")
  dogs.classList.remove("active-button")
})

male.addEventListener("click", function(event){
  event.preventDefault()
  male.classList.toggle("active-button")
  female.classList.remove("active-button")
})

female.addEventListener("click", function(event){
  event.preventDefault()
  female.classList.toggle("active-button")
  male.classList.remove("active-button")
})

young.addEventListener("click", function(event){
  event.preventDefault()
  young.classList.toggle("active-button")
  adult.classList.remove("active-button")
  senior.classList.remove("active-button")
})

adult.addEventListener("click", function(event){
  event.preventDefault()
  adult.classList.toggle("active-button")
  young.classList.remove("active-button")
  senior.classList.remove("active-button")
})

senior.addEventListener("click", function(event){
  event.preventDefault()
  senior.classList.toggle("active-button")
  adult.classList.remove("active-button")
  young.classList.remove("active-button")
})
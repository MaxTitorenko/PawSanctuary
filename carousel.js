const head = [
    "We Want Your Love",
    "Save a life, adopt a pet",
    "Adopt, don't shop"
];
const text = [
    "Looking for a furry friend to bring joy and love into your home? Look no further! At Paw Sanctuary, we believe that every animal deserves a loving forever home. Our sanctuary is populated with adorable animals eagerly waiting to become part of your family.",
    "By welcoming a furry friend from Paw Sanctuary into your life, you're not only enriching your own life but also contributing to a greater cause of animal welfare and rescue. Together, we can make a difference, one adoption at a time. So, take the leap, open your heart, and let the paws of love from Paw Sanctuary leave an everlasting imprint on your life.",
    "When you choose to adopt from Paw Sanctuary, you're not just giving an animal a second chance; you're gaining a loyal companion who will fill your life with joy, laughter, and unconditional love. Whether it's a playful pup, a majestic feline, or a gentle rabbit, each animal has a unique story and a resilient spirit waiting to blossom in a loving home."
];
const color = ["#4890D1", "#4BB54F", "#AF4F60"];
const textBgColor = ["#001C64bd", "#004D08bd", "#4D001Cbd"];
const image = ["images/carro1img.webp", "images/carro2img.webp", "images/carro3img.webp"];
const bg = ['url("images/carro1bg.webp")', 'url("images/carro2bg.webp")', 'url("images/carro3bg.webp")'];

let carousel = document.getElementById("carousel"),
    carouselHead = document.getElementById("carouselHead"),
    carouselText = document.getElementById("carouselText"),
    carouselTextContainer = document.getElementById("carouselTextContainer"),
    carouselImg = document.getElementById("carouselImg"),
    carouselSelect1 = document.getElementById("carouselSelect1"),
    carouselSelect2 = document.getElementById("carouselSelect2"),
    carouselSelect3 = document.getElementById("carouselSelect3"),
    carouselSelected1 = document.getElementById("carouselSelected1"),
    carouselSelected2 = document.getElementById("carouselSelected2"),
    carouselSelected3 = document.getElementById("carouselSelected3")

function caro1Selected(){
    carouselSelected1.classList.remove("hidden")
    carouselSelected2.classList.add("hidden")
    carouselSelected3.classList.add("hidden")

    carouselHead.innerText = head[0]
    carouselText.innerText = text[0]
    carousel.style.backgroundColor = color[0]
    carouselTextContainer.style.backgroundColor = textBgColor[0]
    carousel.style.backgroundImage = bg[0]
    carouselImg.src = image[0]
}

function caro2Selected(){
    carouselSelected1.classList.add("hidden")
    carouselSelected2.classList.remove("hidden")
    carouselSelected3.classList.add("hidden")

    carouselHead.innerText = head[1]
    carouselText.innerText = text[1]
    carousel.style.backgroundColor = color[1]
    carouselTextContainer.style.backgroundColor = textBgColor[1]
    carousel.style.backgroundImage = bg[1]
    carouselImg.src = image[1]
}

function caro3Selected(){
    carouselSelected1.classList.add("hidden")
    carouselSelected2.classList.add("hidden")
    carouselSelected3.classList.remove("hidden")

    carouselHead.innerText = head[2]
    carouselText.innerText = text[2]
    carousel.style.backgroundColor = color[2]
    carouselTextContainer.style.backgroundColor = textBgColor[2]
    carousel.style.backgroundImage = bg[2]
    carouselImg.src = image[2]
}

carouselSelect1.addEventListener("click", function(event){
    event.preventDefault()
    caro1Selected()
    clearInterval(timedCarousel)
    i = 0
    let timedCarousel = setInterval(timedCarouselChange, 10000)
})

carouselSelect2.addEventListener("click", function(event){
    event.preventDefault()
    caro2Selected()
    clearInterval(timedCarousel)
    i = 1
    let timedCarousel = setInterval(timedCarouselChange, 10000)
})

carouselSelect3.addEventListener("click", function(event){
    event.preventDefault()
    caro3Selected()
    clearInterval(timedCarousel)
    i = 2
    let timedCarousel = setInterval(timedCarouselChange, 10000)
})

let i = 1

function timedCarouselChange(){
  if (i == 0){
    caro1Selected()
    i += 1
  }else if(i == 1){
    caro2Selected()
    i += 1
  }else if(i == 2){
    caro3Selected()
    i = 0
  }
}

let timedCarousel = setInterval(timedCarouselChange, 10000)
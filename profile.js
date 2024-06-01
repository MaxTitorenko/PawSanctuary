let displayedImg = document.getElementById("displayedImg"),
    prevImg = document.getElementById("prevImg"),
    nextImg = document.getElementById("nextImg"),
    imageContainer = document.getElementById("imageContainer"),
    profileHeader = document.getElementById("profileHeader"),
    profileName = document.getElementById("profileName"),
    profileBreed = document.getElementById("profileBreed"),
    profileAge = document.getElementById("profileAge"),
    profileFee = document.getElementById("profileFee"),
    profileDescription = document.getElementById("profileDescription"),
    profileDesexed = document.getElementById("profileDesexed"),
    profileVaccinated = document.getElementById("profileVaccinated"),
    nothingHere = document.getElementById("nothingHere")

let images = ["images/Rockstar/photo1.webp",
                "images/Rockstar/photo2.webp",
                "images/Rockstar/photo3.webp",
                "images/Rockstar/photo4.webp"]

let images2 = ["images/Barbie/photo1.jpg",
                "images/Barbie/photo2.jpg",
                "images/Barbie/photo3.webp",
                "images/Barbie/photo4.webp",
                "images/Barbie/photo4.webp",
                "images/Barbie/photo5.webp",
                "images/Barbie/photo6.webp"]

let images3 = ["images/Pepe/photo1.jpg",
                "images/Pepe/photo2.jpg",
                "images/Pepe/photo3.jpg"]

let rockstarDescription = "Introducing Rockstar, a one-year-and-one-month-old female domestic short hair cat with a striking black and white coat. With her captivating appearance and charming personality, Rockstar is sure to steal your heart. Rockstar's sleek coat and mesmerizing amber eyes make her a true beauty. Whether she's exploring her surroundings with boundless curiosity or cuddling up for a cozy nap, she radiates elegance and grace. This adventurous feline is always ready for new experiences, yet she also enjoys quiet moments of companionship. Whether she's chasing after toys or lounging in a sunny spot, Rockstar's playful spirit is infectious. If you're looking for a furry friend who can bring joy and laughter into your home, look no further than Rockstar. With her magnetic personality and gentle nature, she's ready to become the star of your household. Adopt Rockstar today and let her brighten your life with her irresistible charm."
let barbieDescription = "Meet Barbie, a stunning 2-year-and-9-month-old female German Shepherd with a sleek black coat and a heart full of love. Barbie is a picture of grace and loyalty, embodying all the qualities that make German Shepherds such beloved companions. With her intelligent eyes and noble bearing, Barbie commands attention wherever she goes. She has a regal presence that reflects her confident and determined nature. Despite her striking appearance, Barbie is as gentle as she is majestic, always eager to shower her family with affection and devotion. Barbie is a true adventurer at heart, ready to accompany you on any journey life may bring. Whether it's exploring the great outdoors or lounging by your side at home, she is happiest when she's by your side. With her boundless energy and playful spirit, Barbie is sure to bring joy and excitement to your household. If you're searching for a loyal and loving companion to join your family, look no further than Barbie. Adopt this beautiful German Shepherd today and discover the endless love and companionship she has to offer."
let pepeDescription = "Introducing Pepe, a charming 2-year-and-6-month-old male ferret with a personality as vibrant as his coat. Pepe is a delightful little fellow, known for his playful antics and boundless curiosity. With his sleek fur and mischievous eyes, Pepe is the epitome of ferret charm. He's always ready for adventure, whether it's exploring new hiding spots or frolicking with his favorite toys. Pepe's energetic spirit and inquisitive nature make him a joy to be around, and his playful antics are sure to keep you entertained for hours on end. Despite his small size, Pepe has a big heart full of love to give. He adores spending time with his human friends, eagerly seeking out cuddles and affection whenever he can. Whether he's snuggled up in your lap or playfully chasing after your shoelaces, Pepe's sweet and affectionate nature is impossible to resist. If you're looking for a furry friend who's full of personality and charm, look no further than Pepe. With his playful spirit and loving disposition, he's sure to bring laughter and joy into your home. Adopt Pepe today and discover the endless love and companionship that this adorable ferret has to offer."

class Animal {
    constructor(Species, Name, Gender, Breed, Age, Maturity, Fee, Desexed, Vaccinated, Pictures, Caption, Description) {
        this.species = Species
        this.name = Name
        this.gender = Gender
        this.breed = Breed
        this.age = Age
        this.maturity = Maturity
        this.fee = Fee
        this.desexed = Desexed
        this.vaccinated = Vaccinated
        this.pictures = Pictures
        this.caption = Caption
        this.description = Description
    }
}

let Rockstar = new Animal("Cat", "Rockstar", "Female", "Domestic short hair", "1 year 1 month", "Young", 100, true, false, images, "Looking for love", rockstarDescription)
let Barbie = new Animal("Dog", "Barbie", "Female", "German Shepherd", "2 years 9 months", "Adult", 500, true, true, images2, "Smart and loving", barbieDescription)
let Pepe = new Animal("Ferret", "Pepe", "Male", "Ferret", "2 years 6 months", "Adult", 200, true, true, images3, "Loves to play", pepeDescription)

let animals = []
animals.push(Rockstar)
animals.push(Barbie)
animals.push(Pepe)

let adress = window.location.href.toString()
let id = parseInt(adress.slice(adress.indexOf("#") + 1) - 1)

if(isNaN(id) == true){
    nothingHere.classList.remove("hidden")
    document.body.style.overflowY = "hidden"
}

let i = 0
let pic

function fetchImgesToDOM(){
    for(element in animals[id].pictures){
        if(element == 0){
            pic = document.createElement("img")
            pic.classList.add("gallery-image")
            pic.classList.add("active-image")
            pic.src = animals[id].pictures[element]
            imageContainer.appendChild(pic)
            displayedImg.src = animals[id].pictures[element]
        }else{
            pic = document.createElement("img")
            pic.classList.add("gallery-image")
            pic.src = animals[id].pictures[element]
            imageContainer.appendChild(pic)
        }
    }
}

fetchImgesToDOM()

profileHeader.innerText = animals[id].name
profileName.innerText = animals[id].name
profileBreed.innerText = animals[id].gender + " " +  animals[id].breed
profileAge.innerText = animals[id].age + " (" + animals[id].maturity + ")"
profileFee.innerText = animals[id].fee
profileDescription.innerText = animals[id].description

if(animals[id].desexed == true){
    profileDesexed.innerText = "+"
    profileDesexed.classList.add("positive")
}else{
    profileDesexed.innerText = "-"
    profileDesexed.classList.add("negative")
}

if(animals[id].vaccinated == true){
    profileVaccinated.innerText = "+"
    profileVaccinated.classList.add("positive")
}else{
    profileVaccinated.innerText = "-"
    profileVaccinated.classList.add("negative")
}


let imageArr = document.querySelectorAll("img.gallery-image")

imageArr.forEach((element) => 
    element.addEventListener("click", function(event){
        event.preventDefault()
        i = Array.from(imageArr).indexOf(element)
        imageArr.forEach((imgElement) => imgElement.style.opacity = "70%")
        imageArr[i].style.opacity = "100%"
        displayedImg.src = animals[id].pictures[i]
    }))

function buttonLogic(){
    if(i < 0){
        i = imageArr.length - 1
        displayedImg.src = animals[id].pictures[i] 
        imageArr.forEach((element) => element.style.opacity = "70%")
        imageArr[i].style.opacity = "100%"
    }else if(i > (imageArr.length-1)){
        i = 0
        displayedImg.src = animals[id].pictures[i]
        imageArr.forEach((element) => element.style.opacity = "70%")
        imageArr[i].style.opacity = "100%"
    }else{
        displayedImg.src = animals[id].pictures[i]
        imageArr.forEach((element) => element.style.opacity = "70%")
        imageArr[i].style.opacity = "100%"
    }
}

prevImg.addEventListener("click", function(event){
    event.preventDefault()
    i -= 1
    buttonLogic()
})

nextImg.addEventListener("click", function(event){
    event.preventDefault()
    i += 1
    buttonLogic()
})
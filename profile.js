let displayedImg = document.getElementById("displayedImg"),
    prevImg = document.getElementById("prevImg"),
    nextImg = document.getElementById("nextImg"),
    imageContainer = document.getElementById("imageContainer"),
    profileHeader = document.getElementById("profileHeader"),
    profileName = document.getElementById("profileName"),
    profileBreed = document.getElementById("profileBreed"),
    profileAge = document.getElementById("profileAge"),
    profileFee = document.getElementById("profileFee"),
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
                "images/Barbie/photo5.webp",
                "images/Barbie/photo6.webp"]

let images3 = ["images/Pepe/photo1.jpg",
                "images/Pepe/photo2.jpg",
                "images/Pepe/photo3.jpg"]

class Animal {
    constructor(Species, Name, Gender, Breed, Age, Maturity, Fee, Desexed, Vaccinated, Pictures, Caption) {
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
    }
}

let Rockstar = new Animal("Cat", "Rockstar", "Female", "Domestic short hair", "1 year 1 month", "Young", 100, true, false, images, "Looking for love")
let Barbie = new Animal("Dog", "Barbie", "Female", "German Shepherd", "2 years 9 months", "Adult", 500, true, true, images2, "Smart and loving")
let Pepe = new Animal("Ferret", "Pepe", "Male", "Ferret", "2 years 6 months", "Adult", 200, true, true, images3, "Loves to play")

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
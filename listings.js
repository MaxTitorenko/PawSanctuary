let adoptListings = document.getElementById("adoptListings"),
    loadMore = document.getElementById("loadMore")

for(pet in animals){
    let link = document.createElement("a"),
        card = document.createElement("div"),
        cardImg = document.createElement("img"),
        cardName = document.createElement("p"),
        cardBreed = document.createElement("p"),
        cardDescription = document.createElement("p"),
        cardAdress = document.createElement("p")

    link.href = "animalprofile.html" + "#" + (parseInt(pet) + 1)
    card.classList.add("adopt-card")
    cardImg.classList.add("card-image")
    cardImg.src = animals[pet].pictures[0]
    cardName.classList.add("card-pet-name")
    cardBreed.classList.add("card-animal-desc")
    cardDescription.classList.add("card-animal-desc")
    cardAdress.classList.add("card-animal-desc")

    cardName.innerText = animals[pet].name
    cardBreed.innerText = animals[pet].breed
    cardDescription.innerText = animals[pet].caption
    cardAdress.innerText = "729 Beverly"

    if(animals[pet].gender == "Female"){
        cardName.classList.add("female")
    }else{
        cardName.classList.add("male")
    }

    adoptListings.insertBefore(link, loadMore)
    link.appendChild(card)
    card.appendChild(cardImg)
    card.appendChild(cardName)
    card.appendChild(cardBreed)
    card.appendChild(cardDescription)
    card.appendChild(cardAdress)
}

function fillPlaceholderCards(quant){
    for(let i = 0; i < quant; i++){
        let link = document.createElement("a"),
            card = document.createElement("div"),
            cardImg = document.createElement("img"),
            cardName = document.createElement("p"),
            cardBreed = document.createElement("p"),
            cardDescription = document.createElement("p"),
            cardAdress = document.createElement("p")

        link.href = "animalprofile.html"
        card.classList.add("adopt-card")
        cardImg.classList.add("card-image")
        cardImg.src = "images/adoptcardplaceholder.webp"
        cardName.classList.add("card-pet-name")
        cardBreed.classList.add("card-animal-desc")
        cardDescription.classList.add("card-animal-desc")
        cardAdress.classList.add("card-animal-desc")

        cardName.innerText = "PetName"
        cardBreed.innerText = "PetBreed"
        cardDescription.innerText = "PetDescription"
        cardAdress.innerText = "729 Beverly"

        cardName.classList.add("female")

        adoptListings.insertBefore(link, loadMore)
        link.appendChild(card)
        card.appendChild(cardImg)
        card.appendChild(cardName)
        card.appendChild(cardBreed)
        card.appendChild(cardDescription)
        card.appendChild(cardAdress)
    }
}

fillPlaceholderCards(20 - animals.length)

loadMore.addEventListener("click", function(event){
    event.preventDefault()
    fillPlaceholderCards(20)
})
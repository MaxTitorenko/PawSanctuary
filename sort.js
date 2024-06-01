let dogs = document.getElementById("dogs"),
    cats = document.getElementById("cats"),
    other = document.getElementById("other"),
    male = document.getElementById("male"),
    female = document.getElementById("female"),
    young = document.getElementById("young"),
    adult = document.getElementById("adult"),
    senior = document.getElementById("senior"),
    sortButton = document.getElementById("sortButton"),
    sortInterface = document.getElementById("sortInterface")

let allListings = document.querySelectorAll("a.adopt-link")

sortButton.addEventListener("click", function(event){
    event.preventDefault()
    sortInterface.classList.toggle("hidden")
  })

dogs.addEventListener("click", function(event){
  event.preventDefault()
  dogs.classList.toggle("active-button")
  cats.classList.remove("active-button")
  other.classList.remove("active-button")

  allListings.forEach((element) => element.classList.add("hidden"))

  if(dogs.classList.contains("active-button")){
    for(listing in allListings){
      if(animals[listing].species == "Dog"){
        allListings[listing].classList.remove("hidden")
      }
    }
  }else{
    for(listing in allListings){
      allListings[listing].classList.remove("hidden")
    }
  }
  
})

cats.addEventListener("click", function(event){
  event.preventDefault()
  cats.classList.toggle("active-button")
  dogs.classList.remove("active-button")
  other.classList.remove("active-button")

  allListings.forEach((element) => element.classList.add("hidden"))

  if(cats.classList.contains("active-button")){
    for(listing in allListings){
      if(animals[listing].species == "Cat"){
        allListings[listing].classList.remove("hidden")
      }
    }
  }else{
    for(listing in allListings){
      allListings[listing].classList.remove("hidden")
    }
  }
})

other.addEventListener("click", function(event){
  event.preventDefault()
  other.classList.toggle("active-button")
  cats.classList.remove("active-button")
  dogs.classList.remove("active-button")

  allListings.forEach((element) => element.classList.add("hidden"))

  if(other.classList.contains("active-button")){
    for(listing in allListings){
      if(animals[listing].species !== "Cat" && animals[listing].species !== "Dog"){
        allListings[listing].classList.remove("hidden")
      }
    }
  }else{
    for(listing in allListings){
      allListings[listing].classList.remove("hidden")
    }
  }
})

male.addEventListener("click", function(event){
  event.preventDefault()
  male.classList.toggle("active-button")
  female.classList.remove("active-button")

  allListings.forEach((element) => element.classList.add("hidden"))

  if(male.classList.contains("active-button")){
    for(listing in allListings){
      if(animals[listing].gender == "Male"){
        allListings[listing].classList.remove("hidden")
      }
    }
  }else{
    for(listing in allListings){
      allListings[listing].classList.remove("hidden")
    }
  }
})

female.addEventListener("click", function(event){
  event.preventDefault()
  female.classList.toggle("active-button")
  male.classList.remove("active-button")

  allListings.forEach((element) => element.classList.add("hidden"))

  if(female.classList.contains("active-button")){
    for(listing in allListings){
      if(animals[listing].gender == "Female"){
        allListings[listing].classList.remove("hidden")
      }
    }
  }else{
    for(listing in allListings){
      allListings[listing].classList.remove("hidden")
    }
  }
})

young.addEventListener("click", function(event){
  event.preventDefault()
  young.classList.toggle("active-button")
  adult.classList.remove("active-button")
  senior.classList.remove("active-button")

  allListings.forEach((element) => element.classList.add("hidden"))

  if(young.classList.contains("active-button")){
    for(listing in allListings){
      if(animals[listing].maturity == "Young"){
        allListings[listing].classList.remove("hidden")
      }
    }
  }else{
    for(listing in allListings){
      allListings[listing].classList.remove("hidden")
    }
  }
})

adult.addEventListener("click", function(event){
  event.preventDefault()
  adult.classList.toggle("active-button")
  young.classList.remove("active-button")
  senior.classList.remove("active-button")

  allListings.forEach((element) => element.classList.add("hidden"))

  if(adult.classList.contains("active-button")){
    for(listing in allListings){
      if(animals[listing].maturity == "Adult"){
        allListings[listing].classList.remove("hidden")
      }
    }
  }else{
    for(listing in allListings){
      allListings[listing].classList.remove("hidden")
    }
  }
})

senior.addEventListener("click", function(event){
  event.preventDefault()
  senior.classList.toggle("active-button")
  adult.classList.remove("active-button")
  young.classList.remove("active-button")

  allListings.forEach((element) => element.classList.add("hidden"))

  if(senior.classList.contains("active-button")){
    for(listing in allListings){
      if(animals[listing].maturity == "Senior"){
        allListings[listing].classList.remove("hidden")
      }
    }
  }else{
    for(listing in allListings){
      allListings[listing].classList.remove("hidden")
    }
  }
})
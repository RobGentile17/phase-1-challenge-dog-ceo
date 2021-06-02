console.log('%c HI', 'color: firebrick')

let dogBreeds = []

// img[0]= "https://images.dog.ceo/breeds/african/n02116738_9748.jpg"
// img[1] = "https://images.dog.ceo/breeds/eskimo/n02109961_2706.jpg"
// img[2] = "https://images.dog.ceo/breeds/bluetick/n02088632_3737.jpg"
// img[3] = "https://images.dog.ceo/breeds/springer-english/n02102040_4037.jpg"

const imageElement = document.createElement('img')

const img = document.querySelectorAll('img')

//document.querySelector("#dog-image-container").append(imageElement)

    function loadAllImages () {
        const imgURL = "https://dog.ceo/api/breeds/image/random/4" 
        fetch(imgURL )
        .then(response => response.json())
        .then(results => {
        results.message.forEach(image =>addImage(image))
    })};

    function addImage (dogUrl) {
        let dogHouse = document.querySelector('#dog-image-container')
        let imageElement = document.createElement('img')
        imageElement.src = dogUrl
        imageElement.width = "300";
        dogHouse.append(imageElement)
    }

    function loadAllBreeds(){
        const breedUrl = 'https://dog.ceo/api/breeds/list/all'
        fetch(breedUrl)
        .then(response => response.json())
        .then(results => {

            dogBreeds = Object.keys(results.message)
            newBreedList(dogBreeds)
            
        });
    }
    
    function newBreedList (dogBreeds) {
        let ul = document.querySelector('#dog-breeds')
        dogBreeds.forEach(dogBreed => {
          const dogList = document.createElement('li')
          ul.append(dogList)
          dogList.innerText = dogBreed
          dogList.addEventListener("click" , function(event) {
            event.target.style.color = 'red'
          }
          )}
        )}


    document.addEventListener('DOMContentLoaded', function () {
        loadAllImages()
        loadAllBreeds()
        let dogDropdown = document.querySelector("#breed-dropdown")
        dogDropdown.addEventListener('change' , function(event) {
            //when you click the drop down and select a letter
            // only dog breeds starting with that letter appear
            // all others would disapear 
            let listOfNames = document.querySelector('#dog-breeds').getElementsByTagName('li')
            let arrayOfNames = [...listOfNames]
            arrayOfNames.forEach(li => {
                if(li.innerText[0] === dogDropdown.value) {
                    li.hidden = false
                }else { li.hidden = true

                }
            }) 
        })

    })




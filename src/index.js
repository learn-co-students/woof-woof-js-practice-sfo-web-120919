

document.addEventListener('DOMContentLoaded',(event) => {
    console.log('DOM fully loaded and parsed');

    fetchDogData();

    const dogSpan = document.createElement("span")
  

function fetchDogData(){

    let dogBar = document.getElementById("dog-bar")
    fetch("http://localhost:3000/pups")
    .then(function(resp){
        return resp.json();
    }).then(function(data){
        
        data.forEach(function(dog){ 
           
            const dogSpan = document.createElement("span")
            const dogName = dog.name
            dogSpan.innerText = dogName
            dogBar.appendChild(dogSpan)
            dogSpan.dataset.id = dog.id
            dogSpan.dataset.name = dog.name
            dogSpan.dataset.image = dog.image
            dogSpan.dataset.isGoodDog = dog.isGoodDog

            
            dogSpan.addEventListener("click", displayClickedDogInfo)
            // adding the id, name and image to the dog span, 
            //then we want to add the eventlistener on the dogSpan
        }) 
        
        
    })

}//here is where the fetch dogs ends

function displayClickedDogInfo(event){
    //`image`, `name`, and `isGoodDog`
   //create div for each attribute
   const dogInfo = document.getElementById("dog-info")
   //this is the div for the doggos
   const dogName = document.createElement("H2")
   const dogImage = document.createElement("img")
   let goodBoyButton = document.createElement("button")
   let dogId = document.createElement("li")
   
   console.log(dogInfo)
   dogImage.src = event.target.dataset.image
   
   //here i am saying if the dog has a gooddog truthy put good dog else put bad dog
   goodBoyButton.innerText = event.target.dataset.isGoodDog
   if (event.target.dataset.isGoodDog){
    goodBoyButton.innerText = "Good Dog!"
   } else {
    goodBoyButton.innerText = "Bad Dog!"
   }

   dogName.innerText = event.target.dataset.name
   dogInfo.appendChild(dogName)
   dogInfo.appendChild(dogImage)
   dogInfo.appendChild(goodBoyButton)

   toggleDogStatusButtonOnEventListener(goodBoyButton);
}


function toggleDogStatusButtonOnEventListener(goodBoyButton){
goodBoyButton.addEventListener("click", function(event){
    
    if (event.target.innerText === "Good Dog!"){
        event.target.innerText = "Bad Dog!"
    } else {
        event.target.innerText = "Good Dog!"
    }
    //want to add an event listener on the good dog or bad dog button. if the button is good dog change it to bad dog
})
}

let filterButton = document.getElementById("good-dog-filter")

//change the inner text of the filter button to filter ON//
//    filterButton.inner
filterButton.addEventListener("click", function filterGoodDogs(event){

    let all_dogs = [...document.querySelectorAll("#dog-bar > span")]

    if (event.target.innerText == "Filter good dogs: OFF") {
        event.target.innerText = "Filter good dogs: ON"

        all_dogs.forEach(dog => {
            if (dog.dataset.isGoodDog === "false") {
                dog.style.display = "none"
    
            } 
            
            
        })
    } else {
        event.target.innerText = "Filter good dogs: OFF"
        all_dogs.forEach(dog => {
                dog.style.display = "flex"
    
        })
    }
        
   
    console.log(all_dogs)


    //document.querySelectorAll("#dog-bar > span")[0].style.display = "flex"
    
    
    let filtereddogs = all_dogs.filter(dog => dog.isGoodDog === true)

   
    // for (let i = 0; i < all_dogs.length; i++){
    //     all_dogs[i] 
    // }
   
    
    //get all dogs and iterate over them
    //display dogs only with goodboy status true
    //change button to filter on
})


   

});

//

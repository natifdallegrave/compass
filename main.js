



function loadDogs(){
const url = `https://dog.ceo/api/breeds/image/random/3`
var dogs = new Array();
fetch(url)
.then((res) => {
    if(res.ok){
        return res.json()
         

    }
    else{
       throw new Error("error") 
    }
  
}).then((data) => {dogs = data.message;
    for(let dog in dogs){
        const imageDiv = document.getElementById("image");
        const dogImg = document.createElement("img");
        dogImg.className = "img";
        dogImg.src= dogs[dog];
        console.log(dogImg);
        imageDiv.appendChild(dogImg);
        // document.body.style.backgroundImage = `url('${dogs}')`
    }
console.log(dogs)} )
.catch((error)=>
console.log(error)
)
    
    // dogImage
    

    
}


        
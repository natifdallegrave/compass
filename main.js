
function loadDogs(){
const url = `https://dog.ceo/api/breeds/image/random/1`
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
    // for(let dog in dogs){
        const imageDiv = document.getElementById("img1");
        // const dogImg = document.createElement("img");
        imageDiv.className = "img";
        imageDiv.src= dogs;
        console.log(dogImg);
        // imageDiv.appendChild(dogImg);
        // document.body.style.backgroundImage = `url('${dogs}')`
    // }
console.log(dogs)} )
.catch((error)=>
console.log(error)
)
    
    // dogImage
    

    
}


function procura(){
    var variavel = document.getElementById("achei").value;
    const url = `https://dog.ceo/api/breed/${variavel}/images/random`
    console.log(url)
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
        const imageDiv = document.getElementById("img");
        imageDiv.className = "img";
        imageDiv.src= dogs;
        console.log(dogImg);
        // imageDiv.appendChild(dogImg);
        // document.body.style.backgroundImage = `url('${dogs}')`
    
    console.log(dogs)} )
    .catch((error)=>
    console.log(error)
    )
        
        // dogImage
        
    
        
    }
        
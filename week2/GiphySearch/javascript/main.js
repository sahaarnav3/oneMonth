//let input = "";
let input = document.querySelector(".js-userinput").value;

document.querySelector(".js-go").addEventListener('click', function(e){
    let input = document.querySelector(".js-userinput").value;
    console.log(input);
    urlCreate(input);
    document.querySelector(".js-container").textContent = ' ';
});

document.querySelector(".js-userinput").addEventListener('keyup', function(e){
    
    if ( e.which === 13 ){
        let input = document.querySelector(".js-userinput").value;
        console.log(input);
        urlCreate(input);
        document.querySelector(".js-container").textContent = ' ';
    }
    let input = document.querySelector(".js-userinput").value;
    console.log(input);
});

//api link with key -- http://api.giphy.com/v1/gifs/search?q=cat&api_key=PscMUKBhvUny302aOXQ2x5xTWIJZrt7E
//let url = "http://api.giphy.com/v1/gifs/search?q=cat&api_key=PscMUKBhvUny302aOXQ2x5xTWIJZrt7E";

function urlCreate(input) {
    url = "http://api.giphy.com/v1/gifs/search?q=" + input + "&api_key=PscMUKBhvUny302aOXQ2x5xTWIJZrt7E";
    console.log(url);
    AJAX(url);
}

// AJAX request
function AJAX(url) {
let GiphyAJAXcall = new XMLHttpRequest();
GiphyAJAXcall.open('GET', url);
GiphyAJAXcall.send();

GiphyAJAXcall.addEventListener('load', function(e) {
    let data = e.target.response;
    pushToDom(data);
});
}

/* 
function pushToDom(input){
    
    let response = JSON.parse(input);
    // console.log(response.data[0].images.fixed_height.url);
   // let image = response.data[0].images.fixed_height.url; 

    for (let i = 0; i < response.data.length; i++){
        let imageURL = response.data[i].images.fixed_height.url;
        console.log(response.data[i].images.fixed_height.url);
        let container = document.querySelector(".js-container");
        container.innerHTML += "<img src=\""+imageURL+"\">";
    }
}*/

function pushToDom(input) {
    let response = JSON.parse(input);
    let imageURLs = response.data;
    imageURLs.forEach(function(image) { 

        let box = document.createElement('img');
        box.src = image.images.fixed_height.url;
        box.classList.add("container-image");
        // classList.toggle -- if class present will remove it and vice-versa.
        document.querySelector(".js-container").appendChild(box);
    });
}
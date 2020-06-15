document.querySelector(".js-go").addEventListener('click', function(e){
    let input = document.querySelector("input").value;
    pushToDom(input);
});

document.querySelector(".js-userinput").addEventListener('keyup', function(e) {
    let input = document.querySelector("input").value;
    if ( e.which === 13 ){
        pushToDom(input);
    }
});

//api link with key -- http://api.giphy.com/v1/gifs/search?q=cat&api_key=PscMUKBhvUny302aOXQ2x5xTWIJZrt7E
let url = "http://api.giphy.com/v1/gifs/search?q=cat&api_key=PscMUKBhvUny302aOXQ2x5xTWIJZrt7E";

// AJAX request
let GiphyAJAXcall = new XMLHttpRequest();
GiphyAJAXcall.open('GET', url);
GiphyAJAXcall.send();

GiphyAJAXcall.addEventListener('load', function(e) {
    let data = e.target.response;
    pushToDom(data);
});







function pushToDom(input){
    
    let response = JSON.parse(input);
    /* console.log(response.data[0].images.fixed_height.url);
    let image = response.data[0].images.fixed_height.url; */

    for (let i = 0; i < response.data.length; i++){
        let imageURL = response.data[i].images.fixed_height.url;
        console.log(response.data[i].images.fixed_height.url);
        let container = document.querySelector(".js-container");
        container.innerHTML = "<img src=\""+imageURL+"\">";
    }

    

}
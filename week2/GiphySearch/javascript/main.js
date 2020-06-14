document.querySelector(".js-go").addEventListener('click', function(e){
    let input = document.querySelector("input").value;
    console.log(input);
    pushToDom(input);
});

document.querySelector(".js-userinput").addEventListener('keyup', function(e) {
    let input = document.querySelector("input").value;
    console.log(input);
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
    console.log(data);
});







function pushToDom(input){
    
    var container = document.querySelector(".js-container");
    container.innerHTML = input;
}
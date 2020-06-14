document.querySelector(".js-go").addEventListener('click', function(){
    let input = document.querySelector("input").placeholder;
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


function pushToDom(input){
    
    var container = document.querySelector(".js-container");
    container.innerHTML = input;
}
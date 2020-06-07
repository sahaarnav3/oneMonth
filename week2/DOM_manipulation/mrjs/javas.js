let a1 = document.querySelector(".two");
a1.addEventListener('click', function () {
    let h = document.querySelector("h1");
    h.innerHTML = "I'm Fine !";
});

let a2 = document.querySelector(".reset");
a2.addEventListener('click', function () {
    document.querySelector(".one").innerHTML = "I am Mr. Javascript !";
});
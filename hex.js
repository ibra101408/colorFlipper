const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const clr = document.getElementById("clr");
const addColor = document.getElementById("add");

var list = [];

btn.addEventListener("click", function(){
    let hexColor = '#';
    for(let i = 0; i<6; i++){
        hexColor += hex[getRandomNumber()];
    }

    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;

    addColor.addEventListener("click", function (){
    });
});


function getRandomNumber (){
    return Math.floor(Math.random() * hex.length);
}


function add_Color(){
    const ad = document.getElementById("clr");

    const word = ad.textContent;

    list.push(word);
    console.log("massive = " + list);

    let displayList = document.getElementById("getList").innerHTML = list;

}

var onResize = function() {
    // apply dynamic padding at the top of the body according to the fixed navbar height
    $("body").css("padding-top", $(".navbar-fixed-top").height());
};

// attach the function to the window resize event
$(window).resize(onResize);

// call it also when the page is ready after load or reload
$(function() {
    onResize();
});



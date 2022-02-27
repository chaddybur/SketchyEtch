const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item"; 
    }
};
makeRows(16,16);
let grid = document.getElementsByClassName("grid-item");
var a = document.getElementById("clear");
var b = document.getElementById("classic");
var c = document.getElementById("technicolor");

let regular = "on";
let big = "off";
let huge = "off";

function gridSize(){

    

    if (regular == "on"){
        makeRows(8,8);
    }
    if (big == "on"){
        makeRows(16,16);
    }
    if (huge == "on"){
        makeRows(20,20);
    }
    console.log(grid.length);
    colorMeBad();
}




function colorMeBad(){
        if (a.value == "yes"){
            for ( let i = 0; i < grid.length; i++){
        
        grid[i].addEventListener("mouseover", function(){
            grid[i].style.backgroundColor = "lightgray"
        });
        }}
        if(b.value == "yes"){
            for ( let i = 0; i < grid.length; i++){
        
                grid[i].addEventListener("mouseover", function(){
                    grid[i].style.backgroundColor = "black"
                });
        }}
        if (c.value == "yes"){
            for ( let i = 0; i < grid.length; i++){
        
                grid[i].addEventListener("mouseover", function(){
                    const randomR = Math.floor(Math.random() * 256);
                    const randomG = Math.floor(Math.random() * 256);
                    const randomB = Math.floor(Math.random() * 256);
                    grid[i].style.backgroundColor  = `rgb(${randomR}, ${randomG}, ${randomB})`
                });
        }}
}

document.getElementById("clear").addEventListener("click",function(){
    if (a.value == "no"){
        a.setAttribute("value", "yes");
        b.setAttribute("value", "no");
        c.setAttribute("value", "no");
        }

    colorMeBad();
});
document.getElementById("classic").addEventListener("click",function(){
    if (b.value == "no"){
        b.setAttribute("value", "yes");
        a.setAttribute("value", "no");
        c.setAttribute("value", "no");
        }

    colorMeBad();
});

document.getElementById("technicolor").addEventListener("click",function(){

    if (c.value == "no"){
        c.setAttribute("value", "yes");
        b.setAttribute("value", "no");
        a.setAttribute("value", "no");
        }

    colorMeBad();
});


document.getElementById("sketch").addEventListener("click",function(){
    let nums = prompt("How big would you like the gird? Regular? Big? Huge? or Reset?");
    nums.toLowerCase();
    if (nums == "regular"){
        regular = "on";
        big = "off";
        huge = "off";
    }
    if (nums == "big"){
        regular = "off";
        big = "on";
        huge = "off";
    }
    if (nums == "huge"){
        regular = "off";
        big = "off"
        huge = "on";
    }
    if (nums == "reset"){
        window.location.reload();
    }
    gridSize()
});


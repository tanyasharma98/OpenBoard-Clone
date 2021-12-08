let optionconst = document.querySelector(".options-cont");
let optionFlag = true;
let toolsCont = document.querySelector(".tools-cont");
let pencil = document.querySelector("#pencil");
let eraser = document.querySelector("#eraser");
let rect = document.querySelector("#rect");
let line = document.querySelector("#line");
let notebook = document.querySelector("#notebook");
let download = document.querySelector("#download");
let upload = document.querySelector("#upload");
let redo = document.querySelector("#redo");
let refresh = document.querySelector("#refresh");
let options = document.querySelectorAll(".size-box");
let cTool = "pencil";

//Hamburger option
// true-> show tool ,false->hide

// Click Parent -> select child
optionconst.addEventListener("click", (e)=>{
    optionFlag  = !optionFlag;
    // let iconEl = optionconst.children[0];
    // fa-bars-> times  times->fa-bars
    // let iconCl = iconEl.classList[1];
    if(optionFlag) openTools();
    else closeTools();
})

function openTools(){
    let iconEl = optionconst.children[0];
    iconEl.classList.remove("fa-times");
    iconEl.classList.add("fa-bars");
    toolsCont.style.display ="flex";
}
function closeTools(){
    let iconEl = optionconst.children[0]   
    iconEl.classList.remove("fa-bars");
    iconEl.classList.add("fa-times");
    toolsCont.style.display = "none";
}

// Identify -> click ->again click

pencil.addEventListener("click", function(e){
    if(cTool=="pencil"){
        // second click

        //options show
        options[0].style.display ="flex";
    }else{
        // To remove previously selected option
        for(let i=0;i<options.length;i++){
            options[i].style.display ="none";

        }
        // pencil.style.border = "2px solid green";
        cTool = "pencil";
    }
});
eraser.addEventListener("click", function(e){
    if(cTool=="eraser"){
        // second click

        //options show
        options[1].style.display ="flex";
    }else{
        for(let i=0;i<options.length;i++){
            options[i].style.display ="none";
        }
        // eraser.style.border = "2px solid green";
        cTool = "eraser";
    }
});
rect.addEventListener("click", function(e){
    if(cTool=="rect"){
        // second click

        //options show
        options[2].style.display ="flex";
    }else{
        for(let i=0;i<options.length;i++){
            options[i].style.display ="none";

        }
        // rect.style.border = "2px solid green";
        cTool = "rect";
    }
});
line.addEventListener("click", function(e){
    if(cTool=="line"){
        // second click

        //options show
        options[3].style.display ="flex";
    }else{
        for(let i=0;i<options.length;i++){
            options[i].style.display ="none";
        }
        // line.style.border = "2px solid green";
        cTool = "line";
    }
});

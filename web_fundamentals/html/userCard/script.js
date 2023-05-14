var ele = document.querySelector("#nameReplace");
var nameLisst=[document.querySelector("#name-1"), document.querySelector("#name-2")]
function editName(){
    ele.innerText = "Adryen M";
    
}

function removeName(element){
    nameLisst[element].remove();

}
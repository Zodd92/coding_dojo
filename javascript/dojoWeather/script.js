function removeBTN(ele){
        ele.remove();
}

function convCtoF(elemnt){
    var tempF;
     return Math.round(tempF= parseInt(elemnt)*9/5+32) ;
}
function convFtoC(element){
    var tempC
    return Math.round(tempC=(element-32)* 5/9) ;
}





function convertTemp(ele){
    for( var i=1; i<9; i++){
        var tempp = document.querySelector("#temp"+i);
        var tempVal = parseInt(tempp.innerText);
        if(ele.value == "°C"){
            tempp.innerText=convFtoC(tempVal) + "°C";
        }else{
            tempp.innerText=convCtoF(tempVal) + "°F";
        }
        

    }
}
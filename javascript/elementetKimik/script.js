function displayName(nome){
    console.log(nome)
}

function turnOff(ele){
        ele.innerText="Off"
        if(ele === 'Off')
            ele.innerText='On'
}

function hide(ele){
    ele.remove();
}

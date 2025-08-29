var display = document.getElementById("disply");

function append(value){
  display.value += value

}

function clearDisplay(){
  display.value = ""
}

function delChar(){
  display.value = display.value.slice(0,-1);
}


function calculate(){
  display.value = eval(display.value)
}








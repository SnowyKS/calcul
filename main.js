let result = document.getElementById("res");

let error = document.getElementById("err");


let input1 = document.getElementById("inp1");
let input2 = document.getElementById("inp2");

let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let multy = document.getElementById("multy");
let del = document.getElementById("del");

let reset = document.getElementById("reset");

reset.onclick = function() {
    result.textContent = "0";
    error.textContent = "";
    input1.value = "";
    input2.value = "";
}

plus.onclick = function(){

    error.textContent = "";
     
    if( isNaN(Number(input1.value) + Number(input2.value)  ))

    {
        error.textContent = "Ошибка"
    }

   else{
    result.textContent = Number(input1.value) + Number(input2.value);
  }

}

 minus.onclick = function(){

    error.textContent = "";
     
    if( isNaN(Number(input1.value) - Number(input2.value)  ))

    {
        error.textContent = "Ошибка"
    }

   else{
    result.textContent = Number(input1.value) - Number(input2.value);
  }

}
    
 multy.onclick = function(){

    error.textContent = "";
     
    if( isNaN(Number(input1.value) * Number(input2.value)  ))

    {
        error.textContent = "Ошибка"
    }

   else{
    result.textContent = Number(input1.value) * Number(input2.value);
  }

}
 del.onclick = function(){

    error.textContent = "";
     
    if( isNaN(Number(input1.value) / Number(input2.value)  ))

    {
        error.textContent = "Ошибка"
    }

   else{
    result.textContent = Number(input1.value) / Number(input2.value);
  }

}
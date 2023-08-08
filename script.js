let counterValue=document.querySelector("h2");
let plusbtn=document.querySelector(".plus");
let minusbtn=document.querySelector(".minus");
let input=document.querySelector("input");
let reset=document.querySelector(".reset");

let incrdecrBy=1;

reset.addEventListener("click",function(){
    counterValue.innerText="0";
    incrdecrBy=1;
    input.value="";
})

input.addEventListener("change", function(){
    if(input.value==""){
        incrdecrBy=1;
        return;
    }
    incrdecrBy=parseInt(input.value);
    if(incrdecrBy<0){
        incrdecrBy=1;
        window.alert("Enter positive value");
    }
    console.log(incrdecrBy);
})


plusbtn.addEventListener("click", function(){
    console.log("plus clicked");
    let val=parseInt(counterValue.innerText);
    val=val+incrdecrBy;
    counterValue.innerText=val;
})

minusbtn.addEventListener("click",function(){
    let val=parseInt(counterValue.innerText);
    if(val==0){
        return;
    }
    else{
        if(val-incrdecrBy<0){
            window.alert("Negative");
            return;
        }
        val=val-incrdecrBy;
        counterValue.innerText=val;
    }
})
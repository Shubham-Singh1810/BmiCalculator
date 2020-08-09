console.log("js");
// bmir();
function BMI(){
    let height = document.getElementById("height").value;
     let weight = document.getElementById("weight").value;
     bmi = (weight/(height*height/10000))
     bmir = bmi.toFixed(2);
     document.getElementById("message").innerHTML="Your BMI is "+bmir;
     if(bmir<=18.5){
        document.getElementById("message1").innerHTML="'Underweight'.need to gain some weight";
    }
    else if(bmir>=19&&bmir<=24.9){
        document.getElementById("message2").innerHTML="'congrates'. your body weight is normal";
    }
    else if(bmir>=25&&bmir<=29.9){
        document.getElementById("message3").innerHTML="'Overweight'. you need to loss some weight.";
    }
    else{
        document.getElementById("message4").innerHTML="'Obese'. You have to loss weight.";
    }
}

// hambargar funtion
let hambargar = document.querySelector(".hambarger");
let socialmedia = document.querySelector(".socialmedia");
let developersid = document.querySelector(".developersid");
hambargar.addEventListener("click",()=>{
    socialmedia.classList.toggle("vclass")
    developersid.classList.toggle("vclass")
})
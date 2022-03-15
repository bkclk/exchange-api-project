
// let a=document.getElementById("firstCurrency").options[document.getElementById("firstCurrency").selectedIndex].value;
// let b=document.getElementById("secondCurrency").options[document.getElementById("secondCurrency").selectedIndex].value;

const ui=new UI(document.getElementById("firstCurrency"),document.getElementById("secondCurrency"));
const doviz=new dov("EUR","TRY");
EventListener();
function EventListener(){
    document.getElementById("firstCurrency").onchange=function(){
        ui.rateFirst();
        doviz.changeFirst(document.getElementById("firstCurrency").options[document.getElementById("firstCurrency").selectedIndex].value)
    };
    document.getElementById("secondCurrency").onchange=function(){
        ui.rateSecond();
        doviz.changeSecond(document.getElementById("secondCurrency").options[document.getElementById("secondCurrency").selectedIndex].value)
    };
    document.getElementById("amount").addEventListener("input",exchange);
}

function exchange(){
    doviz.changeamount(document.getElementById("amount").value);
    doviz.change()
    .then(result=>{
        ui.deger(result)
    })
    .catch(err=>console.log(err));
   
}
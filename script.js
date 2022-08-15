function updateRate() 
{
    var rateval = String(document.getElementById("rate").value)+"%";
    document.getElementById("rate_val").innerText=rateval;
}
function compute()
{   
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    if (principal<=0){
        alert("Enter a positive number")
    }
    else{
    document.getElementById('result').innerHTML ="If you deposit " +
    "<span style='background-color:yellow'>"+String(principal)+"</span>"+"<br>"+"at an interest rate of " +
    "<span style='background-color:yellow'>"+String(rate)+"%"+"</span>"+"<br>"+"You will receive an amount of "+
    "<span style='background-color:yellow'>"+ String(interest)+"</span>"+"<br>"+
      "in the year "+ "<span style='background-color:yellow'>"+String(year)+"</span>"
}
    
}
        
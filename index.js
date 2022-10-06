




document.querySelector(".btn").addEventListener("click",function(){
    var num = Math.floor(Math.random()*100)+1;
    var lovePercentage = "Your Love Percentage is "+num+" 🤍";
    
    document.querySelector("h1").innerHTML= lovePercentage;
    setTimeout(function(){
        document.querySelector("h1").innerHTML= "Love Calculator 🤍";
    },10000)
    
})

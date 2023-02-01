fetch('https://icanhazdadjoke.com/slack')
.then(data => data.json())
.then(quotesData=> {
const quotesText = quotesData.attachments[0].text
const quotesElement = document.getElementById('quotesElement')
quotesElement.innerHTML = quotesText

})

window.addEventListener("load", function(){
    setTimeout(
        function open(event){
            document.querySelector(".popup").style.display = "block";
        },
        1000
    )
});
document.querySelector("#close").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "none";
});
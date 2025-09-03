// life-line increase

const clickButtons = document.querySelectorAll(".click-heart");
for (let clickButton of clickButtons){
    clickButton.addEventListener("click", function(){
        const lifeLine = document.getElementById("life").innerText;
        const lifeLineIncrease = Number(lifeLine)+1;
        document.getElementById("life").innerText=lifeLineIncrease;
        
    })
    
}

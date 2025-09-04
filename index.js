// life-line increase

const clickButtons = document.querySelectorAll(".click-heart");
for (let clickButton of clickButtons){
    clickButton.addEventListener("click", function(){
        const lifeLine = document.getElementById("life").innerText;
        const lifeLineIncrease = parseInt(lifeLine)+1;
        document.getElementById("life").innerText = lifeLineIncrease;
        
    })
    
};

// calling feature

function copyBtnClick(event) {
  let coinStorage = parseInt(document.
  getElementById("coin-storage").innerText);
  if (coinStorage < 20) {
    alert("Not enough coins");
    return;
  }
  coinStorage -= 20;
  document.getElementById("coin-storage").innerText = coinStorage;
  const parentCard =event.target.closest(".parent-div");
  const serviceName = parentCard.querySelector("h2").innerText;
  const serviceNumber = parentCard.querySelector(".emergency-number").innerText;
  alert(`📞 Calling ${serviceName}: ${serviceNumber}`);
  // Service card 10
  const callHistorySection = document.getElementById("call-history-item"); 
  const historyDiv = document.createElement("div");
  historyDiv.className = "call-history-item";
  historyDiv.innerHTML = `
  <div class="bg-gray-100 w-full  border-gray-100 border-1 rounded-l flex justify-between items-center gap-15 px-3 mt-3">
    <span>
      <p>${serviceName}</p>
      <p>${serviceNumber}</p>
    </span>
    <span>${new Date().toLocaleTimeString()}</span>
  </div>
    `;
  callHistorySection.appendChild(historyDiv);
} 
    document.getElementById("call-btn-1").addEventListener("click", copyBtnClick);
    document.getElementById("call-btn-2").addEventListener("click", copyBtnClick);
    document.getElementById("call-btn-3").addEventListener("click", copyBtnClick);
    document.getElementById("call-btn-4").addEventListener("click", copyBtnClick);
    document.getElementById("call-btn-5").addEventListener("click", copyBtnClick);
    document.getElementById("call-btn-6").addEventListener("click", copyBtnClick);
    document.getElementById("call-btn-7").addEventListener("click", copyBtnClick);
    document.getElementById("call-btn-8").addEventListener("click", copyBtnClick);
    document.getElementById("call-btn-9").addEventListener("click", copyBtnClick);

// clear-history

document.getElementById("clear").addEventListener("click", function() {
  const callHistorySection = document.getElementById("call-history-item");
  callHistorySection.innerHTML = "";
});

// copy feature

const copybtns = document.getElementsByClassName("click-copybtn");
for (let copybtn of copybtns){
    copybtn.addEventListener("click", function(){
        const numberElement = this.closest(".parent-div").querySelector(".emergency-number").innerText;
         navigator.clipboard.writeText(numberElement);
        alert(" ✅ Copied: " + numberElement);
        const copyCount = document.getElementById("copy-btn").innerText;
        const copyCountIncrease = parseInt(copyCount) + 1;
        document.getElementById("copy-btn").innerText = copyCountIncrease;
    });
}

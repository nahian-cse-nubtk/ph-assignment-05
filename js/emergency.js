// heart count
let Hearts = 0;
  const heartNumber = document.getElementById("heart-number");
  const hearts = document.querySelectorAll(".heart-count");

  for (let heart of hearts) {
    heart.addEventListener("click", function() {
      Hearts++;
      heartNumber.textContent = Hearts;
    });
  }

  //call action button

  let coins = 100;
  const coinNumber = document.getElementById("coin-number");
  const calls = document.querySelectorAll(".call-count");
  const allHistory = document.getElementById("all-history")
   const history = [];

  for (let call of calls) {
    call.addEventListener("click", function() {
        const service = call.closest(".card");;
        const serviceName = service.querySelector(".service-name").textContent;

        const serviceNumber = service.querySelector(".service-number").textContent;

      if (coins < 20) {
        alert("Not enough coins! Needeed at least 20 coins to make a call.");
        return;
      }
      coins -= 20;
      coinNumber.textContent = coins;

      const everyCall ={
        serviceName: serviceName,
        serviceNumber: serviceNumber,
        time: new Date().toLocaleString()
      };
      history.push(everyCall);

    showHistory();

    alert(`Calling for ${serviceName} at ${serviceNumber} and 20 conins will leave`);
    });

}
function showHistory(){
    allHistory.innerHTML = "";
    for(let item of history){
    allHistory.innerHTML +=
        `<div>
            <h1 class="hind-madurai-font history-type">${item.serviceName}</h1>
            <p class="roboto-font card-text date-and-number">${item.serviceNumber}</p>
        </div>

            <h1 class="roboto-font card-text date-and-number">${item.time}</h1>
        </div>
        `;
    }
}


window.addEventListener('unlockProtocol.status', function(event) {
  // We hide all .unlock-content elements
    document.querySelector('.unlock-content').style.display = ""
  // We show only the relevant element
    document.querySelectorAll(`.unlock-content.${event.detail.state}`).forEach((element) => {
  	  element.style.display = "block"
    })
})


window.onload = myfunction;

function myfunction(){
  window.localStorage.clear();
}
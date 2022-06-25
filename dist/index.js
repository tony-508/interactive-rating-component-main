let submit = document.getElementById("submit-btn")
let rateSpace = document.getElementById("rate-digit")
let rating = document.querySelectorAll(".rate-btn")


rating.forEach((item) => {
        item.addEventListener("click", function() {
        var text = this.innerText
        rateSpace.textContent = text;
    })
})

submit.onclick = function() {
    let block1 = document.querySelector("#block-1")
    block1.style.display = "none"
}




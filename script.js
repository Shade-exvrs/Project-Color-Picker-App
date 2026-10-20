document.getElementById("colorIndex").addEventListener("input", function(event){
    const selectedColor = event.target.value

    document.getElementById("colorCode").textContent = selectedColor

    document.getElementById("colorDisplay").style.backgroundColor = selectedColor
})
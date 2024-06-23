console.log("hi");
let cross = document.querySelectorAll('.cross');

cross.forEach(crosses => {
    crosses.addEventListener("click", function() {
        alert("Feature will come soon!")
    });
});

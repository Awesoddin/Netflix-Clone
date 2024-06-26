let qblockElements = document.querySelectorAll('.qblock');
console.dir(qblockElements);


// Iterate over each qblock element
qblockElements.forEach(function(qblock) {
    let cross = qblock.querySelector('.cross');
    let desc = qblock.querySelector('.desc');
    let qblockch = qblock.querySelector('.qblockch');


    desc.style.display = 'none';

    qblockch.addEventListener("click", function(e) {
        if (desc.style.display === 'none') {
            desc.style.display = 'block';
            console.log("ok");
        } else {
            desc.style.display = 'none';
            console.log("not ok");
        }
    });
});

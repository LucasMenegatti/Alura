document.querySelector("#btn-dm").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode")
    if(document.querySelector('#btn-dm').innerHTML=='<i class="fa-solid fa-sun"></i>') {
        document.querySelector('#btn-dm').innerHTML = '<i class="fa-solid fa-moon"></i>'
    } else {
        document.querySelector('#btn-dm').innerHTML = '<i class="fa-solid fa-sun"></i>'
    }
})
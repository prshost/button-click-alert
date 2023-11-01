
let button = document.querySelector('#open');
let a = document.querySelector('.alert');
let c = document.querySelector('.close');
let set; 
button.addEventListener("click", () => {
    a.classList.remove('hide')
    a.classList.add('show')
    set = setTimeout( function() {
        a.classList.remove('show')
        a.classList.add('hide')
    }, 5000)
})
c.addEventListener("click", () => {
    a.classList.remove('show')
    a.classList.add('hide')
    clearTimeout(set)
})
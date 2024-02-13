let color = document.querySelector('input')
let btn = document.querySelector('button')

btn.addEventListener ('click', function (){
    document.querySelector('body').style.backgroundColor = color.value
})
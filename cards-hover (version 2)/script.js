const cards = document.querySelectorAll('.card__body')
let isShowed = false

for (let i = 0; i < cards.length; i++){
    cards[i].addEventListener('mouseenter', () => {
        cards[i].childNodes[3].classList.add('show')
    })
    cards[i].addEventListener('mouseleave', () => {
        cards[i].childNodes[3].classList.remove('show')
    })
    cards[i].addEventListener('click', () => {
        console.log('click')
        if (isShowed == false){
            cards[i].childNodes[3].classList.add('show')            
            cards[i].style.top = '100px'
            isShowed = true
        }else{
            cards[i].childNodes[3].classList.remove('show')
            cards[i].style.top = '150px'
            isShowed = false
        }
    })
}
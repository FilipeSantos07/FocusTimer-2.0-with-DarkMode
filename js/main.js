const minutesDisplay = document.querySelector(".minutes")
const secondsDisplay = document.querySelector(".seconds")
const buttonPlay = document.querySelector(".play")
const buttonStop = document.querySelector(".stop")
const buttonAddMinutes = document.querySelector(".add-minutes")
const buttonRemoveMinutes = document.querySelector(".remove-minutes")
const buttonForest = document.querySelector(".forest")
const buttonRain = document.querySelector(".rain")
const buttonCoffeeShop = document.querySelector(".coffee-shop")
const buttonFireplace = document.querySelector(".fireplace")
const buttonMoon = document.querySelector(".moon")
const buttonSun = document.querySelector(".sun")
const timer = document.querySelector(".timer")
const playButtonViolet = document.querySelector(".play-button-violet")
const stopButtonViolet = document.querySelector(".stop-button-violet")
const addButtonViolet = document.querySelector(".add-button-violet")
const removeButtonViolet = document.querySelector(".remove-button-violet")
const inputForest = document.querySelector("#volume-control-forest")
const inputRain = document.querySelector("#volume-control-rain")
const inputCoffee = document.querySelector("#volume-control-coffee")
const inputFireplace = document.querySelector("#volume-control-fireplace")

let minutes = Number(minutesDisplay.innerHTML)
let timerTimeout

buttonPlay.addEventListener(`click`, () => {
    buttonPressAudio.play()
    countdown()
})

buttonStop.addEventListener(`click`, () => {
    buttonPressAudio.play()

    clearTimeout(timerTimeout)
})

buttonAddMinutes.addEventListener(`click`, () => {
    buttonPressAudio.play()

    minutes += 5
    minutesDisplay.innerHTML = String(minutes).padStart(2, "0")
})

buttonRemoveMinutes.addEventListener(`click`, () => {
    buttonPressAudio.play()

    if(minutes < 5) {
        return
    }
    minutes -= 5
    minutesDisplay.innerHTML = String(minutes).padStart(2, "0")
})

buttonForest.addEventListener(`click`, () => {

    resetCardsBackgroundColor()
    buttonForest.classList.add("cardsSelectedBackground")

    pauseAudio()
    
    forestSound.play()
    forestSound.loop = true
})

buttonRain.addEventListener(`click`, () => {

    resetCardsBackgroundColor()
    buttonRain.classList.add("cardsSelectedBackground")

    pauseAudio()

    rainSound.play()
    rainSound.loop = true
})

buttonCoffeeShop.addEventListener(`click`, () => {

    resetCardsBackgroundColor()
    buttonCoffeeShop.classList.add("cardsSelectedBackground")

    pauseAudio()

    coffeeShop.play()
    coffeeShop.loop = true
})

buttonFireplace.addEventListener(`click`, () => {

    resetCardsBackgroundColor()
    buttonFireplace.classList.add("cardsSelectedBackground")
    
    pauseAudio()

    fireplace.play()
    fireplace.loop = true
})



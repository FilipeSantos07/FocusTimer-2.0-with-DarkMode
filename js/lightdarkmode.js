lightdarkMode()

function lightdarkMode() {
    buttonMoon.classList.toggle("hide")
    buttonSun.classList.toggle("hide")

    document.body.classList.toggle("bodyLightBackground")
    timer.classList.toggle("lightFontColor")

    playButtonViolet.classList.toggle("hide")
    stopButtonViolet.classList.toggle("hide")
    addButtonViolet.classList.toggle("hide")
    removeButtonViolet.classList.toggle("hide")

    buttonPlay.classList.toggle("hide")
    buttonStop.classList.toggle("hide")
    buttonAddMinutes.classList.toggle("hide")
    buttonRemoveMinutes.classList.toggle("hide")

    buttonForest.classList.toggle("cardsLightBackground")
    buttonRain.classList.toggle("cardsLightBackground")
    buttonCoffeeShop.classList.toggle("cardsLightBackground")
    buttonFireplace.classList.toggle("cardsLightBackground")

}

function resetCardsBackgroundColor() {
    buttonForest.classList.remove("cardsSelectedBackground")
    buttonRain.classList.remove("cardsSelectedBackground")
    buttonCoffeeShop.classList.remove("cardsSelectedBackground")
    buttonFireplace.classList.remove("cardsSelectedBackground")
}

buttonMoon.addEventListener(`click`, () => {
    buttonPressAudio.play()
    lightdarkMode()
})

buttonSun.addEventListener(`click`, () => {
    buttonPressAudio.play()
    lightdarkMode()
})

playButtonViolet.addEventListener(`click`, () => {
    buttonPressAudio.play()
    countdown()
})

stopButtonViolet.addEventListener(`click`, () => {
    buttonPressAudio.play()

    resetDisplay()
    clearTimeout(timerTimeout)
})

addButtonViolet.addEventListener(`click`, () => {
    buttonPressAudio.play()

    minutes += 5
    minutesDisplay.innerHTML = String(minutes).padStart(2, "0")
})

removeButtonViolet.addEventListener(`click`, () => {
    buttonPressAudio.play()

    if(minutes < 5) {
        return
    }
    minutes -= 5
    minutesDisplay.innerHTML = String(minutes).padStart(2, "0")
})
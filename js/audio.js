const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")

const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

const forestSound = new Audio("./audio/Floresta.wav")
const rainSound = new Audio("./audio/Chuva.wav")
const fireplace = new Audio("./audio/Lareira.wav")
const coffeeShop = new Audio("./audio/Cafeteria.wav")

function pauseAudio() {
    forestSound.pause()
    rainSound.pause()
    coffeeShop.pause()
    fireplace.pause()
}

inputForest.addEventListener(`input`, () => {
    forestSound.volume = inputForest.value / 100
 })

 inputRain.addEventListener(`input`, () => {
    rainSound.volume = inputRain.value / 100
 })

 inputCoffee.addEventListener(`input`, () => {
    coffeeShop.volume = inputCoffee.value / 100
 })

 inputFireplace.addEventListener(`input`, () => {
    fireplace.volume = inputFireplace.value / 100
 })



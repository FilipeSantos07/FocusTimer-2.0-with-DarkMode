function countdown() {

    timerTimeout = setTimeout(() => {
        let seconds = Number(secondsDisplay.innerHTML)
        minutes = Number(minutesDisplay.innerHTML)

        if(minutes <= 0 && seconds <= 0) {
            minutesDisplay.innerHTML = String(minutes).padStart(2, "0")
            kitchenTimer.play()
            pauseAudio()
            resetCardsBackgroundColor()
            return clearTimeout(timerTimeout)
        }

        if(seconds <= 0) {
            seconds = 60
            minutesDisplay.innerHTML = String(minutes - 1).padStart(2, "0")
        }
        secondsDisplay.innerHTML = String(seconds - 1 ).padStart(2, "0")

        countdown()

    }, 1000)
}



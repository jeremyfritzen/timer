const timerButton = document.getElementById('timerButton')
const stopButton = document.getElementById('stopButton')
let seconds

let paragrapheSecondes = document.createElement('p')
let timer


function start(e) {
    secondes = document.getElementById('secondsInput').value
    paragrapheSecondes.innerHTML = `${secondes}`
    document.body.append(paragrapheSecondes)
    timer = setInterval(decompte, 1000)
}

function decompte(e) {
    secondes--
    if (secondes != 0) {
        paragrapheSecondes.innerHTML += `<br/>${secondes}`
    } else {
        stop()
    }
}

function stop(e) {
    // console.log(timer)
    stopButton.myParam = timer
    if (e) {
        console.log(e.currentTarget.myParam)
        clearInterval(e.currentTarget.myParam)        
    } else {
        clearInterval(timer)
    }
    paragrapheSecondes.innerHTML += `<br/>STOP !`
}


timerButton.addEventListener('click', start)
stopButton.addEventListener('click', stop)
//Wrap around everything
const container = document.querySelector('.container')
const text = document.querySelector('#text')

//Time
const totalTime = 7500
const breatheTime = (totalTime / 5) * 2
const holdTime = totalTime / 5

//Call function
breatheAnimation()

function breatheAnimation() {
    text.innerHTML = 'Breathe In!'
    container.className = 'container grow'

    //Takes in function, second parameter, execute
    setTimeout(() => {
        text.innerText = 'Hold'

        setTimeout(() => {
            text.innerText = 'Breathe Out!'
            container.className = 'container shrink'
        }, holdTime)
    }, breatheTime)
}

//Takes in function
setInterval(breatheAnimation, totalTime)
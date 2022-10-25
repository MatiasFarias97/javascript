const WORDS = []
const wordContainer = document.getElementById('wordContainer');
const startButton = document.getElementById('startButton');
const usedLettersElement = document.getElementById('usedLetters');


let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
ctx.canvas.width = 0;
ctx.canvas.height = 0;

const bodyParts = [
    [4, 2, 1, 1],
    [4, 3, 1, 2],
    [3, 5, 1, 1],
    [5, 5, 1, 1],
    [3, 3, 1, 1],
    [5, 3, 1, 1]
];

let selectedWord;
let usedLetters;
let mistakes;
let erroresJ1 = 0
let erroresJ2 = 0
let hits;
let round = 0;


fetch('https://6345db9839ca915a6909468c.mockapi.io/ahorcado/words')
    .then((response) => response.json())
    .then((data) => {
        WORDS.push(data.map(probando => probando.word))
    })
    .catch((error) => console.log(error))

function swalGanador() {
    Swal.fire({
        title: 'Ganaste :)',
        text: 'Espero que te haya gustado',
        icon: 'success'
    })
}

function swalPerdedor() {
    Swal.fire({
        title: 'Perdiste :(',
        text: 'Vuelve a intentarlo',
        icon: 'error'
    })
}

const addLetter = (letter) => {
    const letterElement = document.createElement('span')
    letterElement.innerHTML = letter
    usedLettersElement.appendChild(letterElement)

}

const addBodyPart = (bodyPart) => {
    ctx.fillStyle = '#fff'
    ctx.fillRect(...bodyPart)
}




const wrongLetter = () => {

    addBodyPart(bodyParts[mistakes])
    mistakes++
    
    erroresPlayers()
    // if(mistakes === 6  && (round % 2) == 1){
    //     erroresJ1++
    // }else if(mistakes === 6 && (round % 2) == 0){
    //     erroresJ2++
    // }

    if (mistakes === bodyParts.length) {
        endGame()
        swalPerdedor()
        
    }

}

function erroresPlayers(){


    if(mistakes == 6  && (round % 2) == 1){
        erroresJ1++
    }else if(mistakes == 6 && (round % 2) == 0){
        erroresJ2++
    }

}


const endGame = () => {
    document.removeEventListener('keydown', letterEvent)
    startButton.style.display = 'block'
    localStorage.removeItem("word")

}

const correctLetter = (letter) => {
    const {
        children
    } = wordContainer
    for (let i = 0; i < children.length; i++) {
        if (children[i].innerHTML === letter) {
            children[i].classList.toggle('hidden')
            hits++
        }
    }
    if (hits === selectedWord.length) {
        endGame()
        swalGanador()
    }
}

const letterInput = (letter) => {
    (selectedWord.includes(letter)) ? correctLetter(letter): wrongLetter()

    addLetter(letter)
    usedLetters.push(letter)
}

const letterEvent = (event) => {
    let newLetter = (event).key.toUpperCase()
    if (newLetter.match(/^[a-zñ]$/i) && !usedLetters.includes(newLetter)) {
        letterInput(newLetter)
    }
}

const drawWord = () => {
    selectedWord.forEach(letter => {
        const letterElement = document.createElement('span')
        letterElement.innerHTML = letter
        letterElement.classList.add('letter')
        letterElement.classList.add('hidden')
        wordContainer.appendChild(letterElement)

        // let letterJson = 0

        // letterJson = localStorage.getItem("letter")

    });
}

const selectRandomWord = () => {
    let word = 0;
    let wordJSON = 0;

    wordJSON = localStorage.getItem("word")
    let getWord = JSON.parse(wordJSON)

    if (getWord == null) {
        word = WORDS[0][Math.floor(Math.random() * WORDS[0].length)].toUpperCase()
        selectedWord = word.split('')
        wordJSON = JSON.stringify(word)
        localStorage.setItem("word", wordJSON)

    } else {
        selectedWord = getWord.split('')
    }
}

const drawHangMan = () => {
    ctx.canvas.width = 120
    ctx.canvas.height = 160
    ctx.scale(20, 20)
    ctx.clearRect(0, 0, canvas.width, canvas.heigth)
    ctx.fillStyle = '#d95d39'
    ctx.fillRect(0, 7, 4, 1)
    ctx.fillRect(1, 0, 1, 8)
    ctx.fillRect(2, 0, 3, 1)
    ctx.fillRect(4, 1, 1, 1)
}

const startGame = () => {

        usedLetters = []
        mistakes = 0
        hits = 0
        wordContainer.innerHTML = ""
        usedLettersElement.innerHTML = ""
        startButton.style.display = "none"
        drawHangMan()
        selectRandomWord()
        drawWord()
        document.addEventListener('keydown', letterEvent)
        letterEvent()
        correctLetter()
        letterInput()
        endGame()

    } 
    
    startButton.addEventListener('click', startGame)



import difficulties from './data/difficulties.js'
import ancientsData from './data/ancients.js'

const ancientsDiv = document.querySelector('.ancients')
const difficultiesDiv = document.querySelector('.difficulties')
const mixButton = document.querySelector('.mixed-Button')
const resetButton = document.querySelector('.reset-Button')

var ancient = {}
var currentDifficult

function addImg(pers, div){
    const img = new Image()
    img.src = pers.cardFace
    img.setAttribute('id', pers.id)
    div.append(img)
}

function addButton(name, div){
    const button = document.createElement('button')
    button.textContent = name.name
    button.setAttribute('id', name.id)
    div.append(button)
}

ancientsData.forEach(x=>{
    addImg(x, ancientsDiv)
})

difficulties.forEach(x=>{
    addButton(x, difficultiesDiv)
})

ancientsDiv.addEventListener('click', e=>{
    let target = e.target
    target.classList.add('selected')
    ancientsData.forEach(x=>{
        if(x.id == target.getAttribute('id')){
            ancient = x
        }
    })
})

difficultiesDiv.addEventListener('click', e=>{
    let target = e.target
    target.classList.add('selected')
    difficulties.forEach(x=>{
        if(x.id == target.getAttribute('id')){
            currentDifficult = x.id
        }
    })
})






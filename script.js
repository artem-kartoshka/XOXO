function randint(min,max){
    return Math.round(Math.random()*(max-min)+ min)}
function check(elements){
    if (
           (elements[0]==1 && elements[1]==1 && elements[2]==1)
        || (elements[3]==1 && elements[4]==1 && elements[5]==1)
        || (elements[6]==1 && elements[7]==1 && elements[8]==1)
        || (elements[0]==1 && elements[3]==1 && elements[6]==1)
        || (elements[1]==1 && elements[4]==1 && elements[7]==1)
        || (elements[2]==1 && elements[5]==1 && elements[8]==1)
        || (elements[0]==1 && elements[4]==1 && elements[8]==1)
        || (elements[2]==1 && elements[4]==1 && elements[6]==1)  
     ) {
        console.log("red")
        pole.style.display="none"
        gamer.style.display="none"
        gameb.style.display="none"
        resultr.style.display="flex"

    }
    if (
           (elements[0]==2 && elements[1]==2 && elements[2]==2) 
        || (elements[3]==2 && elements[4]==2 && elements[5]==2)
        || (elements[6]==2 && elements[7]==2 && elements[8]==2)
        || (elements[0]==2 && elements[3]==2 && elements[6]==2)
        || (elements[1]==2 && elements[4]==2 && elements[7]==2)
        || (elements[2]==2 && elements[5]==2 && elements[8]==2)
        || (elements[0]==2 && elements[4]==2 && elements[8]==2)
        || (elements[2]==2 && elements[4]==2 && elements[6]==2) ) {
        console.log("blue")
        pole.style.display="none"
        gamer.style.display="none"
        gameb.style.display="none"
        resultb.style.display="flex"
    }
}
let nameJS=document.querySelector('.name')
let startJS=document.querySelector('.start')
let questionJS = document.querySelector('.question')
let red = document.querySelector('.choice1')
let blue = document.querySelector('.choice2')
let random = document.querySelector('.choice3')
let resultr = document.querySelector('.result_r')
let resultb = document.querySelector('.result_b')
let pole = document.querySelector('.box')
let fields=document.querySelectorAll('.yach')
let gamer=document.querySelector('.gamer')
let gameb=document.querySelector('.gameb')
let first=0
let elements=[0,0,0,0,0,0,0,0,0]
let fieldsJS=[]


nameJS.style.display="flex"
startJS.style.display="flex"
questionJS.style.display="none"
pole.style.display="none"
resultr.style.display="none"
resultb.style.display="none"
red.style.display="none"
blue.style.display="none"
random.style.display="none"
gamer.style.display="none"
gameb.style.display="none"


startJS.addEventListener('click', function(){
    nameJS.style.display="none"
    startJS.style.display="none"
    questionJS.style.display="flex"
    red.style.display="flex"
    blue.style.display="flex"
    random.style.display="flex"
})

red.addEventListener('click',function(){
    first += 1
    gamer.style.display="flex"
    red.style.display="none"
    blue.style.display="none"
    random.style.display="none"
    pole.style.display="flex"
    questionJS.style.display="none"

})

blue.addEventListener('click',function(){
    first += 2
    gameb.style.display="flex"
    red.style.display="none"
    blue.style.display="none"
    random.style.display="none"
    pole.style.display="flex"
    questionJS.style.display="none"

})

random.addEventListener('click',function(){
    first += randint(1,2)
    red.style.display="none"
    blue.style.display="none"
    random.style.display="none"
    pole.style.display="flex"
    questionJS.style.display="none"
    if (first % 2 == 1){
        gamer.style.display="flex"
        gameb.style.display="none"
    }else{
        gameb.style.display="flex"
        gamer.style.display="none"
    }
})



for (let i = 0; i < 9; i++){
    fields[i].addEventListener('click', function() {
    if (first % 2 == 1){
        gameb.style.display="flex"
        gamer.style.display="none"
        fields[i].innerHTML=`<img src="red.png"/>`
        elements[i]=1
        console.log(elements)
        first++
        check(elements)
    }
        else{
            gamer.style.display="flex"
            gameb.style.display="none"
            fields[i].innerHTML=`<img src="blue.png"/>`
            first++
            elements[i]=2
            console.log(elements)
            check(elements)
    }
    })}
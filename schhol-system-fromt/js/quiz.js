const testData = [
    {
        question:"Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "javascript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },


];
 const tests= document.getElementById('testdatas')
const answer = document.querySelectorAll('.answer')
const question = document.getElementById('question')
const avariant = document.getElementById('a')
const bvariant = document.getElementById('b')
const cvariant = document.getElementById('c')
const dvariant = document.getElementById('d')
const next = document.getElementById('green')
const previous=document.getElementById('container')
var usernameInput=document.getElementById('username');
let current = 0
let score = 0
var no_box = document.querySelector('.quiz');
var total=60*10
var minute=parseInt(total/60)
var second=parseInt(total%60)
load()

function load() {

notselect()

    const currented = testData[current]

    question.innerText = currented.question
    avariant.innerText = currented.a
    bvariant.innerText = currented.b
    cvariant.innerText = currented.c
    dvariant.innerText = currented.d
}

function notselect() {
    answer.forEach(answer => answer.checked = false)
}
function select() {
    let answers
    answer.forEach(answer => {
        if(answer.checked==true||answer.checked==false) {
            answers = answer.id
        }
    })
    return answers
}

next.addEventListener('click', () => {
    const answered = select()
    if(answered) {
       if(answered === testData[current].correct) {
           score++
       }

       current++

       if(current < testData.length) {
           load()
       } else {
           tests.innerHTML = `
           <h3>You answered ${score}/${testData.length} questions correctly</h3>

           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})
var i=1
previous.addEventListener('click', () => {
    const s=testData.length-testData.length
    const answered = select()
    if(i>1
        
        
        
        
        
        ) {
    
    }
    i++
})
// var i=1
// function prev() { 
//     if (i == 1) {
//         document.getElementsByClassName(
//                 'prev').disabled = true;
//         document.getElementsByClassName(
//                 'next').disabled = false;
//     } else {
//         i--;
//         return no_box.innerHTML = i;
//     }
// }
function CheckTime(){
document.getElementById("timer").innerHTML
='Time Left:'+minute+'minutes'+second+'second';
if(total<=0){
setTimeout('document.quiz.submit()',1)
}
else{
total=total-1
minute=parseInt(minute/60)
second=parseInt(second%60)
setTimeout("CheckTime()"+1000)
}
}
setTimeout("CheckTime()",1000)



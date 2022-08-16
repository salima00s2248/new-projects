var username=localStorage.getItem('username')
var password=localStorage.getItem('password')
var given_a=localStorage.getItem('answer')

const testData = [

   
            {
    
    
                id:0,
                        question:"1. In which case, a program is not expected to recover?",
                        a: " If an error occurs.",
                        b: "If an exception occurs.",
                        c: " Both of the above.",
                        d: " None of the above.",
                        correct: "a_variant",
                        
                    },
                    {
    
    
                        id:1,
                                question:"2. Composition represents",
                                a: " Both of the above.",
                                b: "IS-A relationship.",
                                c: " HAS-A relationship.",
                                d: " None of the above.",
                                correct: "c_variant",
                                
                            },

                            {
    
    
                                id:2,
                                        question:"3.Which keyword is used to import a package from the Java API library?",
                                        a: "import",
                                        b: "package",
                                        c: "lib",
                                        d: "getlib",
                                        correct: "a_variant",
                                        
                                    },
                                    {
    
    
                                        id:3,
                                                question:"4. What is the size of char variable?",
                                                a: "64 bit",
                                                b: "32 bit",
                                                c: "16 bit.",
                                                d: "8 bit",
                                                correct: "d_variant",
                                                
                                            },

                                            {
    
    
                                                id:4,
                                                        question:"5. What is the default value of double variable?",
                                                        a: "0.0d",
                                                        b: "0.0f",
                                                        c: "0",
                                                        d: "not defined",
                                                        correct: "a_variant",
                                                        
                                                    },


];
 const tests= document.getElementById('testdatas')
const answer = document.querySelectorAll('.answer')
const question = document.getElementById('question')
const a_variant = document.getElementById('a')
const b_variant = document.getElementById('b')
const c_variant = document.getElementById('c')
const d_variant = document.getElementById('d')
const next = document.getElementById('green')
const previous=document.getElementById('container')
const submit=document.getElementById('submit')
const previousresult=document.getElementById('previousresult')
const nextresult=document.getElementById('nextresult')
var usernameInput=document.getElementById('username');
let current = 0
let score = 0
var no_box = document.querySelector('.quiz');
var total=60*10
var minute=parseInt(total/60)
var second=parseInt(total%60)
var i=0;
var k=0;
var h=0
 var selectedanswers = [];
var pos=0
var j=1

load()

function load() {
    if(current==0){
    
   document.getElementById("btn").disabled=true
   
    }
    if(current!=0){
    
        document.getElementById("btn").disabled=false
        
         }
notselect()

choice = document.getElementsByName("answer");
	var checkedAnswer = null;
	for (var i = 0; i < choice.length; i++) {
		if(choice[i].checked) {
            selectedanswers[current] = choice[i].value;
		}
	}

    renderQuestions()
const currented = testData[current]
k++;
        
    question.innerText = currented.question
    a_variant.innerText = currented.a
    b_variant.innerText = currented.b
    c_variant.innerText = currented.c
    d_variant.innerText = currented.d


   if(testData[current].id==parseInt(testData.length-1)){
     
        next.style.display = 'inline-block';
        submit.style.display = 'inline-block';
       
       

  
   }
 
  else{
    next.style.display = 'inline-block';
    submit.style.display = 'none';
    previousresult.style.display='none'
  nextresult.style.display='none'
  }

  
 
}


function previousload(){


if(current==1){
 
    document.getElementById("btn").disabled=true
    
     }
     if(current!=1){
     
         document.getElementById("btn").disabled=false
         
          }
        choice = document.getElementsByName("answer");
        var checkedAnswer = null;
        for (var i = 0; i < choice.length; i++) {
            
            if(choice[i].checked) {
                selectedanswers[current] = choice[i].value;
         
            }
        }


	renderQuestions()

current--;


    const currented = testData[current]

        question.innerText = currented.question

        a_variant.innerText = currented.a
        b_variant.innerText = currented.b
        c_variant.innerText = currented.c
        d_variant.innerText = currented.d

          
        
    
    
for(i=0;i<selectedanswers.length;i++){
 
    var radios = document.getElementsByName('answer');
    var rLen = radios.length, i;
    for (i = 0; i < rLen; ++i) {
        if (selectedanswers[current] === radios[i].value) {
            
            radios[i].checked = true;
        }
    }

}
if(current<testData.length){
    document.getElementById("green").disabled=false
}

 }
 

function nextload(){
    document.getElementById("submit").disabled=true

         if(current<0){
           
             document.getElementById("previousresult").disabled=true
             
              }
              if(current>=0){
             
                 document.getElementById("previousresult").disabled=false
                 
                  }
                  if(current==testData.length-2){
             
                    document.getElementById("nextresult").disabled=true
                    
                     }
                     if(current!=testData.length-2){
             
                        document.getElementById("nextresult").disabled=false
                        
                         }
                   

    choice = document.getElementsByName("answer");
    var checkedAnswer = null;
    for (var i = 0; i < choice.length; i++) {
        if(choice[i].checked) {
            selectedanswers[current] = choice[i].value;
           

        }
    }


renderQuestions()

current++;
    


const currented = testData[current]

    question.innerText = currented.question

    a_variant.innerText = currented.a
    b_variant.innerText = currented.b
    c_variant.innerText = currented.c
    d_variant.innerText = currented.d

      
    


for(i=0;i<selectedanswers.length;i++){

var radios = document.getElementsByName('answer');
var rLen = radios.length, i;
for (i = 0; i < rLen; ++i) {
    if (selectedanswers[current] === radios[i].value) {
        
        radios[i].checked = true;
    }
}

}
function hello(){
    for (var i = 0; i <choice.length; i++) {
        if(choice[i].checked) {
        
            selectedanswers[current] = choice[i].value;
            
     return (choice[i].value)
        }
    }
}

var checkedAnswer = null;
//for(i=selectedanswers.length-1;i>=0;i--){

hello()
if(hello()=='a_variant'){
document.getElementById('a').style.color = 'green'
document.getElementById('b').style.color = 'grey'
document.getElementById('c').style.color = 'grey'
document.getElementById('d').style.color = 'grey'
}

if(selectedanswers[current]=='b_variant'){

document.getElementById('b').style.color = 'green'
document.getElementById('a').style.color = 'grey'
document.getElementById('c').style.color = 'grey'
document.getElementById('d').style.color = 'grey'

}
if(selectedanswers[current]=='c_variant'){
document.getElementById('c').style.color = 'green'
document.getElementById('b').style.color = 'grey'
document.getElementById('d').style.color = 'grey'
document.getElementById('a').style.color = 'grey'

}

if(selectedanswers[current]=='d_variant'){

document.getElementById('d').style.color = 'green'
document.getElementById('b').style.color = 'grey'
document.getElementById('c').style.color = 'grey'
document.getElementById('a').style.color = 'grey'

}
if(selectedanswers[current]=='d_variant'&&testData[current].correct=='a_variant'){


document.getElementById('d').style.color = 'red'
document.getElementById('b').style.color = 'grey'
document.getElementById('c').style.color = 'grey'
document.getElementById('a').style.color = 'green'
}

    if(selectedanswers[current]=='d_variant'&&testData[current].correct=='b_variant'){
  
    document.getElementById('d').style.color = 'red'
    document.getElementById('b').style.color = 'green'
    document.getElementById('a').style.color = 'grey'
    document.getElementById('b').style.color = 'grey'
    }
    if(selectedanswers[current]=='d_variant'&&testData[current].correct=='c_variant'){
       
    document.getElementById('d').style.color = 'red'
    document.getElementById('b').style.color = 'grey'
    document.getElementById('a').style.color = 'grey'
    document.getElementById('c').style.color = 'green'
    }
else{

if(selectedanswers[current]=='a_variant'&&testData[current].correct=='b_variant'){
document.getElementById('a').style.color = 'red'
document.getElementById('b').style.color = 'green'
document.getElementById('c').style.color = 'grey'
document.getElementById('d').style.color = 'grey'
}
if(selectedanswers[current]=='a_variant'&&testData[current].correct=='c_variant'){
document.getElementById('a').style.color = 'red'
document.getElementById('b').style.color = 'grey'
document.getElementById('c').style.color = 'green'
document.getElementById('d').style.color = 'grey'
}
if(selectedanswers[current]=='a_variant'&&testData[current].correct=='d_variant'){
document.getElementById('a').style.color = 'red'
document.getElementById('b').style.color = 'grey'
document.getElementById('c').style.color = 'grey'
document.getElementById('d').style.color = 'green'
}
if(selectedanswers[current]=='b_variant'&&testData[current].correct=='a_variant'){
document.getElementById('b').style.color = 'red'
document.getElementById('a').style.color = 'green'
document.getElementById('c').style.color = 'grey'
document.getElementById('d').style.color = 'grey'
}
if(selectedanswers[current]=='b_variant'&&testData[current].correct=='c_variant'){
document.getElementById('b').style.color = 'red'
document.getElementById('a').style.color = 'grey'
document.getElementById('c').style.color = 'green'
document.getElementById('d').style.color = 'grey'
}
if(selectedanswers[current]=='b_variant'&&testData[current].correct=='d_variant'){
document.getElementById('b').style.color = 'red'
document.getElementById('a').style.color = 'grey'
document.getElementById('c').style.color = 'grey'
document.getElementById('d').style.color = 'green'
}
if(selectedanswers[current]=='c_variant'&&testData[current].correct=='a_variant'){
document.getElementById('c').style.color = 'red'
document.getElementById('a').style.color = 'green'
document.getElementById('b').style.color = 'grey'
document.getElementById('d').style.color = 'grey'
}
if(selectedanswers[current]=='c_variant'&&testData[current].correct=='b_variant'){
document.getElementById('c').style.color = 'red'
document.getElementById('b').style.color = 'green'
document.getElementById('a').style.color = 'grey'
document.getElementById('d').style.color = 'grey'
}
if(selectedanswers[current]=='c_variant'&&testData[current].correct=='d_variant'){

document.getElementById('c').style.color = 'red'
document.getElementById('b').style.color = 'grey'
document.getElementById('a').style.color = 'grey'
document.getElementById('d').style.color = 'green'
}


}

}

var y=0
function notselect() {
    answer.forEach(answer => answer.checked = false)
}
function select() {
    let answers
    answer.forEach(answer => {
      
        if(answer.checked==true) {
           // m.set(testData[current].question,answers)
            answers = answer.id
            selectedanswers[current] = answers;
          
         
y++;
         
  
        }
    })
   

    return answers
    
}



next.addEventListener('click', () => {

h++;
    const answered = select()
   
    if(answered) {
      
     

       if(answered === testData[current].correct) {

           score++
           
       }
   
current++;
       if(current!=testData.length) {
           load()
           
document.getElementById("green").disabled=false
        
       }
       if(current==testData.length-1) {
      
        

document.getElementById("green").disabled=true

document.getElementById("nextresult").disabled=true

        // onsaveScore()
         
      
      
  
        
       }
   
    }

 
})




submit.addEventListener('click', () => {
    document.getElementById("submit").disabled=true
    const answered = select()

    if(answered === testData[current].correct) {

        score++
    }

    if(confirm('Are you sure for finishing test')){
            
        document.getElementById("timer").style.display = "none";
        
   alert('You answered'+' '+score+'/' +testData.length+' '+'questions correctly')
   
    }
    
 
    choice = document.getElementsByName("answer");
    submit.style.display = 'inline-block';
    previousresult.style.display='inline-block'
   nextresult.style.display='inline-block'
 
 
    choice = document.getElementsByName("answer");
    var checkedAnswer = null;
    for (var i = 0; i < choice.length; i++) {
        if(choice[i].checked) {
        
            selectedanswers[current] = choice[i].value;
     //return (choice[i].value)
        }
    }

    function hello(){
        for (var i = 0; i <choice.length; i++) {

            if(choice[i].checked) {
           
              
         return (choice[i].value)
  
            }
        }
    }

var checkedAnswer = null;
//for(i=selectedanswers.length-1;i>=0;i--){

if(hello()=='a_variant'){
    document.getElementById('a').style.color = 'green'
    document.getElementById('b').style.color = 'grey'
    document.getElementById('c').style.color = 'grey'
    document.getElementById('d').style.color = 'grey'
}

if(selectedanswers[current]=='b_variant'){
   
    document.getElementById('b').style.color = 'green'
    document.getElementById('a').style.color = 'grey'
    document.getElementById('c').style.color = 'grey'
    document.getElementById('d').style.color = 'grey'
 
}
if(selectedanswers[current]=='c_variant'){
    document.getElementById('c').style.color = 'green'
    document.getElementById('b').style.color = 'grey'
    document.getElementById('d').style.color = 'grey'
    document.getElementById('a').style.color = 'grey'

}

if(hello()=='d_variant'){
   
    document.getElementById('d').style.color = 'green'
    document.getElementById('b').style.color = 'grey'
    document.getElementById('c').style.color = 'grey'
    document.getElementById('a').style.color = 'grey'

}
if(selectedanswers[current]=='d_variant'&&testData[current].correct=='a_variant'){


document.getElementById('d').style.color = 'red'
document.getElementById('b').style.color = 'grey'
document.getElementById('c').style.color = 'grey'
document.getElementById('a').style.color = 'green'
}

    if(selectedanswers[current]=='d_variant'&&testData[current].correct=='b_variant'){

    document.getElementById('d').style.color = 'red'
    document.getElementById('b').style.color = 'green'
    document.getElementById('a').style.color = 'grey'
    document.getElementById('b').style.color = 'grey'
    }
    if(selectedanswers[current]=='d_variant'&&testData[current].correct=='c_variant'){
      
    document.getElementById('d').style.color = 'red'
    document.getElementById('b').style.color = 'grey'
    document.getElementById('a').style.color = 'grey'
    document.getElementById('c').style.color = 'green'
    }
else{

    if(selectedanswers[current]=='a_variant'&&testData[current].correct=='b_variant'){
    document.getElementById('a').style.color = 'red'
    document.getElementById('b').style.color = 'green'
    document.getElementById('c').style.color = 'grey'
    document.getElementById('d').style.color = 'grey'
    }
    if(selectedanswers[current]=='a_variant'&&testData[current].correct=='c_variant'){
    document.getElementById('a').style.color = 'red'
    document.getElementById('b').style.color = 'grey'
    document.getElementById('c').style.color = 'green'
    document.getElementById('d').style.color = 'grey'
    }
    if(selectedanswers[current]=='a_variant'&&testData[current].correct=='d_variant'){
    document.getElementById('a').style.color = 'red'
    document.getElementById('b').style.color = 'grey'
    document.getElementById('c').style.color = 'grey'
    document.getElementById('d').style.color = 'green'
    }
    if(selectedanswers[current]=='b_variant'&&testData[current].correct=='a_variant'){
    document.getElementById('b').style.color = 'red'
    document.getElementById('a').style.color = 'green'
    document.getElementById('c').style.color = 'grey'
    document.getElementById('d').style.color = 'grey'
    }
    if(selectedanswers[current]=='b_variant'&&testData[current].correct=='c_variant'){
    document.getElementById('b').style.color = 'red'
    document.getElementById('a').style.color = 'grey'
    document.getElementById('c').style.color = 'green'
    document.getElementById('d').style.color = 'grey'
    }
    if(selectedanswers[current]=='b_variant'&&testData[current].correct=='d_variant'){
    document.getElementById('b').style.color = 'red'
    document.getElementById('a').style.color = 'grey'
    document.getElementById('c').style.color = 'grey'
    document.getElementById('d').style.color = 'green'
    }
    if(selectedanswers[current]=='c_variant'&&testData[current].correct=='a_variant'){
    document.getElementById('c').style.color = 'red'
    document.getElementById('a').style.color = 'green'
    document.getElementById('b').style.color = 'grey'
    document.getElementById('d').style.color = 'grey'
    }
    if(selectedanswers[current]=='c_variant'&&testData[current].correct=='b_variant'){
    document.getElementById('c').style.color = 'red'
    document.getElementById('b').style.color = 'green'
    document.getElementById('a').style.color = 'grey'
    document.getElementById('d').style.color = 'grey'
    }
    if(selectedanswers[current]=='c_variant'&&testData[current].correct=='d_variant'){
        
    document.getElementById('c').style.color = 'red'
    document.getElementById('b').style.color = 'grey'
    document.getElementById('a').style.color = 'grey'
    document.getElementById('d').style.color = 'green'
    }
   
    
    }
    
    
    
//}
  
})

previousresult.addEventListener('click', () => {
 
    document.getElementById("submit").disabled=true
    if(current==0){
 
    document.getElementById("previousresult").disabled=true
        
      }
         if(current!=0){
         
             document.getElementById("previousresult").disabled=false
             
              }
              if(current==testData.length-1){
         
                document.getElementById("nextresult").disabled=true
                
            
                 }
                 if(current!=testData.length-1){
         
                    document.getElementById("nextresult").disabled=false
                    
                     }
          
    choice = document.getElementsByName("answer");
    var checkedAnswer = null;
    for (var i = 0; i < choice.length; i++) {
        if(choice[i].checked) {
        
            selectedanswers[current] = choice[i].value;
     //return (choice[i].value)
        }
    }

    function hello(){
        for (var i = 0; i <choice.length; i++) {
            if(choice[i].checked) {
         
                selectedanswers[current] = choice[i].value;
         return (choice[i].value)
       
            }
        }
    }

var checkedAnswer = null;
//for(i=selectedanswers.length-1;i>=0;i--){

hello()
if(hello()=='a_variant'){
    document.getElementById('a').style.color = 'green'
    document.getElementById('b').style.color = 'grey'
    document.getElementById('c').style.color = 'grey'
    document.getElementById('d').style.color = 'grey'
}

if(selectedanswers[current]=='b_variant'){
   
    document.getElementById('b').style.color = 'green'
    document.getElementById('a').style.color = 'grey'
    document.getElementById('c').style.color = 'grey'
    document.getElementById('d').style.color = 'grey'
 
}
if(selectedanswers[current]=='c_variant'){
    document.getElementById('c').style.color = 'green'
    document.getElementById('b').style.color = 'grey'
    document.getElementById('d').style.color = 'grey'
    document.getElementById('a').style.color = 'grey'

}

if(selectedanswers[current]=='d_variant'){
   
    document.getElementById('d').style.color = 'green'
    document.getElementById('b').style.color = 'grey'
    document.getElementById('c').style.color = 'grey'
    document.getElementById('a').style.color = 'grey'

}
if(selectedanswers[current]=='d_variant'&&testData[current].correct=='a_variant'){
  

document.getElementById('d').style.color = 'red'
document.getElementById('b').style.color = 'grey'
document.getElementById('c').style.color = 'grey'
document.getElementById('a').style.color = 'green'
}

    if(selectedanswers[current]=='d_variant'&&testData[current].correct=='b_variant'){
       
    document.getElementById('d').style.color = 'red'
    document.getElementById('b').style.color = 'green'
    document.getElementById('a').style.color = 'grey'
    document.getElementById('b').style.color = 'grey'
    }
    if(selectedanswers[current]=='d_variant'&&testData[current].correct=='c_variant'){
     
    document.getElementById('d').style.color = 'red'
    document.getElementById('b').style.color = 'grey'
    document.getElementById('a').style.color = 'grey'
    document.getElementById('c').style.color = 'green'
    }
else{

    if(selectedanswers[current]=='a_variant'&&testData[current].correct=='b_variant'){
    document.getElementById('a').style.color = 'red'
    document.getElementById('b').style.color = 'green'
    document.getElementById('c').style.color = 'grey'
    document.getElementById('d').style.color = 'grey'
    }
    if(selectedanswers[current]=='a_variant'&&testData[current].correct=='c_variant'){
    document.getElementById('a').style.color = 'red'
    document.getElementById('b').style.color = 'grey'
    document.getElementById('c').style.color = 'green'
    document.getElementById('d').style.color = 'grey'
    }
    if(selectedanswers[current]=='a_variant'&&testData[current].correct=='d_variant'){
    document.getElementById('a').style.color = 'red'
    document.getElementById('b').style.color = 'grey'
    document.getElementById('c').style.color = 'grey'
    document.getElementById('d').style.color = 'green'
    }
    if(selectedanswers[current]=='b_variant'&&testData[current].correct=='a_variant'){
    document.getElementById('b').style.color = 'red'
    document.getElementById('a').style.color = 'green'
    document.getElementById('c').style.color = 'grey'
    document.getElementById('d').style.color = 'grey'
    }
    if(selectedanswers[current]=='b_variant'&&testData[current].correct=='c_variant'){
    document.getElementById('b').style.color = 'red'
    document.getElementById('a').style.color = 'grey'
    document.getElementById('c').style.color = 'green'
    document.getElementById('d').style.color = 'grey'
    }
    if(selectedanswers[current]=='b_variant'&&testData[current].correct=='d_variant'){
    document.getElementById('b').style.color = 'red'
    document.getElementById('a').style.color = 'grey'
    document.getElementById('c').style.color = 'grey'
    document.getElementById('d').style.color = 'green'
    }
    if(selectedanswers[current]=='c_variant'&&testData[current].correct=='a_variant'){
    document.getElementById('c').style.color = 'red'
    document.getElementById('a').style.color = 'green'
    document.getElementById('b').style.color = 'grey'
    document.getElementById('d').style.color = 'grey'
    }
    if(selectedanswers[current]=='c_variant'&&testData[current].correct=='b_variant'){
    document.getElementById('c').style.color = 'red'
    document.getElementById('b').style.color = 'green'
    document.getElementById('a').style.color = 'grey'
    document.getElementById('d').style.color = 'grey'
    }
    if(selectedanswers[current]=='c_variant'&&testData[current].correct=='d_variant'){
       
   
    document.getElementById('c').style.color = 'red'
    document.getElementById('b').style.color = 'grey'
    document.getElementById('a').style.color = 'grey'
    document.getElementById('d').style.color = 'green'

    }
     

    
    }
    
    
    
//}
  
})

document.getElementById('timer').innerHTML =
  10 + ":" +00;
startTimer();


function startTimer() {
  var presentTime = document.getElementById('timer').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}
  if(m<0){
    return
  }
  if(m==0 &&s==0){
alert("Time is finished")
 tests.innerHTML = `
          <h3>You answered ${score}/${testData.length} questions correctly</h3>

           <button onclick="location.reload()">Reload</button>
           `

  }
  document.getElementById('timer').innerHTML =
    m + ":" + s;
  console.log(m)
  setTimeout(startTimer, 1000);
  
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; 
  if (sec < 0) {sec = "59"};
  return sec;
}
   




    function onsaveScore() {
       var today=new Date();
 
        var date =   today.getFullYear()
        var testNo=j;
        var scores=score;
    
        var scoreObject = {};
        scoreObject.date = date;

        scoreObject.testNo = testNo;
     scoreObject.scores = scores;
        
        var http = new XMLHttpRequest();
        if(this.request==200){
        alert("sucess")
        }
        http.onload = function () {
            getAllScores();
        }
        http.open("POST", "http://localhost:8105/results", true)
        http.setRequestHeader("Authorization", "Basic " +  window.btoa(username+":"+password));
        http.setRequestHeader("Content-Type", "application/json")
        http.send(JSON.stringify(scoreObject));

    }
    function onsaveVariant() {
        var today=new Date();

         // var date =   today.getFullYear()+'-'+(today.getMonth())+'-'+today.getDate();
         var given_answer =   select()
         var context=testData[current].question
       
     
         var answerObject = {};
         answerObject.context = context;
         answerObject.answer = given_answer;
   
         var http = new XMLHttpRequest();
       
    
         http.open("POST", "http://localhost:8105/answers", true)
         http.setRequestHeader("Authorization", "Basic " +  window.btoa(username+":"+password));
         http.setRequestHeader("Content-Type", "application/json")
         http.send(JSON.stringify(answerObject));
 
     }
    function getAllScores() {
     
        var http = new XMLHttpRequest();
        http.onload = function () {
            var response = this.responseText;
            var scoresArray = JSON.parse(response);
           scoreTable(scoresArray);
        }
        http.open("GET", "http://localhost:8105/results", true)
        http.setRequestHeader("Authorization", "Basic " +  window.btoa(username+":"+password));
        http.setRequestHeader("Content-Type", "application/json")
        http.send(JSON.stringify);
    }
    // import { msg, PI, addNumbers } from './main.js';
    
var answers = [];


 
function renderQuestions () {
  



        testData.innerHTML += '<br /><br /><p id="error"></p>'
        if (typeof selectedanswers[current] !== undefined) {
            var radios = document.getElementsByName('answer');
            var rLen = radios.length, i;
            for (i = 0; i < rLen; ++i) {
                if (selectedanswers[current] === radios[i].value) {
                    
                    radios[i].checked = true;
                }
            }
        }
    }
    
//         for(j=0;j<testData.length;j++){
// if(testData[current].answer){

// }

        
    

function scoreTable(scores) {

     var scoresTbodyElement = document.getElementById("scores-tbody");
     var scoresTbodyHtml = "";
     for (var i = 0; i < scores.length; i++) {
         var scored= scores[i];
  
         customersTbodyHtml += "<tr><td>" + scored.id + "</td>";
         scoresTbodyHtml += "<tr><td>" + scored.testNo + "</td>";
         scoresTbodyHtml+= "<tr><td>" + scored.date + "</td>";
         scoresTbodyHtml+= "<tr><td>" + scored.scores+ "</td>";
        
        




     }
     scoresTbodyElement .innerHTML = scoresTbodyElement ;
 }
function openhome(){
if(confirm("Are you sure exit test and go home page")){
window.location.href="profile.html"
}
}

var username=localStorage.getItem('username')
var password=localStorage.getItem('password')
const testData = [
    {
    
    
id:0,
        question:"1. Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "javascript",
        correct: "d_variant",
        
    },

    {id:1,
        question: "2. What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b_variant",
    },
    {id:2,
        question: "3. What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a_variant",
    },
    {id:3,
        question: "4. What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b_variant",
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
var usernameInput=document.getElementById('username');
let current = 0
let score = 0
var no_box = document.querySelector('.quiz');
var total=60*10
var minute=parseInt(total/60)
var second=parseInt(total%60)
var i=0;
var k=0;
 var h=0;
 var z=0;
const m= new Map();



load()

function load() {

notselect()
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
  }
    
}

function previousload(){

current--;
    const currented = testData[current]
  
            
        question.innerText = currented.question
        a_variant.innerText = currented.a
        b_variant.innerText = currented.b
        c_variant.innerText = currented.c
        d_variant.innerText = currented.d

z--;

 }


function notselect() {
    answer.forEach(answer => answer.checked = false)
}
function select() {
    let answers
    answer.forEach(answer => {
      
        if(answer.checked==true) {
            
            answers = answer.id
m.set(testData[current].id,answers)
           
        }
    })

    return answers
    
}
var h=0
next.addEventListener('click', () => {
    
    const answered = select()
    
    if(answered) {
      

       if(answered === testData[current].correct) {
    
           score++
       }
   
current++;
       if(current < testData.length) {
           load()
           
        
       } else {
  
           tests.innerHTML = `
           <h5>You answered ${score}/${testData.length} questions correctly</h5>

           <button type="button" id="rl"class="btn btn-sucess" onclick="location.reload()">Reload</button>
           `
       }
   
    }
    h++;
    z++;
})


var j=0;

submit.addEventListener('click', () => {

    onsaveScore()
    j++;
  
    //var presentTime = document.getElementById('timer').innerHTML;
    if(confirm('Are you sure for finishing test')){
        
        document.getElementById("timer").style.display = "none";
   
        const answered = select()
        if(answered === testData[current].correct){
            
                document.getElementById('question').style.color = 'green';
                if(testData[current].correct=='a_variant'){
                    document.getElementById('a').style.color = 'green'
               
                }
            
                if(testData[current].correct=='b_variant'){
                   
                    document.getElementById('b').style.color = 'green'
                 
                }
                if(testData[current].correct=='c_variant'){
                    document.getElementById('c').style.color = 'green'
           
                }
            
                if(testData[current].correct=='d_variant'){
                   
                    document.getElementById('d').style.color = 'green'
         
                }
               
              
            }
            
          
          else{
             document.getElementById('question').style.color = 'red';
             
            switch( testData[current].correct) {
            
                case 'a_variant':
                  
                    document.getElementById('a').style.color = 'green'
                  break;
                case 'b_variant':
                  
                    document.getElementById('b').style.color = 'green'
                  break;
                  case 'c_variant':
    
                    document.getElementById('c').style.color = 'green'
                  break;
                default:
                
                    document.getElementById('d').style.color = 'green'
              }
         
       } 
    }
  
})



document.getElementById('timer').innerHTML =
  08 + ":" +00;
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
    //    var username=usernameInput.value
    //    var password=passwordInput.value
        // var date =   today.getFullYear()+'-'+(today.getMonth())+'-'+today.getDate();
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
    function getAllScores() {
        var http = new XMLHttpRequest();
        http.onload = function () {
            var response = this.responseText;
            var scoresArray = JSON.parse(response);
           //scoreTable(scoresArray);
        }
        http.open("GET", "http://localhost:8105/results", true)
        http.setRequestHeader("Authorization", "Basic " +  window.btoa(username+":"+password));
        http.setRequestHeader("Content-Type", "application/json")
        http.send(JSON.stringify);
    }
    // function customerTable(customers) {
    //     var customersTbodyElement = document.getElementById("customers-tbody");
    //     var customersTbodyHtml = "";
    //     for (var i = 0; i < customers.length; i++) {
    //         var customer = customers[i];
    //         customersTbodyHtml += "<tr><td>" + customer.id + "</td>";
    //         customersTbodyHtml += "<tr><td>" + customer.name + "</td>";
    //         customersTbodyHtml += "<tr><td>" + customer.surname + "</td>";
    //         customersTbodyHtml += "<tr><td>" + customer.address + "</td>";
    //         customersTbodyHtml += "<tr><td>" + customer.email + "</td>";
    //          customersTbodyHtml += "<tr><td>" + customer.nationality + "</td>";
    //         customersTbodyHtml += "<tr><td>" + customer.date + "</td>";
    //         customersTbodyHtml += "<tr><td>" + customer.phone + "</td>";

    //         customersTbodyHtml += "<tr><td>" + customer.gender + "</td></tr>";
           




    //     }
    //     customersTbodyElement.innerHTML = customersTbodyHtml;
    //}
    
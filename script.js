const ques=[
    {
        qs: "Which of the following methods is used to add a new element to the end of an array?",
    ans:[
        {text:"push()",correct:true},
        {text:"pop()",correct:false},
        {text:"shift()",correct:false},
        {text:"unshift()",correct:false}
    ]
    },
    {
        qs: "How do you declare a variable in JavaScript that is block-scoped?",
    ans:[
        {text:"var",correct:false},
        {text:"let",correct:false},
        {text:"const",correct:false},
        {text:"both let & const ",correct:true}
    ]
    },
    {
        qs: "Which method is used to remove the last element from an array?",
    ans:[
        {text:"pop()",correct:true},
        {text:"push()",correct:false},
        {text:"shift()",correct:false},
        {text:"splice()",correct:false}
    ]
    },
    {
        qs: "Which keyword is used to define a constant in JavaScript?",
    ans:[
        {text:"var",correct:false},
        {text:"let",correct:false},
        {text:"constant",correct:false},
        {text:"const",correct:true}
    ]
    }

   
];

const qstn=document.getElementById("question");
const ansbtn=document.getElementById("ansbtn");
const nxt=document.getElementById("nxtbtn");

let idx=0
let score=0

function start()
{
    idx=0;
    score=0;
    nxt.innerHTML="Next";
    showQuiz();
}

function showQuiz()
{  resetState();
   let currentQues=ques[idx];
   let quesNo=idx+1;
   qstn.innerHTML=quesNo+"."+currentQues.qs

   currentQues.ans.forEach(ans =>{
    const button=document.createElement("button");
    button.innerHTML=ans.text;
    button.classList.add('btn');
    ansbtn.appendChild(button);

    if(ans.correct){
        button.dataset.correct=ans.correct;
    }
    button.addEventListener("click",selectans)
   });
}
function selectans(e){
const selectedBtn=e.target;
const isTrue=selectedBtn.dataset.correct==="true";
if(isTrue)
{
    selectedBtn.classList.add("correct");
    score++;
}
else{
    selectedBtn.classList.add("incorrect");
}
Array.from(ansbtn.children).forEach(button=>{
    if(button.dataset.correct==="true"){
        button.classList.add("correct");
    }
    button.disabled= "true";
});
nxtbtn.style.display="block";
}
start();
function resetState(){
  nxtbtn.style.display="none";
  while(ansbtn.firstChild)
  {
    ansbtn.removeChild(ansbtn.firstChild);
  }
}
function showScore()
{
    resetState();
    qstn.innerHTML=`You Scored ${score} out of ${ques.length}!!!!`;
    nxtbtn.innerHTML="Play Again";
    nxtbtn.style.display="block";
}
function handlenxtbtn(){
    idx++;
    if(idx<ques.length)
    {
        showQuiz();
    }
    else{
        showScore();
    }
}
nxtbtn.addEventListener("click",()=>{
    if(idx<ques.length)
    {
        handlenxtbtn();
    }
    else{
        start();
    }
})
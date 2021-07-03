const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");
const endPoint = 6;
select=[];


function goResult(){
  qna.style.WebkitAnimation = "fadeOut 1s";
  qna.style.animation = "fadeOut 1s";
  setTimeout(() => {
    result.style.WebkitAnimation = "fadeIn 1s";
    result.style.animation = "fadeIn 1s";
    setTimeout(() => {
      qna.style.display = "none";
      result.style.display = "block"
    }, 450)})

    console.log(select);
    calResult();
  
  }

  function calResult(){

    for(let i =0; i<endPoint; i++){
      var target0 =qnaList[0].a[select[i]];
      var target1 =qnaList[1].a[select[i]];
      var target2 =qnaList[2].a[select[i]];
      var target3 =qnaList[3].a[select[i]];
      var target4 =qnaList[4].a[select[i]];

      var res0 = target0.type[0];
      var res1 = target1.type[0];
      var res2 = target2.type[0];
      var res3 = target3.type[0];
      var res4 = target4.type[0];
      
      console.log(res0);
      console.log(res1);
      console.log(res2);
      console.log(res3);
      console.log(res4);

      
      const resultName1 = document.querySelector('.resultname1');
      const resultName2 = document.querySelector('.resultname2');
      const resultName3 = document.querySelector('.resultname3');
      const resultName4 = document.querySelector('.resultname4');
      const resultName5 = document.querySelector('.resultname5');

      if(res0 == 'c1')
      {
         resultName1.innerHTML = ' CPU : intel i3';
      }
      else if(res0 == 'c2')
      {
        resultName1.innerHTML = ' CPU : intel i5';
      }
      else if(res0 == 'c3')
      {
        resultName1.innerHTML = ' CPU : intel i7';
      } 
      else {
        console.log("");
      }

      if(res1 == 'r1')
      {
        resultName2.innerHTML = ' RAM : 4GB';
      } 
      else if(res1 == 'r2')
      {
        resultName2.innerHTML = ' RAM : 8GB';
      } 
      else if(res1 == 'r3')
      {
        resultName2.innerHTML = ' RAM : 16GB 이상';
      } 
      else {
        console.log("");
      }

      if(res2 == 'ss1')
      {
        resultName3.innerHTML = ' SSD : 128GB';
      } 
      else if(res2 == 'ss2')
      {
        resultName3.innerHTML = ' SSD : 256GB';
      } 
      else if(res2 == 'ss3')
      {
        resultName3.innerHTML = ' SSD : 512GB 이상';
      }
      else {
        console.log("");
      }

      if(res3 == 's1')
      {
        resultName4.innerHTML = 'LCD : 11-13인치';
      } 
      else if(res3 == 's2')
      {
        resultName4.innerHTML = 'LCD : 14-15인치';
      } 
      else if(res3 == 's3')
      {
        resultName4.innerHTML = 'LCD : 16-17인치';
      } 
      else {
        console.log("");
      }

      if(res4 == 'g1')
      {
        resultName5.innerHTML = ' GPU : 내장 그래픽';
      } 
      else if(res4 == 'g2')
      {
        resultName5.innerHTML = ' GPU : 외장 그래픽';
      } 
      else {
        console.log("");
      }
}
}

function addAnswer(answerText, qIdx, idx){
  var a = document.querySelector('.answerBox');
  var answer = document.createElement('button');
  answer.classList.add('answerList');
  answer.classList.add('my-3');
  answer.classList.add('py-3');
  answer.classList.add('mx-auto');
  answer.classList.add('fadeIn');

  a.appendChild(answer);
  answer.innerHTML = answerText;

  answer.addEventListener("click", function(){
    var children = document.querySelectorAll('.answerList');
    for(let i = 0; i < children.length; i++){
      children[i].disabled = true;
      children[i].style.WebkitAnimation = "fadeOut 0.5s";
      children[i].style.animation = "fadeOut 0.5s";
    }
    setTimeout(() => {
      select[qIdx] = idx;
      for(let i = 0; i < children.length; i++){
        children[i].style.display = 'none';
      }
      goNext(++qIdx);
    },450)
  }, false);
}

function goNext(qIdx){
  if(qIdx+1 === endPoint){
    goResult();
    return;
  }
  var q = document.querySelector('.qBox');
  q.innerHTML = qnaList[qIdx].q;
  for(let i in qnaList[qIdx].a){
    addAnswer(qnaList[qIdx].a[i].answer, qIdx, i);
  }
  var progress = document.querySelector('.progressBar');
  progress.style.width = (100/endPoint) * (qIdx+1) + '%';

}

function begin(){
  main.style.WebkitAnimation = "fadeOut 1s";
  main.style.animation = "fadeOut 1s";
  setTimeout(() => {
    qna.style.WebkitAnimation = "fadeIn 1s";
    qna.style.animation = "fadeIn 1s";
    setTimeout(() => {
      main.style.display = "none";
      qna.style.display = "block"
    }, 450)
    let qIdx = 0;
    goNext(qIdx);
  }, 450);
}

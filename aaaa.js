//doc节点
const pointDoc = document.getElementById("point");
const nameDoc = document.getElementById("name");
const endBtnDoc = document.getElementById("endBtn");
const startBtnDoc = document.getElementById("startBtn");

//参数
const maxPointString = 'maxPoint'; 
let point = 0;
let dividend  = 0 //被除数
let divisor  = 0; //除数
let count = 0;
let end = false;
let timer = undefined;
let maxPoint = -1;

init();

/**
 * 初始化函数 
 **/
function init(){
  pointDoc.innerText = `当前分数${ 0 }`;
  nameDoc.innerText = `等待开始`;
  endBtnDoc.style.display = 'none';
  startBtnDoc.style.display = 'block';

  const point = localStorage.getItem(maxPointString);

  startBtnDoc.addEventListener('click', () => {
    start();
  });
  endBtnDoc.addEventListener('click', () => {
    giveResult()
  });

  if(!point){
    localStorage.setItem(maxPointString, maxPoint);
  }
  else{
    maxPoint = Number(maxPoint);
  }
}

//====================================状态类====================================
function start(){
  let dividendString  = '';
  let divisorString  = '';

  for(let i = 0; i < 6; i++){
      var ccc = Math.floor((Math.random() * 10));

      dividendString += String(ccc);

      if( i < 3){
          var dd = Math.floor((Math.random() * 10));

          divisorString += String(dd); 
      }
  }

  endBtnDoc.style.display = 'block';
  startBtnDoc.style.display = 'none';
  dividend = Number(dividendString);
  divisor = Number(divisorString);
  nameDoc.innerText = `公式${ dividend }/${ divisor }`;
  timer = setInterval(() => {
    count++;
    if(count > 90){
      giveResult(true);
    }
  }, 1000 * 1);
}

function finishAnswer(overTime){
  nameDoc.innerText = `${ overTime ? '超时,' : '' }结果${ (dividend / divisor ).toFixed(1) }`;
  clearInterval(timer);
  count = 0;
}

function endGame(){
  if(point > maxPoint){
    maxPoint = point;
    localStorage.setItem(maxPointString, point);
  }

  pointDoc.innerText = `最终分数${ point },历史最高分${ maxPoint }`;
  end = true;
  endBtnDoc.style.display = 'none';
  startBtnDoc.style.display = 'block';
}

//====================================属性类====================================


//====================================工具类====================================
function giveResult(overTime){
  if(end){
    return;
  }

  finishAnswer(overTime);
  
  const answer = Number(document.getElementById("field1").value);

  if(answer !== Number((dividend / divisor ).toFixed(1)) || overTime){
    endGame();
  }
  else{
    point += 1;
    pointDoc.innerText = `当前分数${ point }`;

    start();
  }
}
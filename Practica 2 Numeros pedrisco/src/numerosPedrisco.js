/*
 * * @Author: Adrián Epifanio
 * * @Date:   2020-02-16 15:13:32
 * * @Last Modified by:   Adrián Epifanio
 * * @Last Modified time: 2020-02-16 16:51:51
 * */
let myArgs = process.argv.slice(2);
let N = parseInt(myArgs[0]);
let M = parseInt(myArgs[1]);
let q, q1, p, p1;
let firstTime = true;
if(M > N){
  for(let i = N; i < M; i++){
    let x = i;
    let counter = 0;
    while(x != 1){
      if(x%2 === 0){
        x = x / 2;
      }
      else{
        x = (x * 3) + 1;
      }
      counter++;
    }
    if(firstTime){ //For asigning max and min the first time
      p = counter;
      p1 = i;
      q = counter;
      q1 = i;
      firstTime = false;
    }
    else{
      if(counter < p){
        p = counter;
        p1 = i;
      }
      if(counter > q){
        q = counter;
        q1 = i;
      }
    }
    console.log("<", i, "> -> <", counter, ">");
  }
  console.log("MIN: ", p1, " -> <", p, ">");
  console.log("MAX: ", q1, " -> <", q, ">");
}

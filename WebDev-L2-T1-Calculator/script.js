const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let expression = "";

buttons.forEach(button => {

button.addEventListener("click",()=>{

const value=button.dataset.value;
const action=button.dataset.action;

if(value){

expression+=value;
display.value=expression;

}

if(action==="clear"){

expression="";
display.value="";

}

if(action==="backspace"){

expression=expression.slice(0,-1);
display.value=expression;

}

if(action==="equals"){

calculate();

}

});

});

function calculate(){

let numbers=[];
let operators=[];

let current="";

for(let i=0;i<expression.length;i++){

const ch=expression[i];

if("0123456789.".includes(ch)){

current+=ch;

}else{

numbers.push(parseFloat(current));
operators.push(ch);
current="";

}

}

numbers.push(parseFloat(current));

for(let i=0;i<operators.length;i++){

if(operators[i]=="*" || operators[i]=="/"){

let result;

if(operators[i]=="*"){

result=numbers[i]*numbers[i+1];

}else{

if(numbers[i+1]===0){

display.value="Error";
expression="";
return;

}

result=numbers[i]/numbers[i+1];

}

numbers.splice(i,2,result);
operators.splice(i,1);
i--;

}

}

let result=numbers[0];

for(let i=0;i<operators.length;i++){

switch(operators[i]){

case "+":
result+=numbers[i+1];
break;

case "-":
result-=numbers[i+1];
break;

}

}

display.value=result;
expression=result.toString();

}

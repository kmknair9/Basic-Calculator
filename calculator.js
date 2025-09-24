let firstValue = '';
let operator = '';
let secondValue = '';
let result = 0;

  function generateOutput(key){
    if(key == 'C'){
      document.querySelector('.screen').value='';
      firstValue = '';
      secondValue = '';
      operator = '';
    }
    else if(key == '='){
        if(firstValue != '' && secondValue != ''){
        if(operator == '+') {
          result = Number(firstValue)+ Number(secondValue); 
          document.querySelector('.screen').value= result;
        }
        else if(operator == '-') {
          result = Number(firstValue) - Number(secondValue); 
          document.querySelector('.screen').value= result;
        }
        else if(operator == '*') {
          result = Number(firstValue) * Number(secondValue); 
          document.querySelector('.screen').value= result;
        }
        else if(operator == '/') {
          if(secondValue == 0 || (firstValue == 0 && secondValue == 0 )){
            document.querySelector('.screen').value='Syntax Error';
          }
          else{
            result = Number(firstValue) / Number(secondValue); 
            document.querySelector('.screen').value = result;
          }
        }
        else if(operator == '%') {
          result = (Number(firstValue) * Number(secondValue)); 
          document.querySelector('.screen').value = result/100;
        }
        firstValue = result;
        operator = '';
        secondValue = '';
      }
    }
    else if(key == '0' || key == '1' || key == '2' || key == '3' || key == '4' || key == '5' || key == '6' || key == '7' || key == '8' || key == '9'){
      if((firstValue == '' && operator == '') || (firstValue != ''  && operator == '')){ 
        firstValue = document.querySelector('.screen').value += key;
      }
      else if(firstValue != '' && operator != ''){
        if(secondValue == ''){
          document.querySelector('.screen').value = '';
        }
        secondValue =  document.querySelector('.screen').value += key;
      }
    }
    else if(key == '+' || key == '-' || key == '*' || key == '/' || key == '%'){
      operator = key;
      document.querySelector('.screen').value=operator;
    }
  }
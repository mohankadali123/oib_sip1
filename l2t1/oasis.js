const screen = document.getElementById('screen');
const buttons = document.querySelectorAll('.but');

function calculateExpression(expression) {
  const parts = expression.split("√");
  const multiplier = parseFloat(parts[0]) || 1; // Extract the number before "√" for multiplication
  const rootExpression = parts[1]; // Extract the expression inside "√" for rooting
  const result = Math.sqrt(eval(rootExpression)); // Evaluate the expression inside "√" and calculate the square root
  const evaluatedNumber = parseFloat(parts[2]) || 0; // Extract the number after "√" for evaluation

  return multiplier * result + evaluatedNumber;
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonText = button.textContent;
    
    if (buttonText === 'clear') {

      screen.value = '';
    } 
    else if(buttonText=='ans')
    {
      if((screen.value).includes('√'))
      {
         screen.value=calculateExpression(screen.value);
      }
      else{
      try {
        const result = eval(screen.value);
        screen.value = result;
      } catch (error) {
        screen.value = 'Error';
      }
    }
    }
    else if (buttonText === 'del') {
      screen.value = screen.value.slice(0, -1);
    } else if (buttonText === 'Enter') {
      if((screen.value).includes('√'))
      {
         screen.value=calculateExpression(screen.value);
      }
      else{
      try {
        const result = eval(screen.value);
        screen.value = result;
      } catch (error) {
        screen.value = 'Error';
      }
    }

    } else {
      if(buttonText=='x')
      screen.value += '*';
      else if(buttonText=='÷')
      {
        screen.value += '/';
      }  
      else if(buttonText=='±')
      {
         screen.value = eval(screen.value)*-1; 
      }       
      else
      screen.value+=buttonText;
    }
  });
});

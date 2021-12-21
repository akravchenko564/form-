function op() {
    var num1 = parseInt(document.getElementById('input1').value);
    var num2 = parseInt(document.getElementById('input2').value);
    var equ = document.getElementById('select').value;

    if (equ === '+'){
        document.getElementById('result').value = Math.round (num1 + num2);
    } else if (equ === '-'){ 
        document.getElementById('result').value = Math.round (num1 - num2);
    }  else if (equ === '*'){ 
        document.getElementById('result').value = Math.round (num1 * num2);
    } else if (equ === '/'){ 
        document.getElementById('result').value = Math.round (num1 / num2);
    } 
}
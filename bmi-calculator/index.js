
const buttonEle=document.getElementById('btn');
const inputEle=document.getElementById('bmi-result');
const weightEle=document.getElementById('weight-condition');

function calculateBMI (){
    const weightValue=document.getElementById('weight').value;
    const heightValue=document.getElementById('height').value/100;

    const bmiValue=weightValue/(heightValue*heightValue);
    inputEle.value=bmiValue; //set my input value of bmi results to what we calculated


    if (bmiValue < 18.5) {
        weightEle.innerText = 'Underweight';
    } else if (bmiValue < 25) {
        weightEle.innerText = 'Normal weight';
    } else if (bmiValue < 30) {
        weightEle.innerText = 'Overweight';
    } else {
        weightEle.innerText = 'Obese';
    }

}

buttonEle.addEventListener("click",calculateBMI);
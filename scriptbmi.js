function calc()
{
    var h= parseFloat(document.getElementById('height').value)
    var w = parseFloat(document.getElementById('weight').value)
    var BMI = w/(h**2)
    if (BMI <18.5)
    document.getElementById('result').value="underweight";
    else if (BMI >=18.5 && BMI <25)
    document.getElementById('result').value="normal range";
    else if (BMI >=25 && BMI <30)
    document.getElementById('result').value="overweight";
    else if (BMI >=30 && BMI <35)
    document.getElementById('result').value="obese class 1";
    else if (BMI >=35 && BMI <40)
    document.getElementById('result').value="obese class 2";
    else
    document.getElementById('result').value="obese class 3";
}


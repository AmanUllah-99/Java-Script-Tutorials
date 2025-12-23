 const form =document.querySelector("form")
 form.addEventListener("submit",function(e){
    e.preventDefault();
    const weight = parseFloat(document.querySelector("#weight").value);
    const height = parseFloat(document.querySelector("#height").value);
    const calculator = document.querySelector("#result");
    if(isNaN(weight) || weight <= 0 ) {
        calculator.textContent = `Please enter valid weight ${weight}`;
        return;
    } else if( isNaN(height) ||  height <= 0){
        calculator.textContent = `Please enter valid height. ${height}`;
        return;
    }else {
        const bmi = (weight / (height * height)).toFixed(2);
        calculator.textContent = `Your BMI is ${bmi}`;
        if(bmi < 18.5){
            calculator.textContent += " You are underweight.";
        } else if(bmi >= 18.5 && bmi < 24.9){
            calculator.textContent += " You have a normal weight.";
        } else if(bmi >= 25 && bmi < 29.9){
            calculator.textContent += " You are overweight.";
        } else {
            calculator.textContent += " You are obese.";
        }
    }

 })
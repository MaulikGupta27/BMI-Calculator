function calculate() {
    let height = parseInt(document.querySelector("#height").value);
    let weight = parseInt(document.querySelector("#weight").value);
    height /= 100;
    let bmi = (weight / (height ** 2)).toFixed(2);
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        document.querySelector("#result").innerHTML = "Please enter valid height and weight.";
        return;
    }
    else if (bmi < 18.6) {
        document.querySelector("#result").innerHTML = `Your BMI is ${bmi}. You are under-weight.`
    }
    else if (bmi >= 18.6 && bmi <= 24.9) {
        document.querySelector("#result").innerHTML = `Your BMI is ${bmi}. You are normal-weight.`
    }
    else if (bmi > 24.9 && bmi <= 29.9) {
        document.querySelector("#result").innerHTML = `Your BMI is ${bmi}. You are over-weight.`
    }
    else if (bmi > 29.9) {
        document.querySelector("#result").innerHTML = `Your BMI is ${bmi}. You are obese.`
    }
}

document.querySelector("button").addEventListener("click", calculate, false);
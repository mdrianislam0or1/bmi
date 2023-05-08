const calculateBMI = () => {
	const weight = parseFloat(document.getElementById("weightInput").value);
	const height = parseFloat(document.getElementById("heightInput").value);

	if (isNaN(weight) || isNaN(height) || height === 0) {
		document.getElementById("result").innerHTML = "Please enter valid values.";
		return;
	}

	const bmi = weight / (height * height);
	document.getElementById("result").innerHTML = `Your BMI is ${bmi.toFixed(2)}.`;
}

document.getElementById("calculateBtn").addEventListener("click", calculateBMI);

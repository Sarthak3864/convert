function convert() {
    const tempInput = document.getElementById("temp").value;
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;
    let result;

    if (fromUnit === "celsius" && toUnit === "fahrenheit") {
        result = (tempInput * 9/5) + 32;
    } else if (fromUnit === "celsius" && toUnit === "kelvin") {
        result = parseFloat(tempInput) + 273.15;
    } else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
        result = (tempInput - 32) * 5/9;
    } else if (fromUnit === "fahrenheit" && toUnit === "kelvin") {
        result = (tempInput - 32) * 5/9 + 273.15;
    } else if (fromUnit === "kelvin" && toUnit === "celsius") {
        result = tempInput - 273.15;
    } else if (fromUnit === "kelvin" && toUnit === "fahrenheit") {
        result = (tempInput - 273.15) * 9/5 + 32;
    } else {
        result = tempInput; // No conversion needed
    }

    document.getElementById("result").innerHTML = result.toFixed(2) + " " + toUnit;
}
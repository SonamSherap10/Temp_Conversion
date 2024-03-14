function convertTemperature() {
    var inputTemperature = document.getElementById("inputTemperature").value;
    var inputUnit = document.querySelector('input[name="inputUnit"]:checked').value;
    var outputUnit = document.querySelector('input[name="outputUnit"]:checked').value;
  
    console.log(inputTemperature, outputUnit, inputUnit)
    fetch('index.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'temperature=' + inputTemperature + '&inputUnit=' + inputUnit + '&outputUnit=' + outputUnit
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById("result").innerHTML = data;
        console.log(data)
    })
  }
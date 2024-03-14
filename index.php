<?php

$inputTemperature = $_POST['temperature'];
$inputUnit = $_POST['inputUnit'];
$outputUnit = $_POST['outputUnit'];


if ($inputUnit === 'celsius') {
    $outputTemperature = ($inputTemperature * 9 / 5) + 32; 
    $data = $outputTemperature+ "°farenhite ";
} else {
    $outputTemperature = ($inputTemperature - 32) * 5 / 9; 
    $data = $outputTemperature + "°C";
}

?>

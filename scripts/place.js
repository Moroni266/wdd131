function calculateWindChill(tempC, windKmh) {
    return (
        13.12 +
        0.6215 * tempC -
        11.37 * Math.pow(windKmh, 0.16) +
        0.3965 * tempC * Math.pow(windKmh, 0.16)
    );
}

function displayWindChill() {
    const temp = parseFloat(document.getElementById("temp").textContent);
    const wind = parseFloat(document.getElementById("wind").textContent);
    const windChillOutput = document.getElementById("windchill");
    console.log(temp, wind);
    if (temp <= 10 && wind > 4.8) {
        const chill = calculateWindChill(temp, wind);
        windChillOutput.textContent = chill.toFixed(1);
    } else {
        windChillOutput.textContent = "N/A";
    }
}

console.log((chill = calculateWindChill(5, 10))); // Example usage

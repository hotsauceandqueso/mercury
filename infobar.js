// -------- BATTERY --------
async function updateBattery() {
    if (!navigator.getBattery) {
        document.getElementById("battery").textContent = "Battery: N/A";
        return;
    }
    
    const battery = await navigator.getBattery();
    function refreshBattery() {
        document.getElementById("battery").textContent =
            `Battery: ${Math.round(battery.level * 100)}%`;
    }

    battery.addEventListener("levelchange", refreshBattery);
    refreshBattery();
}
updateBattery();

// -------- TIME --------
function updateTime() {
    const time = new Date();
    const formatted = time.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
    document.getElementById("time").textContent = `Time: ${formatted}`;
}
setInterval(updateTime, 1000);
updateTime();

// -------- WEATHER --------
async function updateWeather() {
    if (!navigator.geolocation) {
        document.getElementById("weather").textContent = "Weather: N/A";
        return;
    }

    navigator.geolocation.getCurrentPosition(async pos => {
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;

        // Using free MET.no weather API (no key needed!)
        const url = `https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${lat}&lon=${lon}`;

        try {
            const response = await fetch(url, {
                headers: { "User-Agent": "MercuryWebsite/1.0" }
            });
            const data = await response.json();

            const temp = Math.round(
                data.properties.timeseries[0].data.instant.details.air_temperature
            );

            document.getElementById("weather").textContent =
                `Weather: ${temp}°C`;
        } catch {
            document.getElementById("weather").textContent = "Weather: N/A";
        }
    });
}
updateWeather();
setInterval(updateWeather, 5 * 60 * 1000); // Update every 5 min

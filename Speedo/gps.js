
const infoField = document.getElementById('info');
const positionField = document.getElementById('position');
const speedField = document.getElementById('speed');
const accField = document.getElementById('acc');
const altitudeField = document.getElementById('altitude');
const headingField = document.getElementById('heading');



function resultfunc(position) {
    console.log("POS", position);
    if (typeof(position)=="string") {
        console.log("No position found: " + position);
        infoField.innerText = position;
    } else {
        infoField.innerText = "Position found";
        positionField.innerHTML = position.coords.latitude.toFixed(5) + " N - " + position.coords.longitude.toFixed(5) + " E";
        accField.innerHTML = position.coords.accuracy.toFixed(0) + " m";
        altitudeField.innerHTML = position.coords.altitude.toFixed(0) + " m (" + position.coords.altitudeAccuracy.toFixed(0) + " m usikkerhed)";
        speedField.innerHTML = (position.coords.speed / 1000 * 60 * 60).toFixed(0) + " km/t";
        heading.innerText = position.coords.heading.toFixed(0) + "°";
        time = new Date(position.timestamp*1000);
        console.log("Time: " + time);
        }



}

const infoField = document.getElementById('info');
const positionField = document.getElementById('position');
const speedField = document.getElementById('speed');
const accField = document.getElementById('acc');
const altitudeField = document.getElementById('altitude');
const headingField = document.getElementById('heading');

positionField.innerHTML = "positionen er x NE y SW";
speedField.innerHTML = "24 km/t";
accField.innerHTML = "0";

function resultfunc(position) {
    console.log("POS", position);
    if (typeof(position)=="string") {
        console.log("No position found: " + position);
        infoField.innerText = position;
    } else {
        infoField.innerText = "Position found";
        positionField.innerHTML = position.coords.latitude + "N  " + position.coords.longitude + "E";
        accField.innerHTML = position.coords.accuracy + " m";
        altitudeField.innerHTML = position.coords.altitude + " (" + position.coords.altitudeAccuracy + " m)";
        speedField.innerHTML = position.coords.speed;
        heading.innerText = position.coords.heading;
        time = new Date(position.timestamp*1000);
        console.log("Time: " + time);
        }



}
function findLocation(resultfunc) {
    // const status = document.querySelector("#status");
    // const mapLink = document.querySelector("#map-link");

    // mapLink.href = "";
    // mapLink.textContent = "";

    function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        console.log("Position: " + latitude + " " + longitude + " accuracy:" + position.coords.accuracy);
        console.log("Altitude: " + position.coords.altitude + " " + position.coords.altitudeAccuracy);
        console.log("Heading: " +  position.coords.heading);
        console.log("Speed: " +  position.coords.speed);
        console.log("Time", position.timestamp)
        date = new Date(position.timestamp*1000)
        console.log(date)
        //resultfunc(latitude, longitude);
        resultfunc(position);
        return(position)
    }

    function error(err) {
        console.log("Error in finding position", err);
        console.log(err.code);
        console.log(err.message);
        resultfunc(NaN, NaN);
    }

    function get_location() {
        if (!navigator.geolocation) {
            console.log("Geolocation is not supported by browser");
            return "Geolocation is not supported by browser";
        } else {
            const options = {
                enableHighAccuracy: false,
                timeout: 5000,
                maximumAge: 10000,
              };
              
            navigator.geolocation.getCurrentPosition(success, error);
        }
    }
    console.log("findlocation called");
    get_location();
    console.log("return");
}
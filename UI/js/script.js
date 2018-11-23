function getLocation(){
    // Fetch the GEOLOCATION - latitude and longitude coordinates
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position){
            var positionInfo = "Latitude: " + position.coords.latitude + ", " + 
                "Longitude: " + position.coords.longitude;
            document.getElementById("location-view").innerHTML = positionInfo;
        });
    } else{
        alert("Sorry, your browser does not support HTML5 geolocation.");
    }
}
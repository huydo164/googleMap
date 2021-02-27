function initMap() {
    var hanoi = {lat: 21.049021, lng: 105.882881};
    var map = new google.maps.Map(document.getElementById("initMap"),{
        zoom: 13,
        center: hanoi,
        disableDefaultUI: false,
        overviewMapControl: true,
        overviewMapControlOptions: {
            opened: true,
        },
        panControl: false,
        rotateControl: false,
        scaleControl: false,
        zoomControl: true,
        streetViewControl: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: true,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.DROPDOW_MENU,
            position: google.maps.ControlPosition.TOP_RIGHT,
        }
    });

    /*var marker = new google.maps.Marker({
        position: hanoi,
        map: map,
    })*/
    var geocoder = new google.maps.Geocoder();
    document.getElementById("submit").addEventListener("click", () => {
        geocodeAddress(geocoder, map);
    })
    google.maps.event.addDomListener(window, 'load', initMap)
}

function geocodeAddress(geocoder, resultMap) {
    var address = document.getElementById("address").value;

    geocoder.geocode(
        {
            address: address,
        },
        (results, status) => {
            if (status === "OK"){
                resultMap.setCenter(results[0].geometry.location);
                new google.maps.Marker({
                    map: resultMap,
                    position: results[0].geometry.location
                });
            }
            else{
                alert ("không tìm thấy địa chỉ: " + status);
            }
        }
    );
    google.maps.event.addDomListener(window, 'load', geocodeAddress)
}
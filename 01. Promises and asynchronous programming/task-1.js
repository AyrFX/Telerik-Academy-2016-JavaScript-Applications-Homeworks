(function () {
    var output = document.querySelector('#output');
    var promise = new Promise(function (resolve) {
        navigator.geolocation.getCurrentPosition(function (position) {
            resolve(position);
        });
    });

    output.innerHTML = '<p>Locating…</p>';

    promise.then(function success(position) {
            var latitude = position.coords.latitude,
                longitude = position.coords.longitude;

            output.innerHTML = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';

            var img = new Image();
            img.src = 'https://maps.googleapis.com/maps/api/staticmap?center=' + latitude + ',' + longitude +
                '&zoom=15&size=300x300&sensor=false';

            output.appendChild(img);
        })
        .catch(function (error) {
            output.innerHTML = `Unable to retrieve your location: ${error}`;
        });
}());
